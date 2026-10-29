import { SOCIAL } from "./portfolioConfig.js";
import { THEME_PREFERENCES } from "../composables/useTheme.js"

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
        [SOCIAL.EMAIL]: "E-mail",
        [SOCIAL.RESUME]: "Resume",
        [SOCIAL.LINKEDIN]: "LinkedIn",
        [SOCIAL.GITHUB]: "GitHub",
        [SOCIAL.INSTAGRAM]: "Instagram"
    },

    skills: {
        title: "Skills",
        content: {
            js: {
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
            description: "A system designed to streamline the daily tasks of caregivers, enabling the management of a patient's medical data while ensuring privacy directly on the user's device—thereby eliminating cloud infrastructure costs. Data can be backed up via a JSON file or through P2P synchronization (WebRTC) by scanning a QR code",
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
        sections: {
            profile: {
                title: "Professional Profile",
                content: {
                    paragraphs: [
                        {
                            tag: "p",
                            classes: "",
                            content: "Full-Stack Developer, I build APIs with REST architecture mainly to integrate web systems using Node.js and PHP with databases"
                        },
                        {
                            tag: "p",
                            classes:  [],
                            content: "I develop interfaces with intuitive, responsive, and friendly experiences in mind for all different user profiles. Always planning code for reuse and for ease of maintenance",
                        },
                        {
                            tag: "p",
                            classes: "",
                            content: "I have a strong interest in design in general and in modern Front-End Frameworks, such as Vue.js"
                        }
                    ]
                }
            },
            skills:{
              title: "Skills"
            },
            backgrounds: {
                title: "Background",
                content: {
                    ufla: {
                        title: "Bachelor's degree in Computer Science",
                        subtitle: "Universidade Federal de Lavras (UFLA)",
                        period: "2024 - Currently",
                        description: ""
                    }
                }
            },
            certificates: {
                title: "Certificates",
                content: {
                    vue01: {
                        title: "Vue na Prática: Fundamentos Profissionais com Projeto Real",
                        subtitle: "Udemy",
                        period: "2026",
                        link: "https://www.udemy.com/certificate/UC-08f6e3ac-9943-40a9-ae72-e4a574766ab4/",
                        linkLabel: "Certify"
                    }
                }
            },
            languages: {
                title: "Languages",
                content: {
                    ptbr: {
                        title: "Portuguese",
                        subtitle: "Native",
                        period: "",
                        description: ""
                    },
                    en: {
                        title: "English",
                        subtitle: "Advanced",
                        period: "",
                        description: ""
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
                [SOCIAL.GITHUB]: {
                    title: "GitHub"
                },
                [SOCIAL.LINKEDIN]: {
                    title: "Linkedin"
                },
                [SOCIAL.INSTAGRAM]: {
                    title: "Instagram"
                }
            }
        },
        others: {
            title: "Others",
            items: {
                [SOCIAL.RESUME]: {
                    title: "View Resume"
                },
                "languages": {
                    title: ""
                },
                "themes": {
                    title: ""
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
                    [SOCIAL.EMAIL]: {
                        label: "E-mail"
                    },
                    [SOCIAL.RESUME]: {
                        label: "Resume"
                    },
                    [SOCIAL.LINKEDIN]: {
                        label: "LinkedIn"
                    },
                    [SOCIAL.GITHUB]: {
                        label: "GitHub"
                    },
                    [SOCIAL.INSTAGRAM]: {
                        label: "Instagram"
                    }
                }
            }
        },
        thanks: "Developed by Luiz Gustavo"
    }
}
