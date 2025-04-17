#!/bin/bash

# Find Large Files in Git Repository
# This script identifies the largest files in your Git repository history

echo "Finding largest files in Git repository..."
echo "This may take some time for large repositories..."
echo

# Set the threshold size for "large" files (10MB default)
THRESHOLD_SIZE=${1:-10485760}  # 10MB in bytes
THRESHOLD_SIZE_MB=$((THRESHOLD_SIZE / 1048576))

echo "Looking for files larger than ${THRESHOLD_SIZE_MB}MB"
echo

# Create a temporary file
TEMPFILE=$(mktemp)

# List all objects in the repository
echo "Analyzing Git objects..."
git rev-list --objects --all | grep -v "^[0-9a-f]\{40\} " > $TEMPFILE

# Find the size of each object
echo "Calculating object sizes..."
while read -r OBJECT; do
    SIZE=$(git cat-file -s "$OBJECT")
    if [ "$SIZE" -gt "$THRESHOLD_SIZE" ]; then
        echo "$SIZE $OBJECT" >> "${TEMPFILE}.sized"
    fi
done < "$TEMPFILE"

# Sort by size (largest first)
if [ -f "${TEMPFILE}.sized" ]; then
    echo "Sorting results..."
    sort -rn "${TEMPFILE}.sized" > "${TEMPFILE}.sorted"
    
    # Display results with file paths and human-readable sizes
    echo "===== LARGEST FILES IN GIT HISTORY ====="
    echo "SIZE (MB) | OBJECT | PATH"
    echo "---------------------------------"
    
    while read -r LINE; do
        SIZE=$(echo "$LINE" | awk '{print $1}')
        OBJECT=$(echo "$LINE" | awk '{print $2}')
        SIZE_MB=$(echo "scale=2; $SIZE / 1048576" | bc)
        
        # Find the path for this object
        PATH=$(git rev-list --objects --all | grep "$OBJECT" | awk '{print $2}')
        
        if [ -n "$PATH" ]; then
            echo "$SIZE_MB MB | $OBJECT | $PATH"
        else
            echo "$SIZE_MB MB | $OBJECT | (path not found)"
        fi
    done < "${TEMPFILE}.sorted"
    
    # Count and summarize
    TOTAL_FILES=$(wc -l < "${TEMPFILE}.sorted")
    echo
    echo "Found $TOTAL_FILES files larger than ${THRESHOLD_SIZE_MB}MB"
    echo "These large files are likely contributing to your repository size."
    echo "Consider using BFG Repo-Cleaner or git-filter-repo to remove them."
else
    echo "No files larger than ${THRESHOLD_SIZE_MB}MB found."
fi

# Clean up temporary files
rm -f "$TEMPFILE" "${TEMPFILE}.sized" "${TEMPFILE}.sorted"

echo
echo "Complete! Review the list above to identify large files to target for cleanup."