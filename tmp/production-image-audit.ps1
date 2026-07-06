Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$pages = Get-ChildItem -LiteralPath $root -Filter '*.html' |
    Where-Object { $_.Name -notlike '*backup*' }
$utf8 = New-Object System.Text.UTF8Encoding($false)

foreach ($page in $pages) {
    $content = [System.IO.File]::ReadAllText($page.FullName, [System.Text.Encoding]::UTF8)
    $content = [regex]::Replace($content, '<img\b[^>]*>', {
        param($match)
        $tag = $match.Value
        $srcMatch = [regex]::Match($tag, '\bsrc="([^"]+)"')
        if (-not $srcMatch.Success) { return $tag }
        $src = $srcMatch.Groups[1].Value.Split('?')[0]
        if ($src -match '^(?:https?:|data:)') { return $tag }
        $asset = Join-Path $root $src
        if (-not (Test-Path -LiteralPath $asset)) { return $tag }

        if ($tag -notmatch '\bwidth="') {
            try {
                $image = [System.Drawing.Image]::FromFile($asset)
                try {
                    $dimensions = " width=`"$($image.Width)`" height=`"$($image.Height)`""
                    $tag = $tag.Insert($tag.Length - 1, $dimensions)
                } finally { $image.Dispose() }
            } catch { }
        }

        if ($tag -notmatch '\bdecoding="') {
            $tag = $tag.Insert($tag.Length - 1, ' decoding="async"')
        }
        $isHero = $tag -match 'class="[^"]*hero-bg' -or $tag -match 'fetchpriority="high"'
        if (-not $isHero -and $tag -notmatch '\bloading="') {
            $tag = $tag.Insert($tag.Length - 1, ' loading="lazy"')
        }
        return $tag
    })
    [System.IO.File]::WriteAllText($page.FullName, $content, $utf8)
    Write-Output "Optimized markup: $($page.Name)"
}
