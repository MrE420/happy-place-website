#!/bin/bash

# Git LFS Migration Script for Happy Place Website
# This script helps migrate large media files to Git LFS
# It requires git-lfs to be installed: https://git-lfs.com

echo "Happy Place Git LFS Migration Tool"
echo "=================================="
echo "This script will help migrate large files to Git LFS."
echo "NOTE: This should be done on a fresh clone in a separate directory."
echo ""

# Check if git-lfs is installed
if ! command -v git-lfs &> /dev/null; then
    echo "Error: Git LFS is not installed."
    echo "Please install Git LFS first: https://git-lfs.com"
    exit 1
fi

# Initialize Git LFS
echo "Initializing Git LFS..."
git lfs install

# Track file patterns based on .gitattributes
echo "Setting up tracking patterns for large files..."

# Image files
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.gif"
git lfs track "*.webp"
git lfs track "*.ico"

# Media files
git lfs track "*.mp4"
git lfs track "*.mov"
git lfs track "*.mp3"
git lfs track "*.wav"

# Document files
git lfs track "*.pdf"
git lfs track "*.psd"
git lfs track "*.ai"
git lfs track "*.sketch"

# Add .gitattributes file
git add .gitattributes

echo ""
echo "Git LFS tracking has been set up for the following file types:"
git lfs track

echo ""
echo "Next steps:"
echo "1. Run 'git lfs migrate import --include=\"*.png,*.jpg,*.jpeg,*.webp\" --everything'"
echo "   (This will rewrite history and migrate existing files to LFS)"
echo "2. Push the changes with 'git push --force'"
echo "3. Tell all team members to re-clone the repository"
echo ""
echo "IMPORTANT: This will rewrite git history. Make sure you have a backup before proceeding."