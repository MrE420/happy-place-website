#!/bin/bash

# Image Optimization Script for Happy Place Website
# Use this script to optimize PNG images throughout the codebase

echo "Happy Place PNG Optimization Tool"
echo "================================="
echo "This script will optimize PNG images to reduce file size while maintaining quality"
echo ""

# Check if pngquant is installed
if ! command -v pngquant &> /dev/null; then
    echo "Error: pngquant is not installed."
    echo "Please install pngquant first using apt-get, brew, or another package manager."
    exit 1
fi

# Create backup directory if it doesn't exist
mkdir -p public/images/original-backup
mkdir -p public/products/original-backup

# Find all PNG files in the public directory
echo "Searching for PNG files..."
PNG_FILES=$(find public -name "*.png" | grep -v "original-backup" | grep -v "optimized")

# Count PNG files
COUNT=$(echo "$PNG_FILES" | wc -l)
echo "Found $COUNT PNG files to optimize"

# Check if any files were found
if [ "$COUNT" -eq 0 ]; then
    echo "No PNG files found in the public directory."
    exit 0
fi

# Initialize counters
TOTAL_ORIGINAL_SIZE=0
TOTAL_OPTIMIZED_SIZE=0
PROCESSED=0

echo ""
echo "Starting optimization process..."
echo "--------------------------------"

# Process each PNG file
for FILE in $PNG_FILES; do
    # Get original size
    ORIGINAL_SIZE=$(stat -c%s "$FILE")
    TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + ORIGINAL_SIZE))
    
    # Get human-readable original size
    ORIGINAL_SIZE_HR=$(numfmt --to=iec-i --suffix=B --format="%.2f" $ORIGINAL_SIZE)
    
    # Create backup directory structure
    BACKUP_FILE=$(echo "$FILE" | sed 's|public/|public/|' | sed 's|/[^/]*$|/original-backup&|')
    BACKUP_DIR=$(dirname "$BACKUP_FILE")
    mkdir -p "$BACKUP_DIR"
    
    # Backup original file if it doesn't exist
    if [ ! -f "$BACKUP_FILE" ]; then
        cp "$FILE" "$BACKUP_FILE"
        echo "✓ Backup created: $BACKUP_FILE"
    fi
    
    echo -n "Optimizing: $FILE ($ORIGINAL_SIZE_HR)... "
    
    # Optimize the file with pngquant
    pngquant --force --ext .png --speed 1 --quality=65-85 "$FILE"
    
    # Get optimized size
    OPTIMIZED_SIZE=$(stat -c%s "$FILE")
    TOTAL_OPTIMIZED_SIZE=$((TOTAL_OPTIMIZED_SIZE + OPTIMIZED_SIZE))
    
    # Calculate reduction percentage
    REDUCTION=$((100 - (OPTIMIZED_SIZE * 100 / ORIGINAL_SIZE)))
    OPTIMIZED_SIZE_HR=$(numfmt --to=iec-i --suffix=B --format="%.2f" $OPTIMIZED_SIZE)
    
    echo "Done! ($OPTIMIZED_SIZE_HR, -$REDUCTION%)"
    
    PROCESSED=$((PROCESSED + 1))
done

# Calculate total reduction
TOTAL_REDUCTION=$((100 - (TOTAL_OPTIMIZED_SIZE * 100 / TOTAL_ORIGINAL_SIZE)))
TOTAL_ORIGINAL_SIZE_HR=$(numfmt --to=iec-i --suffix=B --format="%.2f" $TOTAL_ORIGINAL_SIZE)
TOTAL_OPTIMIZED_SIZE_HR=$(numfmt --to=iec-i --suffix=B --format="%.2f" $TOTAL_OPTIMIZED_SIZE)
SAVED_SIZE=$((TOTAL_ORIGINAL_SIZE - TOTAL_OPTIMIZED_SIZE))
SAVED_SIZE_HR=$(numfmt --to=iec-i --suffix=B --format="%.2f" $SAVED_SIZE)

echo ""
echo "Optimization Complete!"
echo "----------------------"
echo "Processed $PROCESSED PNG files"
echo "Original total size: $TOTAL_ORIGINAL_SIZE_HR"
echo "Optimized total size: $TOTAL_OPTIMIZED_SIZE_HR"
echo "Saved: $SAVED_SIZE_HR ($TOTAL_REDUCTION% reduction)"
echo ""
echo "Note: Original files have been backed up to **/original-backup directories"