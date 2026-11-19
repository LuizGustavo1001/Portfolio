import { THEME_PREFERENCES } from "../constants/sysTheme"
import { ABOUT_ME } from "../constants/aboutMeCard.ts"
import { SOCIAL_LINK } from "../constants/socialLinks.ts"
import { LANGUAGES } from "../constants/sysLanguages.ts"

export default {
    utils: {
        certificate: "Certificate",
        theme: "Theme",
        language: "Language",
        currentLanguage: "English (US)"
    },

    themes: {
        [THEME_PREFERENCES.LIGHT]: "Light",
        [THEME_PREFERENCES.DARK]: "Dark",
        [THEME_PREFERENCES.SYSTEM]: "Follow System"
    },

    personalLinks: {
        [SOCIAL_LINK.EMAIL]: "E-mail",
        [SOCIAL_LINK.RESUME]: "Resume",
        [SOCIAL_LINK.LINKEDIN]: "LinkedIn",
        [SOCIAL_LINK.GITHUB]: "GitHub",
        [SOCIAL_LINK.INSTAGRAM]: "Instagram"
    },

    skills: {
        title: "Skills",
        content: {
            ts: {
                category: "Web Development"
            },
            node: {
                category: "Backend Engineering"
            },
            docker: {
                category: "Application packager"
            },
            php: {
                category: "Web Development"
            },
            scss: {
                category: "Style Preprocessor"
            },
            figma: {
                category: "UI/UX Design"
            },
            mysql: {
                category: "DBMS"
            },
            html: {
                category: "Web Fundamentals"
            },
            cpp: {
                category: "Backend/Scripting"
            },
            vue: {
                category: "JavaScript Framework"
            },
            illustrator: {
                category: "Design"
            },
            git: {
                category: "Version Control System",
            },
            insomnia: {
                category: "API Client"
            }
        }
    },

    projects: {
        facilCare: {
            title: "FacilCare",
            subtitle: "Health Monitoring PWA Offline-First",
            description: "A PWA designed to streamline the daily tasks of caregivers, enabling the management of a patient's medical data while ensuring privacy directly on the user's device eliminating. Data can be backed up via a JSON file or through P2P synchronization (WebRTC) by scanning a QR code",
        },
        dictionary: {
            title: "Studies Dictionary",
            subtitle: "Management Platform",
            description: "A Vocabulary manager focused on students and researchers who need a space to centralize their knowledge, separating terms inside folders, allowing the user to filter and perform CRUD operations for each of them. The platform features RESTful API architecture, with JWT authentication for registered users, as well as cloud storage using the Cloudinary API",
        },
        acai: {
            title: "Açaí Project 2.0",
            subtitle: "E-commerce",
            description: "A Complete e-commerce platform with user management, sales control, and administrative panel supporting CRUD operations. Application developed entirely using PHP, ensuring organization and security at locales flow. With each order placed, the transaction records are automatically stored in an online spreadsheet, including client details, the acquired products, and the purchase date, making it easier to track and manage sales",
        },
        animeList: {
            title: "Anime List",
            subtitle: "Anime Catalog Manager",
            description: "C++ Anime catalog developed using a purely declared double-linked list. The project features CRUD operations, shows specific sorted/filtered intervals, and a save changes option",
        }
    },

    home: {
        role: "{role} Web Developer",
        scrollLabel: "Scroll down to continue..."
    },

    aboutMe: {
        title: {
            medium: "About",
            bold: "Me"
        },
        categories: {
            [ABOUT_ME.PROFILE]: {
                title: "Professional Profile",
                content: {
                    paragraphs: [
                        "Full-Stack developer. I build systems integrating web pages and databases, planning intuitive, responsive, and friendly experiences for any user profile. Always aiming for code reuse and ease of maintenance",
                        "For web development, I usually use TypeScript, JavaScript, Vue.js + Vite, and Figma",
                        "For databases, I'm used to MySQL and IndexedDB (Dexie.js)",
                        "I have a strong interest in design in general and in modern Front-End libraries or frameworks, such as React and Angular"
                    ]
                }
            },

            [ABOUT_ME.SKILLS]:{
              title: "Skills"
            },

            [ABOUT_ME.BACKGROUNDS]: {
                title: "Background",
                content: {
                    ufla: {
                        title: "Bachelor's degree in Computer Science",
                        subtitle: "Universidade Federal de Lavras (UFLA)",
                        period: "2024 - Currently",
                    }
                }
            },

            [ABOUT_ME.CERTIFICATES]: {
                title: "Certificates",
                content: {
                    vue01: {
                        title: "Vue na Prática: Fundamentos Profissionais com Projeto Real",
                        subtitle: "Udemy"
                    }
                }
            },

            [ABOUT_ME.LANGUAGES]: {
                title: "Languages",
                content: {
                    [LANGUAGES.PT_BR]: {
                        title: "Portuguese",
                        subtitle: "Native"
                    },
                    [LANGUAGES.EN_US]: {
                        title: "English",
                        subtitle: "Advanced"
                    }
                }
            }
        }
    },

    projectsSection: {
        title: {
            medium: "Latest",
            bold: "Projects"
        },
        subtitle: "Click on one of the projects for more information",
        actions: {
            github: "More Projects"
        }
    },

    contact: {
        island: "Contact",
        title: {
            medium: "Get in",
            bold: "Touch"
        },
        subtitle: "Feel free to contact me by clicking on the options below"
    },

    sidebar: {
        social: {
            title: "Social Media",
            items: {
                [SOCIAL_LINK.GITHUB]: {
                    title: "GitHub"
                },
                [SOCIAL_LINK.LINKEDIN]: {
                    title: "Linkedin"
                },
                [SOCIAL_LINK.INSTAGRAM]: {
                    title: "Instagram"
                }
            }
        },
        others: {
            title: "Others",
            items: {
                [SOCIAL_LINK.RESUME]: {
                    title: "View Resume"
                }
            }
        }
    },

    navbar: {
        items: {
            home: {
                label: "Home"
            },
            aboutMe: {
                label: "About Me"
            },
            projects: {
                label: "Projects"
            },
            contact: {
                label: "Contact"
            }
        }
    },

    footer: {
        section: {
            navigation: {
                title: "Navigation",
                links: {
                    home: {
                        label: "Home"
                    },
                    aboutMe: {
                        label: "About Me"
                    },
                    projects: {
                        label: "Projects"
                    },
                    contact: {
                        label: "Contact"
                    }
                }
            },
            others: {
                title: "Others",
                links: {
                    [SOCIAL_LINK.EMAIL]: {
                        label: "E-mail"
                    },
                    [SOCIAL_LINK.RESUME]: {
                        label: "Resume"
                    },
                    [SOCIAL_LINK.LINKEDIN]: {
                        label: "LinkedIn"
                    },
                    [SOCIAL_LINK.GITHUB]: {
                        label: "GitHub"
                    },
                    [SOCIAL_LINK.INSTAGRAM]: {
                        label: "Instagram"
                    }
                }
            }
        },
        thanks: "Developed by Luiz Gustavo de Almeida Lopes"
    }
}
