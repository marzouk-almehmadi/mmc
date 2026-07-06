Add-Type -AssemblyName System.Drawing

$sourceDir = Join-Path $PSScriptRoot '..\assets\images\real-source'
$outputDir = Join-Path $PSScriptRoot '..\assets\images\real'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$jobs = @(
    @{ Prefix = '40-'; Name = 'hero-mining-fleet.jpg'; Width = 2200; Quality = 88 },
    @{ Prefix = '15-'; Name = 'team-safety.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '22-'; Name = 'quarry-operations.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '01-'; Name = 'road-paving.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '37-'; Name = 'excavators-earthworks.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '41-'; Name = 'contracting-truck-fleet.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '31-'; Name = 'crushing-plant.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '45-'; Name = 'haulage-fleet.jpg'; Width = 2000; Quality = 87 },
    @{ Prefix = '26-'; Name = 'loader-and-truck.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '33-'; Name = 'asphalt-paver.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '23-'; Name = 'industrial-loading.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '43-'; Name = 'safety-briefing.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '19-'; Name = 'earthworks-panorama.jpg'; Width = 1900; Quality = 86 },
    @{ Prefix = '07-'; Name = 'aggregate-processing.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '13-'; Name = 'heavy-truck-line.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '21-'; Name = 'site-excavation.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '24-'; Name = 'industrial-plant-night.jpg'; Width = 1800; Quality = 86 },
    @{ Prefix = '38-'; Name = 'completed-road-yard.jpg'; Width = 1800; Quality = 86 }
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }

foreach ($job in $jobs) {
    $source = Get-ChildItem -LiteralPath $sourceDir -File |
        Where-Object { $_.Name.StartsWith($job.Prefix) } |
        Select-Object -First 1
    if (-not $source) { throw "Image with prefix $($job.Prefix) was not found." }

    $image = [System.Drawing.Image]::FromFile($source.FullName)
    try {
        $targetWidth = [Math]::Min([int]$job.Width, $image.Width)
        $targetHeight = [int][Math]::Round($image.Height * ($targetWidth / $image.Width))
        $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)
            } finally { $graphics.Dispose() }

            $quality = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality,
                [long]$job.Quality
            )
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = $quality
            try {
                $destination = Join-Path $outputDir $job.Name
                $bitmap.Save($destination, $jpegCodec, $encoderParams)
            } finally {
                $quality.Dispose()
                $encoderParams.Dispose()
            }
        } finally { $bitmap.Dispose() }
    } finally { $image.Dispose() }
}

Get-ChildItem -LiteralPath $outputDir -File | Sort-Object Name |
    Select-Object Name, Length
