#!/bin/bash
# ============================================================
# kimreidy.com Image Downloader
# Downloads all images from WordPress into your local /images/
# folder with clean names that match what the HTML files expect.
#
# HOW TO RUN:
#   Mac:     Open Terminal, cd to your site folder, run:
#            bash download-images.sh
#   Windows: Open Git Bash, cd to your site folder, run:
#            bash download-images.sh
#
# Run this BEFORE canceling Bluehost hosting!
# ============================================================

mkdir -p images
echo "Downloading 20 images from kimreidy.com..."
echo ""

# LOGOS & BRANDING
echo "[1/20] Logo seal (color)..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/kim_logo_banner.png" -o "images/logo-seal-color.png"

echo "[2/20] Logo seal (white/footer)..."
curl -sL "https://www.kimreidy.com/wp-content/uploads/2022/01/kim_site_logo.png" -o "images/logo-seal-white.png"

echo "[3/20] Pointe3 wordmark logo..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/pointe_logo_one.png" -o "images/pointe3-logo.png"

echo "[4/20] Kind Words / testimonial badge..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/testimonials-circle.png" -o "images/kind-words-logo.png"

# KIM'S HEADSHOTS
echo "[5/20] Kim headshot (homepage/outdoor)..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/02/kim_home_pic-min.png" -o "images/kim-headshot-outdoor.png"

echo "[6/20] Kim headshot (about page)..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/02/kim_new_pic-min.png" -o "images/kim-headshot-about.png"

# SEATTLE PHOTOS
echo "[7/20] Pike Place Market photo..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/Buyers.jpg" -o "images/pike-place.jpg"

echo "[8/20] Seattle Great Wheel photo..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/Seller_Image-min.jpg" -o "images/seattle-wheel.jpg"

echo "[9/20] Testimonial photos (set of 3)..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/Testimonial-1.jpg" -o "images/testimonial-1.jpg"
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/Testimonial-2.jpg" -o "images/testimonial-2.jpg"
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/Testimonial-3.jpg" -o "images/testimonial-3.jpg"

# PRICE RANGE TILES
echo "[12/20] Price tile: $0-500K..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/https___kimreidy.avenuehq.com_wp-content_uploads_sites_2375_2020_07_0-500-1-1368x2048-1.jpg" -o "images/price-under-500k.jpg"

echo "[13/20] Price tile: $500K-800K..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/https___kimreidy.avenuehq.com_wp-content_uploads_sites_2375_2020_07_500-800-1-1368x2048-1.jpg" -o "images/price-500-800k.jpg"

echo "[14/20] Price tile: $800K-1.5M..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/https___kimreidy.avenuehq.com_wp-content_uploads_sites_2375_2020_07_800-1.5-1368x2048-1.jpg" -o "images/price-800-1500k.jpg"

echo "[15/20] Price tile: $1.5M+..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/https___kimreidy.avenuehq.com_wp-content_uploads_sites_2375_2020_07_1.5M-1368x2048-1.jpg" -o "images/price-above-1500k.jpg"

# RESOURCE ICONS
echo "[16/20] Buyer's Guide icon..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/buyer_icon.png" -o "images/icon-buyer.png"

echo "[17/20] Home Finder icon..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/find_home_icon.png" -o "images/icon-home-finder.png"

echo "[18/20] Mortgage Calculator icon..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/mortgage_icon.png" -o "images/icon-mortgage.png"

echo "[19/20] Seller's Guide icon..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/sell_gide_icon.png" -o "images/icon-seller.png"

echo "[20/20] Home Evaluation icon..."
curl -sL "https://kimreidy.com/wp-content/uploads/2022/01/home_evalution_icon.png" -o "images/icon-home-eval.png"

# VERIFY
echo ""
echo "============================================"
echo "Download complete! Checking files..."
echo "============================================"
MISSING=0
for f in \
    images/logo-seal-color.png \
    images/logo-seal-white.png \
    images/pointe3-logo.png \
    images/kind-words-logo.png \
    images/kim-headshot-outdoor.png \
    images/kim-headshot-about.png \
    images/pike-place.jpg \
    images/seattle-wheel.jpg \
    images/testimonial-1.jpg \
    images/testimonial-2.jpg \
    images/testimonial-3.jpg \
    images/price-under-500k.jpg \
    images/price-500-800k.jpg \
    images/price-800-1500k.jpg \
    images/price-above-1500k.jpg \
    images/icon-buyer.png \
    images/icon-home-finder.png \
    images/icon-mortgage.png \
    images/icon-seller.png \
    images/icon-home-eval.png; do
    SIZE=$(wc -c < "$f" 2>/dev/null || echo 0)
    if [ "$SIZE" -lt 1000 ]; then
        echo "  WARNING: $f may be missing or corrupt (${SIZE} bytes)"
        MISSING=$((MISSING+1))
    else
        echo "  OK: $f ($(du -sh $f | cut -f1))"
    fi
done

echo ""
if [ "$MISSING" -eq 0 ]; then
    echo "All 20 images downloaded successfully!"
    echo "Next step: upload the images/ folder to your GitHub repository."
else
    echo "$MISSING file(s) may have issues. Check the warnings above."
    echo "Those images may need to be downloaded manually."
fi
