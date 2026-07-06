$root = (Get-Location).Path
$utf8 = New-Object System.Text.UTF8Encoding($false)
$base = 'https://www.marzuk.org/'
$descriptions = @{
  'index.html' = 'شركة مرزوق المحمادي لتأجير المعدات الثقيلة وتشغيل المحاجر وخدمات التعدين والمقاولات والأعمال الترابية في المملكة العربية السعودية.'
  'about.html' = 'تعرف على شركة مرزوق المحمادي وخبرتها السعودية في المقاولات والتعدين وإدارة المحاجر وتأجير المعدات الثقيلة.'
  'services.html' = 'خدمات متكاملة في التعدين وتشغيل المحاجر والمقاولات والأعمال الترابية والطرق وتأجير المعدات الثقيلة.'
  'equipment.html' = 'أسطول شركة مرزوق المحمادي من الحفارات واللوادر والشاحنات ومعدات التكسير لخدمة التعدين والمحاجر والمقاولات.'
  'projects.html' = 'مشاريع شركة مرزوق المحمادي في التعدين والمحاجر والطرق والأعمال الترابية وتوريد وتشغيل المعدات الثقيلة.'
  'contact.html' = 'تواصل مع شركة مرزوق المحمادي لطلب خدمات تأجير المعدات الثقيلة والمقاولات والتعدين وتشغيل المحاجر.'
  'careers.html' = 'انضم إلى فريق شركة مرزوق المحمادي واعمل في مشاريع المقاولات والتعدين والمحاجر والمعدات الثقيلة.'
  'certificates.html' = 'شهادات واعتمادات شركة مرزوق المحمادي والتزامها بالسلامة والجودة في التعدين والمقاولات وتشغيل المعدات.'
  'privacy.html' = 'سياسة الخصوصية لموقع شركة مرزوق المحمادي المحدودة.'
  'terms.html' = 'شروط استخدام موقع شركة مرزوق المحمادي المحدودة.'
}

foreach ($name in $descriptions.Keys) {
  $path = Join-Path $root $name
  if (-not (Test-Path $path)) { continue }
  $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  $description = $descriptions[$name]
  $title = [regex]::Match($content, '<title>(.*?)</title>', 'Singleline').Groups[1].Value
  $url = if ($name -eq 'index.html') { $base } else { $base + $name }

  if ($content -match '<meta\s+name="description"[^>]*>') {
    $content = [regex]::Replace($content, '<meta\s+name="description"[^>]*>', '<meta name="description" content="' + $description + '">', 1)
  } else {
    $content = $content.Replace('<title>', '<meta name="description" content="' + $description + '"><title>')
  }
  if ($content -notmatch 'rel="canonical"') {
    $content = $content.Replace('<title>', '<link rel="canonical" href="' + $url + '"><title>')
  }
  if ($content -notmatch 'property="og:title"') {
    $social = '<meta property="og:title" content="' + $title + '">' +
      '<meta property="og:description" content="' + $description + '">' +
      '<meta property="og:type" content="website">' +
      '<meta property="og:url" content="' + $url + '">' +
      '<meta property="og:image" content="' + $base + 'assets/images/real/hero-mining-fleet.jpg">' +
      '<meta name="twitter:card" content="summary_large_image">'
    $content = $content.Replace('<title>', $social + '<title>')
  } elseif ($content -notmatch 'property="og:url"') {
    $content = $content.Replace('<meta property="og:type" content="website">', '<meta property="og:type" content="website"><meta property="og:url" content="' + $url + '">')
  }
  [System.IO.File]::WriteAllText($path, $content, $utf8)
  Write-Output "SEO metadata: $name"
}

$notFound = Join-Path $root '404.html'
$content = [System.IO.File]::ReadAllText($notFound, [System.Text.Encoding]::UTF8)
if ($content -notmatch 'name="robots"') {
  $content = $content.Replace('<title>', '<meta name="robots" content="noindex,follow"><title>')
}
[System.IO.File]::WriteAllText($notFound, $content, $utf8)
