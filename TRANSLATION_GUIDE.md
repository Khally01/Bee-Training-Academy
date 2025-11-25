# Qbees Training Academy - Translation Guide

## Overview

The Bee Training Academy supports bilingual content in **English (EN)** and **Mongolian (MN)**. This guide explains how the translation system works and how to add or update translations.

---

## 📁 System Architecture

### Core Files

1. **`assets/js/translations.js`** - Central translation file containing all text content
2. **`assets/css/main.css`** - Language switcher styles (lines 578-636)
3. **HTML Pages** - Use `data-i18n` attributes to reference translation keys

### How It Works

```javascript
// Translation structure
const translations = {
    en: {
        dashboard: {
            welcome: "Welcome to Qbees Training Academy",
            subtitle: "Your complete guide..."
        }
    },
    mn: {
        dashboard: {
            welcome: "[Translation needed]",
            subtitle: "[Translation needed]"
        }
    }
};
```

---

## 🎯 For Professional Translators

### Current Status

- ✅ English content: **100% complete**
- ⏳ Mongolian content: **Structure ready, needs translation**

### What Needs Translation

All Mongolian (MN) entries in `assets/js/translations.js` are marked with `[Text - MN]` placeholders.

**Example:**
```javascript
mn: {
    dashboard: {
        welcome: "[Welcome to Qbees Training Academy - MN]",  // ← Translate this
        subtitle: "[Your complete guide to... - MN]"          // ← Translate this
    }
}
```

### Translation Sections

| Section | Keys | Priority |
|---------|------|----------|
| **Navigation** | `nav.*` | High |
| **Dashboard** | `dashboard.*` | High |
| **Module 1** | `module1.*` | High |
| **Module 2** | `module2.*` | High |
| **Module 3** | `module3.*` | Medium |
| **Module 4** | `module4.*` | Medium |
| **Resources** | `resources.*` | Medium |
| **Common UI** | `common.*` | High |

### Translation Guidelines

#### 1. **Preserve Technical Terms**
Some English terms should remain in English or use loanwords:
- "Qbees" → remains "Qbees"
- "Airbnb" → remains "Airbnb"
- "Check-in/Check-out" → translate or use commonly understood Mongolian equivalent

#### 2. **Tone and Style**
- **Professional but friendly** - This is training material for cleaning staff
- **Clear and simple** - Use everyday Mongolian, avoid overly formal language
- **Action-oriented** - Use imperative forms for instructions

#### 3. **Context Matters**
Some sections are:
- **UI Labels** (buttons, navigation) - Keep concise
- **Instructions** (cleaning steps) - Be detailed and clear
- **Descriptions** (module overviews) - Engaging and motivating

#### 4. **Character Length**
Try to keep translations similar in length to English for UI consistency:
- Buttons: Max ~20 characters
- Headings: Max ~50 characters
- Descriptions: Can be longer if needed for clarity

### Example Translation

**English:**
```javascript
welcome: "Welcome to Qbees Training Academy"
subtitle: "Your complete guide to professional cleaning excellence"
startTraining: "Start Training"
```

**Mongolian (Professional):**
```javascript
welcome: "Qbees Сургалтын Академид тавтай морил"
subtitle: "Мэргэжлийн цэвэрлэгээний бүрэн гарын авлага"
startTraining: "Сургалт Эхлүүлэх"
```

### How to Submit Translations

1. **Option A: Direct File Edit**
   - Open `assets/js/translations.js`
   - Replace `[Text - MN]` placeholders with actual Mongolian text
   - Maintain the exact structure (commas, quotes, brackets)
   - Save as UTF-8 encoding

2. **Option B: Spreadsheet Format**
   - Request a CSV/Excel export of all keys
   - Translate in spreadsheet
   - Return for implementation

3. **Testing**
   - After translation, test by clicking the language switcher
   - Verify text displays correctly
   - Check for layout issues (text overflow, line breaks)

---

## 👨‍💻 For Developers

### Adding New Translated Content

#### Step 1: Add to translations.js

```javascript
// English
en: {
    mySection: {
        newKey: "This is new content"
    }
}

// Mongolian
mn: {
    mySection: {
        newKey: "[This is new content - MN]"  // Professional translator fills this
    }
}
```

#### Step 2: Use in HTML

```html
<h1 data-i18n="mySection.newKey">This is new content</h1>
```

The English text inside the tag is the fallback if translations.js fails to load.

### Language Switcher Usage

The language switcher is automatically included in all pages:

```html
<div class="language-switcher">
    <button class="lang-option active" data-lang="en">
        <span class="lang-flag">🇦🇺</span> EN
    </button>
    <button class="lang-option" data-lang="mn">
        <span class="lang-flag">🇲🇳</span> МН
    </button>
</div>
```

### JavaScript API

```javascript
// Get current language
const currentLang = langManager.getCurrentLanguage(); // 'en' or 'mn'

// Set language programmatically
langManager.setLanguage('mn');

// Get specific translation
const text = langManager.get('dashboard.welcome');

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
    console.log('Language changed to:', e.detail.language);
    // Update dynamic content here
});
```

### Special Cases

#### Dynamic Content

For content generated with JavaScript:

```javascript
// Get translation
const message = langManager.get('module1.section1Content');

// Update element
element.textContent = message;
```

#### Arrays and Lists

```javascript
// Translation structure
en: {
    module2: {
        arrivalSteps: [
            "Check-in via Qbees app upon arrival",
            "Inspect property and take before photos",
            "Note any damage or issues immediately"
        ]
    }
}

// Usage in JavaScript
const steps = langManager.get('module2.arrivalSteps');
steps.forEach(step => {
    // Render each step
});
```

#### Input Placeholders

```html
<input type="text" data-i18n="resources.faq.searchPlaceholder" placeholder="Search for questions...">
```

The translation system automatically updates placeholders for input fields.

---

## 🧪 Testing Translations

### Manual Testing Checklist

- [ ] Click language switcher - both buttons work
- [ ] All text updates when switching languages
- [ ] No layout breaks (text overflow, cut-off words)
- [ ] Buttons remain readable
- [ ] Navigation menus display correctly
- [ ] Resource cards show translated titles
- [ ] Module descriptions translate properly
- [ ] Special characters display correctly (Cyrillic for Mongolian)

### Browser Compatibility

Test in:
- Chrome/Edge (desktop & mobile)
- Safari (iOS)
- Firefox

### Common Issues

| Issue | Solution |
|-------|----------|
| Text not updating | Check `data-i18n` attribute matches key in translations.js |
| Gibberish characters | Ensure file saved as UTF-8 |
| Translation missing | Verify key path is correct (case-sensitive) |
| Layout broken | Text too long - adjust translation or CSS |

---

## 📋 Translation Progress Tracker

### Current Implementation Status

#### ✅ Completed
- [x] Translation system infrastructure
- [x] Language switcher UI component
- [x] English content (100%)
- [x] Mongolian structure (placeholders ready)

#### ⏳ Pending
- [ ] Professional Mongolian translation of all content
- [ ] Module pages updated to use translation system
- [ ] Resource pages updated to use translation system
- [ ] Testing with native Mongolian speakers

---

## 🌐 Language Persistence

The system automatically:
- Saves language preference to browser localStorage
- Remembers user's choice across sessions
- Defaults to English for new users

Storage key: `qbees-language`

---

## 📞 Support

For questions about the translation system:
- **Technical issues**: Contact development team
- **Translation questions**: Contact content manager
- **Testing support**: Use the testing checklist above

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial bilingual system implementation |

---

## 🎓 Best Practices

### For Translators
1. Translate meaning, not just words
2. Consider context (buttons vs paragraphs)
3. Test translations on actual device
4. Ask questions if context is unclear
5. Maintain consistent terminology throughout

### For Developers
1. Always use `data-i18n` for user-facing text
2. Never hardcode text strings in JavaScript
3. Add new keys to both `en` and `mn` objects
4. Test language switching after adding content
5. Keep translation keys organized by section

---

## 🔄 Workflow for Adding New Content

```
1. Developer adds English content
   └─> Add to en: { } in translations.js
   └─> Add to HTML with data-i18n attribute
   └─> Add placeholder to mn: { } as "[Text - MN]"

2. Content review
   └─> Verify English text is final
   └─> Check key names are descriptive

3. Professional translation
   └─> Translator translates mn: { } entries
   └─> Maintains structure and formatting

4. Testing & QA
   └─> Test language switching
   └─> Verify layout in both languages
   └─> Get feedback from Mongolian speakers

5. Deploy
   └─> Push updates to production
   └─> Monitor for any issues
```

---

**Ready for Professional Translation:** All `[Text - MN]` placeholders in `assets/js/translations.js` are ready to be replaced with actual Mongolian translations.

**Total Translation Keys:** ~150+ entries across all modules and resources

**Estimated Translation Time:** 6-8 hours for professional translator familiar with both languages and cleaning industry terminology.
