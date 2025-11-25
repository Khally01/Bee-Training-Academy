# 🚀 Deployment Guide - Bee Training Academy

## Quick Start (Local Testing)

### Option 1: Direct File Opening
```bash
# Navigate to project folder
cd "/Users/khallydashdorj/Projects/Bee Academy"

# Open in default browser
open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3 (built-in on Mac)
cd "/Users/khallydashdorj/Projects/Bee Academy"
python3 -m http.server 8000

# Visit: http://localhost:8000
```

### Option 3: VS Code Live Server
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

---

## 🌐 Production Deployment

### GitHub Pages (Free, Recommended)

**Step 1: Create GitHub Repository**
```bash
cd "/Users/khallydashdorj/Projects/Bee Academy"

# Initialize git
git init

# Create .gitignore
echo ".DS_Store" > .gitignore

# Add all files
git add .

# First commit
git commit -m "Initial commit: Bee Training Academy"

# Create repo on GitHub (via web interface):
# https://github.com/new
# Repository name: bee-training-academy
# Public or Private (your choice)

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/bee-training-academy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Click "Save"
6. Wait 2-3 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/bee-training-academy/`

---

### Alternative: Netlify (Also Free)

**Option A: Drag & Drop**
1. Go to https://app.netlify.com/drop
2. Drag your "Bee Academy" folder
3. Site is live immediately!

**Option B: GitHub Integration**
1. Sign up at https://netlify.com
2. Click "New site from Git"
3. Connect GitHub repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: /
5. Click "Deploy site"

**Custom Domain (Optional)**
- In Netlify dashboard: Domain settings → Add custom domain
- Example: `training.qbees.com.au`

---

## 📱 QR Code Generation

Once deployed, create QR codes for easy mobile access:

**Free Tools:**
- https://qr-code-generator.com
- https://www.qrcode-monkey.com

**Recommended Settings:**
- Size: 300x300 minimum
- Error correction: High (30%)
- Format: PNG or SVG

**Print Materials:**
1. Create A4 poster with QR code
2. Add text: "Scan to access Bee Training Academy"
3. Laminate for durability
4. Place at:
   - Qbees base (Units 411 & 426)
   - Training room
   - Welcome pack for new bees

---

## 🔄 Updating Content

### Quick Text Updates
1. Edit HTML files directly
2. Commit and push changes:
```bash
git add .
git commit -m "Update module content"
git push
```

### Adding New Modules
1. Copy `modules/module-1.html`
2. Rename to `module-X.html`
3. Update content
4. Link from `index.html`
5. Commit and push

### Translation Updates
1. Edit `translations/mn.json`
2. Update `data-mn` attributes in HTML
3. Test language toggle
4. Commit and push

---

## 🧪 Testing Checklist

Before launching:

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on budget Android phone
- [ ] Check touch targets (min 44x44px)
- [ ] Verify text readability (min 16px)
- [ ] Test offline mode (airplane mode)

### Feature Testing
- [ ] Language toggle works
- [ ] All links functional
- [ ] Progress tracking saves
- [ ] Quiz validation works
- [ ] Images load correctly
- [ ] Videos play properly

### Browser Testing
- [ ] Safari (Mac/iOS)
- [ ] Chrome (Desktop/Mobile)
- [ ] Firefox
- [ ] Edge

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast WCAG AA
- [ ] Focus indicators visible

---

## 📊 Analytics Setup (Optional)

### Google Analytics 4

**Step 1: Create GA4 Property**
1. Go to https://analytics.google.com
2. Create account → Property
3. Copy Measurement ID (G-XXXXXXXXXX)

**Step 2: Add to Site**
Add before `</head>` in all HTML files:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Custom Events:**
Already implemented in `assets/js/main.js`:
- Page views
- Module clicks
- Resource clicks
- Module completion

---

## 🔒 Security Considerations

### Safe to Deploy
- ✅ No backend/database
- ✅ No sensitive data
- ✅ Client-side only
- ✅ No authentication needed

### Access Control (if needed)
If you want to restrict access:

**Option 1: Simple Password Protection**
- Use Netlify password protection (paid plan)
- Or implement basic HTTP auth

**Option 2: Private GitHub Repo + Vercel**
- Keep repo private
- Deploy with Vercel
- Share link only with team

---

## 📱 Progressive Web App (PWA)

### Enable PWA Features

**Step 1: Create Service Worker**
Create `sw.js` in root:

```javascript
const CACHE_NAME = 'bee-academy-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/modules/module-1.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

**Step 2: Test PWA**
1. Open in Chrome
2. DevTools → Application → Service Workers
3. Check "Offline" and reload
4. Site should still work!

**Step 3: Install Prompt**
On mobile, users can "Add to Home Screen"
- iOS Safari: Share → Add to Home Screen
- Android Chrome: Menu → Install app

---

## 🎯 Go-Live Checklist

### Pre-Launch
- [ ] All content proofread
- [ ] Mongolian translation verified
- [ ] All modules tested
- [ ] Mobile testing complete
- [ ] QR codes generated
- [ ] Print materials ready

### Launch Day
- [ ] Deploy to production
- [ ] Test live URL
- [ ] Share with team on Slack
- [ ] Print and distribute QR codes
- [ ] Train trainers on new system

### Post-Launch
- [ ] Monitor analytics
- [ ] Collect feedback
- [ ] Track completion rates
- [ ] Iterate based on data

---

## 🆘 Troubleshooting

### Site not loading
- Check GitHub Pages is enabled
- Verify branch and folder settings
- Check repository is public (if using free plan)
- Clear browser cache

### Images not showing
- Ensure image paths are correct
- Check file names (case-sensitive on Linux/servers)
- Verify images are in `assets/images/`

### Language toggle not working
- Check `main.js` is loaded
- Look for JavaScript errors in console
- Verify `data-en` and `data-mn` attributes exist

### Progress not saving
- Check browser localStorage is enabled
- Try different browser
- Look for JavaScript errors

---

## 📞 Support

**Technical Issues:**
- GitHub Issues: [repo]/issues
- Email: khally@qbees.com.au

**Content Updates:**
- Slack: #bee-academy-dev

---

**Ready to deploy? Start with local testing, then push to GitHub Pages!** 🚀
