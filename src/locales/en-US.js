export default {
    utils: {
        certificate: "Certificate"
    },
    personalLinks: {
        mail: "E-mail",
        resume: "Resume",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
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
        demo: "Demonstration",
        repository: "Repository",
        dictionary: {
            title: "Studies Dictionary",
            subtitle: "Management Platform",
            description: "Vocabulary manager focused on students and researchers who need a space to centralize their knowledge, separating terms inside folders, allowing the user to filter and perform CRUD operations for each of them. The platform features RESTful API architecture, with JWT authentication for registered users, as well as cloud storage using the Cloudinary API",
        },
        acai: {
            title: "Açaí Project 2.0",
            subtitle: "E-commerce",
            description: "Complete e-commerce platform with user management, sales control, and administrative panel supporting CRUD operations. Application developed entirely using PHP, ensuring organization and security at locales flow. With each order placed, the transaction records are automatically stored in an online spreadsheet, including client details, the acquired products, and the purchase date, making it easier to track and manage sales",
        },
        todo: {
            title: "ToDo List",
            subtitle: "ToDo List",
            description: "Online To-Do List featuring filters and dark mode, developed using JavaScript. The application retrieves locales from a JSON file responsible for storing task information. It implements a simple CRUD system, allowing users to create, view, update, and delete tasks, as well as manage their status between completed and in progressThe system works as a vocabulary manager focused on students and researchers who need a space to centralize their Knowledge, separating terms inside folders, allowing the user to filter and perform CRUD operations for each of them. The plataform features RESTful API architecture, with JWT authentication for registered user, as well as cloud storage using Cloudinary API",
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
                        link: "https://www.udemy.com/certificate/UC-08f6e3ac-9943-40a9-ae72-e4a574766ab4/"
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
        resume: "View Resume",
        language: "Language - English",
        lightTheme: "Theme - Light",
        darkTheme: "Theme - Dark",
        sections: {
            social: {
                title: "Social Media"
            },
            others: {
                title: "Others"
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
            contact:{
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
                    mail: {
                        label: "E-mail"
                    },
                    resume: {
                        label: "Resume"
                    },
                    linkedin: {
                        label: "LinkedIn"
                    },
                    github: {
                        label: "GitHub"
                    },
                    instagram: {
                        label: "Instagram"
                    }
                }
            }
        },
        thanks: "Developed by Luiz Gustavo"
    }
}