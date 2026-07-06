$root = (Get-Location).Path
$utf8 = New-Object System.Text.UTF8Encoding($false)
$fallback = '<noscript><nav class="noscript-nav" aria-label="التنقل الرئيسي"><a href="index.html">الرئيسية</a><a href="about.html">من نحن</a><a href="services.html">خدماتنا</a><a href="equipment.html">الأسطول</a><a href="projects.html">مشاريعنا</a><a href="contact.html">تواصل معنا</a></nav></noscript>'
Get-ChildItem -LiteralPath $root -Filter '*.html' |
  Where-Object { $_.Name -notlike '*backup*' } |
  ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    if ($content -notmatch 'class="noscript-nav"') {
      $content = $content.Replace('<div data-site-header></div>', '<div data-site-header></div>' + $fallback)
      [System.IO.File]::WriteAllText($_.FullName, $content, $utf8)
      Write-Output "Fallback navigation: $($_.Name)"
    }
  }
