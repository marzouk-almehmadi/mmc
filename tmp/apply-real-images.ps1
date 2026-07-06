$root = Split-Path $PSScriptRoot -Parent
$utf8 = New-Object System.Text.UTF8Encoding($false)

$pageMaps = @{
    'index.html' = [ordered]@{
        'assets/images/equipment/thumbnail_image004-min.webp' = 'assets/images/real/hero-mining-fleet.jpg'
        'assets/images/equipment/IMG_5080.jpeg' = 'assets/images/real/team-safety.jpg'
        'assets/images/equipment/miningmegamenu-min.webp' = 'assets/images/real/quarry-operations.jpg'
        'assets/images/equipment/epsacivilworksmegamenu1.webp' = 'assets/images/real/road-paving.jpg'
        'assets/images/equipment/blast3-min.webp' = 'assets/images/real/site-excavation.jpg'
        'assets/images/equipment/epsaequipmentmegamenu.webp' = 'assets/images/real/contracting-truck-fleet.jpg'
        'assets/images/equipment/thumbnail_image011-1-min.webp' = 'assets/images/real/haulage-fleet.jpg'
        'assets/images/equipment/image_561-transformed.webp' = 'assets/images/real/excavators-earthworks.jpg'
        'assets/images/equipment/image_560-transformed.webp' = 'assets/images/real/loader-and-truck.jpg'
        'assets/images/equipment/loading3-min.webp' = 'assets/images/real/quarry-operations.jpg'
        'assets/images/equipment/grading1-min.webp' = 'assets/images/real/road-paving.jpg'
        'assets/images/equipment/epsacrushingplant1-min.webp' = 'assets/images/real/crushing-plant.jpg'
        'assets/images/equipment/epsaheavytrucks1-min-1.webp' = 'assets/images/real/contracting-truck-fleet.jpg'
    }
    'equipment.html' = [ordered]@{
        'assets/images/equipment/thumbnail_image011-1-min.webp' = 'assets/images/real/hero-mining-fleet.jpg'
        'assets/images/equipment/IMG_5080.jpeg' = 'assets/images/real/contracting-truck-fleet.jpg'
        'assets/images/equipment/image_561-transformed.webp' = 'assets/images/real/excavators-earthworks.jpg'
        'assets/images/equipment/image_560-transformed.webp' = 'assets/images/real/loader-and-truck.jpg'
        'assets/images/equipment/loading3-min.webp' = 'assets/images/real/site-excavation.jpg'
        'assets/images/equipment/thumbnail_image004-min.webp' = 'assets/images/real/haulage-fleet.jpg'
        'assets/images/equipment/image-548.webp' = 'assets/images/real/hero-mining-fleet.jpg'
        'assets/images/equipment/epsaheavytrucks1-min-1.webp' = 'assets/images/real/heavy-truck-line.jpg'
        'assets/images/equipment/9999.webp' = 'assets/images/real/earthworks-panorama.jpg'
        'assets/images/equipment/grading1-min.webp' = 'assets/images/real/completed-road-yard.jpg'
        'assets/images/equipment/epsacrushingplant1-min.webp' = 'assets/images/real/crushing-plant.jpg'
    }
    'about.html' = [ordered]@{
        'assets/images/equipment/IMG_5080.jpeg' = 'assets/images/real/team-safety.jpg'
        'assets/images/equipment/image-515-2.png' = 'assets/images/real/industrial-loading.jpg'
    }
    'services.html' = [ordered]@{
        'assets/images/equipment/miningmegamenu-min.webp' = 'assets/images/real/quarry-operations.jpg'
        'assets/images/equipment/epsacivilworksmegamenu1.webp' = 'assets/images/real/road-paving.jpg'
        'assets/images/equipment/blast3-min.webp' = 'assets/images/real/site-excavation.jpg'
        'assets/images/equipment/epsaequipmentmegamenu.webp' = 'assets/images/real/contracting-truck-fleet.jpg'
        'assets/images/equipment/epsaheavytrucks1-min-1.webp' = 'assets/images/real/haulage-fleet.jpg'
        'assets/images/equipment/grading1-min.webp' = 'assets/images/real/excavators-earthworks.jpg'
        'assets/images/equipment/loading3-min.webp' = 'assets/images/real/loader-and-truck.jpg'
        'assets/images/equipment/epsacrushingplant1-min.webp' = 'assets/images/real/crushing-plant.jpg'
        'assets/images/equipment/66453.webp' = 'assets/images/real/asphalt-paver.jpg'
    }
    'projects.html' = [ordered]@{
        'assets/images/equipment/miningmegamenu-min.webp' = 'assets/images/real/quarry-operations.jpg'
        'assets/images/equipment/loading3-min.webp' = 'assets/images/real/industrial-loading.jpg'
        'assets/images/equipment/grading1-min.webp' = 'assets/images/real/road-paving.jpg'
        'assets/images/equipment/epsacrushingplant1-min.webp' = 'assets/images/real/crushing-plant.jpg'
        'assets/images/equipment/thumbnail_image004-min.webp' = 'assets/images/real/haulage-fleet.jpg'
    }
    'careers.html' = [ordered]@{
        'assets/images/equipment/epsapeoplemegamenu-min.webp' = 'assets/images/real/team-safety.jpg'
        'assets/images/equipment/educationmegamenu1-min.webp' = 'assets/images/real/safety-briefing.jpg'
    }
    'certificates.html' = [ordered]@{
        'assets/images/equipment/safetymegamenu1-min.webp' = 'assets/images/real/safety-briefing.jpg'
    }
    'contact.html' = [ordered]@{
        'assets/images/equipment/epsaheavytrucks1-min-1.webp' = 'assets/images/real/contracting-truck-fleet.jpg'
    }
    '404.html' = [ordered]@{
        'assets/images/equipment/thumbnail_image011-1-min.webp' = 'assets/images/real/earthworks-panorama.jpg'
    }
}

foreach ($page in $pageMaps.Keys) {
    $path = Join-Path $root $page
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    foreach ($pair in $pageMaps[$page].GetEnumerator()) {
        $content = $content.Replace($pair.Key, $pair.Value)
    }
    [System.IO.File]::WriteAllText($path, $content, $utf8)
    Write-Output "Updated $page"
}
