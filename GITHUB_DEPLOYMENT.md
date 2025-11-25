# GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right, select **"New repository"**
3. Fill in repository details:
   - **Repository name:** `bee-academy` (or your preferred name)
   - **Description:** "Qbees Training Academy - Professional Airbnb Cleaning Training"
   - **Visibility:** Choose **Public** (required for free GitHub Pages) or **Private** (requires GitHub Pro)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Push Code to GitHub

The git repository has already been initialized. Now run these commands in Terminal:

```bash
# Navigate to project directory
cd "/Users/khallydashdorj/Projects/Bee Academy"

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit: Qbees Training Academy MVP"

# Add GitHub remote (replace YOUR-USERNAME and YOUR-REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Important:** Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository page
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://khally.github.io/bee-academy/`

### Step 5: Add Your YouTube Video

1. Get your YouTube video embed code or URL
2. Edit `/resources/training-video.html`
3. Find this section (around line 95):

```html
<!-- PLACEHOLDER: Replace with actual video embed when ready -->
<!-- YouTube example:
<iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
-->
```

4. Replace `YOUR_VIDEO_ID` with your actual YouTube video ID
5. Uncomment the iframe code
6. Remove or comment out the placeholder div

Example:
```html
<!-- Remove this placeholder -->
<!-- <div class="video-placeholder">...</div> -->

<!-- Add your video -->
<iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

7. Commit and push:
```bash
git add resources/training-video.html
git commit -m "Add YouTube training video"
git push
```

### Step 6: Update QR Code Generator

1. Edit `/admin/qr-generator.html`
2. Find line ~300: `const BASE_URL = 'https://yourdomain.com/bee-academy';`
3. Replace with your GitHub Pages URL:
```javascript
const BASE_URL = 'https://YOUR-USERNAME.github.io/YOUR-REPO-NAME';
```
4. Commit and push:
```bash
git add admin/qr-generator.html
git commit -m "Update QR code base URL"
git push
```

### Step 7: Generate and Print QR Codes

1. Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/admin/qr-generator.html`
2. Generate QR codes for:
   - Homepage
   - Module 1
   - Cleaning Checklist
   - Chemical Guide
   - Pricing Calculator
3. Download PNG files
4. Print deployment materials from `/admin/deployment-materials.html`

---

## 📝 Making Updates After Deployment

Whenever you make changes to your code:

```bash
# Add changed files
git add .

# Commit with descriptive message
git commit -m "Your update description"

# Push to GitHub
git push

# GitHub Pages will auto-deploy in 1-2 minutes
```

---

## 🔧 Troubleshooting

### Issue: Page shows README instead of website
**Solution:** Make sure `index.html` exists in the root directory

### Issue: CSS/JS not loading
**Solution:** Check that all links in HTML files use relative paths (not absolute)

### Issue: 404 errors
**Solution:**
- Wait 2-3 minutes after first deployment
- Check that GitHub Pages is enabled in Settings
- Verify branch is set to `main` and folder is `/ (root)`

### Issue: Videos not playing
**Solution:**
- Ensure YouTube video is public or unlisted (not private)
- Check that video ID is correct in iframe src
- Test video embed code on a simple HTML page first

---

## 🌐 Custom Domain (Optional)

If you want to use a custom domain like `training.qbees.com.au`:

1. In GitHub repository Settings > Pages
2. Enter custom domain: `training.qbees.com.au`
3. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add CNAME record pointing to: `YOUR-USERNAME.github.io`
4. Wait for DNS propagation (can take up to 48 hours)
5. Enable "Enforce HTTPS" in GitHub Pages settings

---

## 📊 Monitoring Usage

GitHub doesn't provide built-in analytics. To track usage:

**Option 1: Google Analytics**
1. Create Google Analytics account
2. Get tracking ID
3. Add tracking code to all HTML pages before `</head>`

**Option 2: Simple Analytics (Privacy-focused)**
- Use alternatives like Plausible or Fathom Analytics

**Option 3: GitHub Insights**
- Repository > Insights > Traffic (shows page views, but limited)

---

## ✅ Post-Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] YouTube video embedded and playing
- [ ] QR code generator updated with correct URL
- [ ] QR codes generated and downloaded
- [ ] Deployment materials printed
- [ ] All links working on live site
- [ ] Mobile responsiveness tested
- [ ] Language switcher working
- [ ] Tested on multiple devices (iPhone, Android)
- [ ] Team notified with URL
- [ ] QR codes distributed
- [ ] Feedback collection process set up

---

## 📞 Need Help?

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Git Basics:** https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- **GitHub Support:** https://support.github.com

---

**Your Bee Training Academy is ready to go live! 🚀🐝**
