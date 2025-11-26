// Qbees Training Academy - Bilingual Translation System
// Language: English (en) and Mongolian (mn)

const translations = {
    en: {
        // Global Navigation
        nav: {
            dashboard: "Dashboard",
            modules: "Training Modules",
            resources: "Resources",
            progress: "My Progress"
        },

        // Dashboard / Index Page
        dashboard: {
            welcome: "Welcome to Qbees Training Academy",
            subtitle: "Your complete guide to professional cleaning excellence",
            completedModules: "Modules Completed",
            overallProgress: "Overall Progress",
            startTraining: "Start Training",
            continueTraining: "Continue Training",

            // Module Cards
            module1Title: "Module 1: Foundation",
            module1Desc: "Welcome to Qbees, company culture, core values, and professional standards",
            module1Duration: "30 minutes",

            module2Title: "Module 2: Core Skills",
            module2Desc: "Property arrival, inspection procedures, and room-by-room cleaning techniques",
            module2Duration: "45 minutes",

            module3Title: "Module 3: Advanced Procedures",
            module3Desc: "Job types, pricing structure, and guest communication protocols",
            module3Duration: "40 minutes",

            module4Title: "Module 4: Mastery Level",
            module4Desc: "Professional photo documentation, quality standards, and excellence",
            module4Duration: "35 minutes",

            // Resource Cards
            resourcesTitle: "Quick Reference Resources",

            checklistTitle: "Cleaning Checklist",
            checklistDesc: "Interactive room-by-room cleaning checklist for on-the-job reference",

            chemicalTitle: "Chemical Guide",
            chemicalDesc: "Safety guide for all cleaning chemicals with usage instructions",

            pricingTitle: "Pricing Reference",
            pricingDesc: "Complete rate tables and interactive pricing calculator",

            faqTitle: "FAQ",
            faqDesc: "Frequently asked questions and quick answers",

            // Status badges
            notStarted: "Not Started",
            inProgress: "In Progress",
            completed: "Completed",
            locked: "Locked",

            // Actions
            viewResource: "View Resource",
            startModule: "Start Module",
            continueModule: "Continue Module",
            reviewModule: "Review Module"
        },

        // Module 1: Foundation
        module1: {
            title: "Module 1: Foundation & Company Culture",
            subtitle: "Welcome to the Qbees family! Learn our values and professional standards.",

            section1: "Welcome to Qbees",
            section1Content: "Qbees is a premium cleaning service specializing in short-term rental properties...",

            section2: "Our Mission",
            section2Content: "To deliver exceptional cleaning services that exceed guest expectations...",

            section3: "Core Values",
            excellence: "Excellence",
            excellenceDesc: "We maintain the highest standards in every clean",
            reliability: "Reliability",
            reliabilityDesc: "Guests and property managers can count on us",
            professionalism: "Professionalism",
            professionalismDesc: "We represent Qbees with pride in every interaction",
            efficiency: "Efficiency",
            efficiencyDesc: "We work smart and deliver quality within allocated time",

            section4: "Professional Standards",
            appearance: "Professional Appearance",
            appearanceDesc: "Wear Qbees uniform or neat, clean clothing",
            punctuality: "Punctuality",
            punctualityDesc: "Arrive on time for every job",
            communication: "Clear Communication",
            communicationDesc: "Respond promptly to messages and report issues immediately",
            respect: "Respect for Property",
            respectDesc: "Treat every property as if it were your own home",

            completeModule: "Complete Module 1",
            nextModule: "Next: Module 2"
        },

        // Module 2: Core Cleaning Skills
        module2: {
            title: "Module 2: Core Cleaning Skills",
            subtitle: "Master the fundamentals of property cleaning from arrival to completion",

            arrival: "Property Arrival Procedure",
            arrivalSteps: [
                "Check-in via Qbees app upon arrival",
                "Inspect property and take before photos",
                "Note any damage or issues immediately",
                "Gather all cleaning supplies and chemicals",
                "Review job type and special instructions"
            ],

            inspection: "Property Inspection Checklist",
            inspectionItems: [
                "Walk through all rooms systematically",
                "Check for existing damage or stains",
                "Test all appliances and lights",
                "Note cleanliness level (normal/heavy)",
                "Photograph any concerns"
            ],

            bathroom: "Bathroom Cleaning",
            kitchen: "Kitchen Cleaning",
            bedroom: "Bedroom Cleaning",
            living: "Living Areas",
            laundry: "Laundry",

            normalClean: "Normal Clean",
            deepClean: "Deep Clean",

            quickTip: "Quick Cleaning Tip",
            tipContent: "Always pre-spray surfaces with appropriate cleaner and let them work for 2-3 minutes before wiping. This breaks down grime and saves you scrubbing time!",

            completeModule: "Complete Module 2",
            nextModule: "Next: Module 3"
        },

        // Module 3: Advanced Procedures
        module3: {
            title: "Module 3: Advanced Procedures",
            subtitle: "Learn different job types, pricing structure, and professional communication",

            jobTypes: "Understanding Job Types",

            checkin: "Check-in Clean",
            checkinDesc: "Preparing property for arriving guests",

            checkout: "Check-out Clean",
            checkoutDesc: "Post-guest departure cleaning and inspection",

            adhoc: "Adhoc Clean",
            adhocDesc: "Scheduled maintenance cleaning between bookings",

            initial: "Initial Clean",
            initialDesc: "First professional clean of a new property",

            deep: "Deep Clean",
            deepDesc: "Intensive cleaning including all areas",

            midstay: "Mid-Stay Clean",
            midstayDesc: "Refresh cleaning during extended guest stays",

            pricing: "Pricing Structure",
            pricingIntro: "Understanding how jobs are priced helps you manage time effectively",

            baseRate: "Base Rate",
            baseRateDesc: "$30 per hour",

            calculation: "Time Calculation",
            calculationDesc: "Based on bedrooms, bathrooms, and property type",

            specialCircumstances: "Special Circumstances",
            publicHoliday: "Public Holiday: +50% rate",
            waitingTime: "Waiting Time: $15",
            keyExchange: "Key Exchange: $15",
            extraBed: "Extra Bed Made: $5 each",

            communication: "Guest Communication",
            templateMessage: "Template Message",

            completeModule: "Complete Module 3",
            nextModule: "Next: Module 4"
        },

        // Module 4: Mastery Level
        module4: {
            title: "Module 4: Mastery Level",
            subtitle: "Professional photo documentation and quality excellence",

            photoDoc: "Photo Documentation Requirements",
            photoIntro: "High-quality photos are essential for quality control and property protection",

            photoRooms: {
                bathroom: "Bathroom",
                kitchen: "Kitchen",
                bedroom: "Bedroom",
                living: "Living Room",
                dining: "Dining Room",
                laundry: "Laundry",
                exterior: "Exterior"
            },

            rejectedLinen: "Handling Rejected Linen",
            rejectedLinenIntro: "Damaged or worn linen must be properly documented and reported",

            qualityCriteria: "Quality Rejection Criteria",
            tears: "Tears or holes",
            stains: "Permanent stains",
            bleach: "Bleach marks or discoloration",
            worn: "Worn or thin fabric",
            damaged: "Damaged zippers or buttons",

            excellence: "Professional Excellence Checklist",
            excellenceIntro: "These standards separate good cleaners from exceptional ones",

            standards: [
                "Every surface is cleaned, not just visible areas",
                "No streaks on mirrors, glass, or stainless steel",
                "All floors vacuumed/mopped with no debris",
                "Beds made with hospital corners and perfect symmetry",
                "Consumables arranged neatly and restocked",
                "No cleaning supplies or equipment left behind",
                "All lights, appliances, and features tested",
                "Fresh, clean scent throughout property",
                "Photos show professional quality results",
                "Final walk-through completed before checkout"
            ],

            proTips: "Pro Tips for Efficiency",
            tips: [
                "Bring spare batteries for smoke alarms",
                "Keep extra microfibre cloths in your kit",
                "Pre-spray bathroom while cleaning bedroom",
                "Use two-bucket system for mopping",
                "Check under beds and furniture before leaving"
            ],

            certification: "Congratulations!",
            certificationMsg: "You have completed all 4 modules of the Qbees Training Academy!",
            masterBadge: "You are now a Qbees Certified Cleaner",

            completeModule: "Complete Module 4",
            downloadCertificate: "Download Certificate"
        },

        // Resources
        resources: {
            // Cleaning Checklist
            checklist: {
                title: "Cleaning Checklist",
                subtitle: "Interactive quick-reference for on-the-job use",
                printButton: "Print Checklist",
                resetButton: "Reset All",

                tabs: {
                    bathroom: "Bathroom",
                    kitchen: "Kitchen",
                    bedroom: "Bedroom",
                    living: "Living",
                    laundry: "Laundry"
                },

                backToDashboard: "Back to Dashboard"
            },

            // Chemical Guide
            chemicals: {
                title: "Chemical Safety Guide",
                subtitle: "Complete guide to all cleaning chemicals",

                lencia: "Lencia - Bathroom/Mould Cleaner",
                taski: "Taski - Multi-Surface Cleaner",
                halo: "Halo - Glass & Mirror Cleaner",
                magic: "Magic - Kitchen Degreaser",
                shelley: "Shelley - Stainless Steel Polish",
                ajax: "Ajax - Heavy Duty Cleaner",

                mustDilute: "MUST DILUTE WITH WATER",
                readyToUse: "READY TO USE",

                primaryUses: "Primary Uses",
                safetyWarnings: "Safety Warnings",
                applicationMethod: "Application Method",

                microfibreSystem: "Microfibre Cloth Color System",

                backToDashboard: "Back to Dashboard"
            },

            // Pricing
            pricing: {
                title: "Pricing Reference",
                subtitle: "Complete rate tables and calculator",

                calculator: "Quick Pricing Calculator",
                propertyType: "Property Type",
                bedrooms: "Bedrooms",
                bathrooms: "Bathrooms",
                calculate: "Calculate Price",

                apartment: "Apartment",
                house: "House",

                resultPrice: "Total Price",
                allocatedTime: "Allocated Time",

                apartmentRates: "Apartment Pricing",
                houseRates: "House Pricing",

                bed: "Bed",
                bath: "Bath",
                time: "Time",
                rate: "Rate",

                specialFees: "Special Circumstances & Additional Fees",

                backToDashboard: "Back to Dashboard"
            },

            // FAQ
            faq: {
                title: "Frequently Asked Questions",
                subtitle: "Quick answers to common questions",

                searchPlaceholder: "Search for questions...",

                categories: {
                    all: "All Questions",
                    procedures: "Procedures",
                    cleaning: "Cleaning",
                    chemicals: "Chemicals",
                    pricing: "Pricing",
                    communication: "Communication",
                    photos: "Photos"
                },

                noResults: "No questions found",
                noResultsMsg: "Try adjusting your search or filter",

                stillHaveQuestions: "Still have questions?",
                contactManager: "Contact your property manager or review the training modules for detailed information.",

                backToDashboard: "Back to Dashboard"
            }
        },

        // Common UI Elements
        common: {
            progress: "Progress",
            complete: "Complete",
            incomplete: "Incomplete",
            loading: "Loading...",
            error: "Error",
            success: "Success!",
            close: "Close",
            cancel: "Cancel",
            confirm: "Confirm",
            save: "Save",
            back: "Back",
            next: "Next",
            previous: "Previous",
            home: "Home",

            // Time units
            minutes: "minutes",
            hours: "hours",

            // Completion messages
            moduleComplete: "Module Complete!",
            congratulations: "Congratulations!",
            wellDone: "Well done!",
            keepGoing: "Keep going!",

            // Error messages
            errorLoading: "Error loading content",
            tryAgain: "Please try again",
            contactSupport: "Contact support if the problem persists"
        }
    },

    mn: {
        // MONGOLIAN TRANSLATIONS
        // NOTE: These are placeholder structures for professional translation
        // All content below should be translated by a professional Mongolian translator

        nav: {
            dashboard: "Хянах самбар",
            modules: "Сургалтын модулиуд",
            resources: "Нөөц",
            progress: "Миний явц"
        },

        dashboard: {
            welcome: "Qbees Сургалтын Академид тавтай морил",
            subtitle: "Мэргэжлийн цэвэрлэгээний иж бүрэн гарын авлага",
            completedModules: "Дууссан модулиуд",
            overallProgress: "Нийт явц",
            startTraining: "Сургалт эхлүүлэх",
            continueTraining: "Сургалт үргэлжлүүлэх",

            module1Title: "Модуль 1: Суурь",
            module1Desc: "Qbees-д тавтай морил, компанийн соёл, үндсэн үнэт зүйлс болон мэргэжлийн стандартууд",
            module1Duration: "30 минут",

            module2Title: "Модуль 2: Үндсэн ур чадвар",
            module2Desc: "Үл хөдлөх хөрөнгөд ирэх, шалгах журам болон өрөө бүрээр цэвэрлэх техник",
            module2Duration: "45 минут",

            module3Title: "Модуль 3: Ахисан түвшний журам",
            module3Desc: "Ажлын төрлүүд, үнийн бүтэц болон зочидтой харилцах протокол",
            module3Duration: "40 минут",

            module4Title: "Модуль 4: Мастер түвшин",
            module4Desc: "Мэргэжлийн зургийн баримтжуулалт, чанарын стандарт болон шилдэг байдал",
            module4Duration: "35 минут",

            resourcesTitle: "Шуурхай лавлах нөөц",

            checklistTitle: "Цэвэрлэгээний жагсаалт",
            checklistDesc: "Ажил дээр ашиглах өрөө бүрийн интерактив цэвэрлэгээний жагсаалт",

            chemicalTitle: "Химийн заавар",
            chemicalDesc: "Бүх цэвэрлэгээний химийн бодисын аюулгүй байдлын заавар",

            pricingTitle: "Үнийн лавлах",
            pricingDesc: "Бүрэн үнийн хүснэгт болон интерактив үнийн тооцоолуур",

            faqTitle: "Түгээмэл асуултууд",
            faqDesc: "Түгээмэл асуултууд болон хурдан хариултууд",

            notStarted: "Эхлээгүй",
            inProgress: "Явагдаж байна",
            completed: "Дууссан",
            locked: "Түгжээтэй",

            viewResource: "Нөөц үзэх",
            startModule: "Модуль эхлүүлэх",
            continueModule: "Модуль үргэлжлүүлэх",
            reviewModule: "Модуль шалгах"
        },

        // Additional sections would follow the same pattern
        // Professional translator will fill in actual Mongolian text

        module1: {
            title: "[Module 1: Foundation & Company Culture - MN]",
            subtitle: "[Welcome to the Qbees family! Learn our values and professional standards. - MN]",
            // ... (all other keys with MN placeholders)
        },

        module2: {
            title: "[Module 2: Core Cleaning Skills - MN]",
            subtitle: "[Master the fundamentals of property cleaning from arrival to completion - MN]",
            // ... (all other keys with MN placeholders)
        },

        module3: {
            title: "[Module 3: Advanced Procedures - MN]",
            subtitle: "[Learn different job types, pricing structure, and professional communication - MN]",
            // ... (all other keys with MN placeholders)
        },

        module4: {
            title: "[Module 4: Mastery Level - MN]",
            subtitle: "[Professional photo documentation and quality excellence - MN]",
            // ... (all other keys with MN placeholders)
        },

        resources: {
            checklist: {
                title: "[Cleaning Checklist - MN]",
                subtitle: "[Interactive quick-reference for on-the-job use - MN]",
                // ...
            },
            chemicals: {
                title: "[Chemical Safety Guide - MN]",
                subtitle: "[Complete guide to all cleaning chemicals - MN]",
                // ...
            },
            pricing: {
                title: "[Pricing Reference - MN]",
                subtitle: "[Complete rate tables and calculator - MN]",
                // ...
            },
            faq: {
                title: "[Frequently Asked Questions - MN]",
                subtitle: "[Quick answers to common questions - MN]",
                // ...
            }
        },

        common: {
            progress: "Явц",
            complete: "Дуусгах",
            incomplete: "Дуусаагүй",
            loading: "Ачааллаж байна...",
            error: "Алдаа",
            success: "Амжилттай!",
            close: "Хаах",
            cancel: "Цуцлах",
            confirm: "Батлах",
            save: "Хадгалах",
            back: "Буцах",
            next: "Дараах",
            previous: "Өмнөх",
            home: "Нүүр",

            minutes: "минут",
            hours: "цаг",

            moduleComplete: "Модуль дууслаа!",
            congratulations: "Баяр хүргэе!",
            wellDone: "Сайн хийлээ!",
            keepGoing: "Үргэлжлүүл!",

            errorLoading: "Контент ачаалахад алдаа гарлаа",
            tryAgain: "Дахин оролдоно уу",
            contactSupport: "Асуудал үргэлжилбэл тусламж хүсээрэй"
        }
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('qbees-language') || 'en';
        this.translations = translations;
    }

    // Get translation by key path (e.g., 'dashboard.welcome')
    get(keyPath) {
        const keys = keyPath.split('.');
        let value = this.translations[this.currentLanguage];

        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                console.warn(`Translation key not found: ${keyPath}`);
                return keyPath; // Return key if translation not found
            }
        }

        return value;
    }

    // Set language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('qbees-language', lang);
            this.updatePageContent();
            return true;
        }
        return false;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Update all elements with data-i18n attribute
    updatePageContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.get(key);

            // Update text content or placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update language switcher state
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Trigger custom event for page-specific updates
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }

    // Initialize language system on page load
    init() {
        this.updatePageContent();

        // Setup language switcher listeners
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
}

// Create global language manager instance
const langManager = new LanguageManager();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => langManager.init());
} else {
    langManager.init();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { langManager, translations };
}