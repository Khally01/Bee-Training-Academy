# 🐝 Bee Training Academy

**Professional Airbnb Cleaning Training Platform for Qbees**

A mobile-first, bilingual (English/Mongolian) training academy designed to onboard and train cleaning professionals efficiently and effectively.

---

## 🎯 Project Overview

The Bee Training Academy addresses the challenge of overwhelming single-session training by providing:

- **Micro-learning modules** - Bite-sized, progressive learning path
- **Bilingual support** - Full English and Mongolian translation
- **Mobile-first design** - Optimized for use on smartphones at properties
- **Offline capability** - PWA support for working without internet
- **Progress tracking** - Monitor learning completion and achievements
- **Quick reference** - On-the-job access to checklists and guides

---

## 📁 Project Structure

```
Bee Academy/
│
├── index.html                 # Main landing page / dashboard
├── manifest.json              # PWA manifest for mobile app experience
├── README.md                  # Project documentation
│
├── assets/
│   ├── css/
│   │   └── main.css          # Main stylesheet
│   ├── js/
│   │   └── main.js           # Core JavaScript functionality
│   ├── images/               # Images, icons, diagrams
│   └── videos/               # Training videos and clips
│
├── modules/
│   ├── module-1.html         # Module 1: First Day Essentials
│   ├── module-2.html         # Module 2: Core Cleaning Skills
│   ├── module-3.html         # Module 3: Advanced Procedures
│   └── module-4.html         # Module 4: Mastery Level
│
├── resources/
│   ├── cleaning-checklist.html    # Room-by-room checklists
│   ├── chemical-guide.html        # Chemical usage guide
│   ├── pricing.html               # Pricing calculator
│   └── faq.html                   # Frequently asked questions
│
├── translations/
│   ├── en.json               # English translations
│   └── mn.json               # Mongolian translations
│
└── docs/
    ├── deployment.md         # Deployment instructions
    ├── translation-guide.md  # Translation workflow
    └── content-updates.md    # How to update content
```

---

## 🚀 Features

### ✅ Core Features (Implemented)
- [x] Mobile-first responsive design
- [x] Bilingual language toggle (EN/MN)
- [x] Progressive module structure (4 modules)
- [x] Quick reference section
- [x] Progress tracking system
- [x] Offline support (PWA)
- [x] Analytics tracking
- [x] Modern, accessible UI

### 🔄 In Progress
- [ ] All module content pages
- [ ] Mongolian translations
- [ ] Video integration
- [ ] Quiz system
- [ ] Search functionality
- [ ] QR code generation

### 📅 Planned
- [ ] Gamification (badges, achievements)
- [ ] Photo upload training
- [ ] Pricing calculator tool
- [ ] Team leaderboard
- [ ] Push notifications

---

## 🛠️ Technology Stack

**Frontend:**
- HTML5 (Semantic, accessible markup)
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+, Progressive enhancement)

**Hosting:**
- GitHub Pages (Free, fast, reliable)
- Alternative: Netlify, Vercel

**Tools:**
- Service Workers (Offline support)
- Local Storage (Progress tracking)
- Google Analytics (Usage tracking)

---

## 📱 Module Structure

### Module 1: First Day Essentials (20 min)
**Pre-work before first shift**
- App setup (Breezeway, Slack, Timestamp, WhatsApp)
- Base location & access codes
- Cleaning kit checklist
- Team introduction

### Module 2: Core Cleaning Skills (45 min)
**Days 1-3**
- Key checking procedures
- Linens & consumables management
- Basic cleaning workflow
- Normal vs deep clean

### Module 3: Advanced Procedures (40 min)
**Week 2**
- Special job types (check-in, check-out, mid-stay, adhoc)
- Photo documentation guide
- Quality standards
- Professional communication

### Module 4: Mastery Level (Self-paced)
**Ongoing development**
- Deep cleaning techniques
- Initial clean procedures
- Efficiency optimization
- Team leadership

---

## 🌍 Translation Strategy

**Tier 1: Critical Content (Full Translation)**
- All module instructions
- Safety warnings
- Checklists
- Emergency procedures

**Tier 2: Reference Content (Key Terms)**
- Technical terminology glossary
- Visual guides (minimize text)
- Video subtitles

**Translation Workflow:**
1. Extract English content to `translations/en.json`
2. Professional translation to Mongolian → `translations/mn.json`
3. Community verification by Mongolian bees
4. Integration into platform

---

## 🎨 Design Principles

1. **Mobile-First** - Design for small screens, enhance for larger
2. **Touch-Friendly** - Minimum 44x44px touch targets
3. **Fast Loading** - < 3 seconds on 3G connection
4. **Accessible** - WCAG 2.1 AA compliance
5. **Progressive** - Works without JavaScript, enhanced with it
6. **Offline-Capable** - Core content available offline

---

## 📊 Success Metrics

**Adoption:**
- 90% of bees access platform within first week
- Average 3+ visits per bee per week

**Learning:**
- 100% complete Module 1 before first shift
- 80% complete Modules 2-3 within 2 weeks

**Quality:**
- 50% reduction in training questions
- Improved photo submission quality
- Fewer procedural errors

**Satisfaction:**
- Bee feedback survey > 4/5
- Trainer satisfaction with new process

---

## 🚀 Deployment

### Local Development
```bash
# No build step required - open index.html directly
open index.html

# Or use a local server
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Production Deployment
```bash
# Deploy to GitHub Pages
git add .
git commit -m "Deploy Bee Training Academy"
git push origin main

# Enable GitHub Pages in repository settings
# Source: main branch / root
```

**Live URL:** `https://yourusername.github.io/bee-academy/`

---

## 📝 Content Updates

### Adding New Content
1. Create HTML file in appropriate directory
2. Follow existing template structure
3. Add bilingual data attributes
4. Update navigation/links
5. Test on mobile device

### Updating Translations
1. Edit `translations/mn.json`
2. Ensure keys match English version
3. Test language toggle
4. Get verification from native speaker

---

## 👥 Team

**Project Lead:** Khally Dashdorj
**Development:** Claude (AI Assistant)
**Translation:** [To be assigned]
**Testing:** Qbees Team

---

## 📄 License

Proprietary - © 2024 Qbees. All rights reserved.

---

## 🐛 Issues & Support

**Report Issues:**
- Create issue in GitHub repository
- Email: support@qbees.com.au
- Slack: #bee-academy channel

**Getting Help:**
- Check FAQ section
- Review module content
- Contact support team

---

## 🎯 Status

1. ✅ Complete ultra-planning
2. ✅ Create project structure
3. ✅ Build main interface
4. ✅ Create all module pages (4 modules complete)
5. ✅ Create all resource pages (5 resources complete)
6. ✅ Build bilingual translation system
7. ✅ QR code generation and deployment materials
8. ✅ **MVP READY FOR DEPLOYMENT**
9. ⏳ Professional Mongolian translation (post-launch)
10. ⏳ Testing with pilot group
11. ⏳ Iterate based on feedback

## 🌐 Live Site

**GitHub Pages URL:** `https://[your-username].github.io/bee-academy/`

(Update this after deployment)

---

**Built with ❤️ for the Qbees team**
