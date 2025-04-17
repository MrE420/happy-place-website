#!/bin/bash

# Git Repository Cleanup Script for Happy Place Website
# Use this script to reduce the size of the git repository

# Display current size
echo "Current Git repository size:"
du -sh .git

# Step 1: Remove Git's reflog entries (references) older than 30 days
echo "Removing old reflog entries..."
git reflog expire --expire=30.days --all

# Step 2: Run garbage collection to compress files and remove unnecessary files
echo "Running git garbage collection..."
git gc --aggressive --prune=now

# Step 3: Clean up unnecessary files
echo "Cleaning up unnecessary files..."
git clean -fd

# Display final size
echo "Git repository size after cleanup:"
du -sh .git

echo "Cleanup complete!"
echo "Note: If you need more aggressive size reduction, you may need to use git-filter-repo or BFG Repo-Cleaner tools."
echo "These tools require separate installation and can rewrite Git history permanently."