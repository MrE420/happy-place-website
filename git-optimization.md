# Git Repository Optimization for Happy Place Website

## Current Issue
The repository size (5.7GB) is causing performance problems due to the history containing large image files.

## Immediate Solutions

### 1. Use the Cleanup Script

Run the provided cleanup script to perform basic Git maintenance:

```bash
./git-cleanup.sh
```

This script:
- Removes old reflog entries
- Runs Git garbage collection with aggressive settings
- Cleans up unnecessary files

### 2. Use Git LFS for Future Development

We've added `.gitattributes` to use Git Large File Storage (LFS) for media files going forward. Before pushing new media files, team members should:

1. Install Git LFS: https://git-lfs.com
2. Run `git lfs install` once per repo

### 3. Follow Media Optimization Guidelines

- Optimize all images before committing (already done for current assets)
- Use WebP format when possible (reduces size by ~70-90% vs PNGs/JPGs)
- Keep original high-res files outside of Git (in cloud storage)
- Reference external CDN URLs for very large assets when appropriate

## For More Drastic Size Reduction

For more aggressive cleanup (requiring separate tools):

### Using BFG Repo-Cleaner

```bash
# 1. Make a fresh clone
git clone --mirror git://example.com/your-repo.git
cd your-repo.git

# 2. Run BFG to remove large files
java -jar bfg.jar --strip-blobs-bigger-than 10M

# 3. Clean up
git reflog expire --expire=now --all && git gc --prune=now --aggressive

# 4. Push changes
git push
```

### Using git-filter-repo

```bash
# Install
pip install git-filter-repo

# Remove files over 10MB
git-filter-repo --strip-blobs-bigger-than 10M
```

## Best Practices Going Forward

1. **Optimize images** before committing
2. **Use Git LFS** for binary and media files
3. **Don't commit** dependencies, build artifacts, or generated files
4. Run `.git-cleanup.sh` periodically
5. Store **original high-res assets** in a separate cloud storage system
6. Consider using a separate media server for large assets

## Important Note

**Warning:** Using BFG or git-filter-repo will rewrite Git history. This is a destructive operation. All team members will need to re-clone the repository after this change.