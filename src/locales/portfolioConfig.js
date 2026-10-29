import { icons } from "/src/assets/icons/icons.js"
import { THEME_PREFERENCES } from "../composables/useTheme.js"
import { BUTTONS } from "../composables/utils.js"

export const SOCIAL = {
    GITHUB: 'github',
    RESUME: 'resume',
    EMAIL: 'email',
    INSTAGRAM: 'instagram',
    LINKEDIN: 'linkedin'
}

export const personalLinks = {
    [SOCIAL.EMAIL]: {
        id: SOCIAL.EMAIL,
        href: "mailto:gustavw1001@gmail.com",
        value: "gustavw1001@gmail.com",
        icon: icons["mail-fill"]
    },
    [SOCIAL.RESUME]: {
        id: SOCIAL.RESUME,
        href: "https://drive.google.com/drive/folders/1fGPZ3UlCj2dS8TwgPCCtXVZUbmM8z3sJ?usp=drive_link",
        value: "Portfolio",
        icon: icons["article-fill"]
    },
    [SOCIAL.GITHUB]: {
        id: SOCIAL.GITHUB,
        href: "https://github.com/LuizGustavo1001",
        value: "LuizGustavo1001",
        icon: icons.github
    },
    [SOCIAL.INSTAGRAM]: {
        id: SOCIAL.INSTAGRAM,
        href: "https://www.instagram.com/luiz_g1001/",
        value: "luiz_g1001",
        icon: icons["instagram-fill"]
    },
    [SOCIAL.LINKEDIN]: {
        id: SOCIAL.LINKEDIN,
        href: "https://www.linkedin.com/in/luizgustavo1001/",
        value: "LuizGustavo1001",
        icon: icons["linkedin-fill"]
    }
}

export const themes = {
    [THEME_PREFERENCES.LIGHT]: {
        id: THEME_PREFERENCES.LIGHT,
        icon: icons["moon-fill"]
    },
    [THEME_PREFERENCES.DARK]: {
        id: THEME_PREFERENCES.DARK,
        icon: icons["sun-fill"]
    },
    [THEME_PREFERENCES.SYSTEM]: {
        id: THEME_PREFERENCES.SYSTEM,
        icon: icons["desktop-fill"]
    }
}

export const projects = [
    {
        id: "facilCare",
        href: "url(/src/assets/images/facilCare.png)",
        stacks: ["PWA", "Vue.js", "Dexie.js", "JavaScript", "Offline-First", "CRUD"],
        repository: "https://github.com/LuizGustavo1001/Facil_Care",
        demo: "https://facilcare.vercel.app/"
    },
    {
        id: "dictionary",
        href: "url(/src/assets/images/dicionario.png)",
        stacks: ["Node.js", "Javascript", "Docker", "npm", "JWT", "Sass", "Express.js", "MySQL", "Figma", "Cloudinary API", "RESTful API"],
        repository: "https://github.com/LuizGustavo1001/Dicionario_Estudos",
        demo: ""
    },
    {
        id: "acai",
        href: "url(/src/assets/images/acai.webp)",
        stacks: ["PHP OOP", "MySQL", "HTML5", "CSS3", "Cloudinary API", "Composer", "Google Cloud API", "Figma"],
        repository: "https://github.com/LuizGustavo1001/Projeto-Acai-2.0",
        demo: ""
    },
    {
        id: "animeList",
        href: "url(/src/assets/images/cpp.png)",
        stacks: ["C++", "CSV Scrapping"],
        repository: "https://github.com/LuizGustavo1001/Anime-Catalog-in-cpp",
        demo: ""
    }
]

export const aboutMe = {
    controllers: [
        {
            color: "#a3be8c"
        },
        {
            color: "#ebcb8b"
        },
        {
            color: "#bf616a"
        }
    ],
    sections: [
        {
            id: "profile",
            icon: icons["id-card-fill"],
            type: "text"
        },
        {
            id: "skills",
            icon: icons["code-slash"],
            type: "grid-list"
        },
        {
            id: "backgrounds",
            icon: icons["graduation-cap-fill"],
            type: "regular-list",
            content: [
                {
                    id: "ufla"
                }
            ]
        },
        {
            id: "certificates",
            icon: icons["certificate-fill"],
            type: "regular-list",
            content: [
                {
                    id: "vue01"
                }
            ]
        },
        {
            id: "languages",
            icon: icons.translate,
            type: "regular-list",
            content: [
                {
                    id: "ptbr"
                },
                {
                    id: "en"
                }
            ]
        }
    ]
}

export const skills = [
    {
        id: "js",
        name: "JavaScript",
        icon: icons.js
    },
    {
        id: "node",
        name: "Node.js",
        icon: icons.nodejs
    },
    {
        id: "docker",
        name: "Docker",
        icon: icons.docker
    },
    {
        id: "php",
        name: "PHP",
        icon: icons.php
    },
    {
        id: "scss",
        name: "Scss/Sass",
        icon: icons.scss
    },
    {
        id: "figma",
        name: "Figma",
        icon: icons.figma
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: icons.mysql
    },
    {
        id: "html",
        name: "HTML & CSS",
        icon: icons.html
    },
    {
        id: "cpp",
        name: "C++",
        icon: icons.cpp
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: icons.vue
    },
    {
        id: "illustrator",
        name: "Adobe Illustrator",
        icon: icons.illustrator
    },
    {
        id: "git",
        name: "Git • Github",
        icon: icons.github
    },
    {
        id: "insomnia",
        name: "Insomnia",
        icon: icons.insomnia
    }
]

export const sidebar = {
    social: {
        id: "social",
        items: {
            [SOCIAL.GITHUB]: {
                id: personalLinks[SOCIAL.GITHUB].id,
                tag: BUTTONS.ACTION_BUTTON_ALT,
                leftIcon: personalLinks[SOCIAL.GITHUB].icon,
                rightIcon: icons["external-link"],
                link: personalLinks[SOCIAL.GITHUB].href
            },
            [SOCIAL.LINKEDIN]: {
                id: personalLinks[SOCIAL.LINKEDIN].id,
                tag: BUTTONS.ACTION_BUTTON_ALT,
                leftIcon: personalLinks[SOCIAL.LINKEDIN].icon,
                rightIcon: icons["external-link"],
                link: personalLinks[SOCIAL.LINKEDIN].href
            },
            [SOCIAL.INSTAGRAM]: {
                id: personalLinks[SOCIAL.INSTAGRAM].id,
                tag: BUTTONS.ACTION_BUTTON_ALT,
                leftIcon: personalLinks[SOCIAL.INSTAGRAM].icon,
                rightIcon: icons["external-link"],
                link: personalLinks[SOCIAL.INSTAGRAM].href
            }
        },
    },
    others: {
        id: "others",
        items: {
            [SOCIAL.RESUME]: {
                id: personalLinks[SOCIAL.RESUME].id,
                tag: BUTTONS.ACTION_BUTTON,
                type: "a",
                link: personalLinks[SOCIAL.RESUME].href,
                leftIcon: personalLinks[SOCIAL.RESUME].icon,
                variant: "reverse"
            },
            "languages": {
                id: "languages",
                tag:  BUTTONS.ACTION_BUTTON,
                leftIcon: icons.translate,
                type: "button",
                rightIcon: icons["toggle-line"]
            },
            "themes": {
                id: "themes",
                tag: BUTTONS.ACTION_BUTTON,
                type: "button",
                leftIcon: icons.translate,
                rightIcon: icons["toggle-line"]
            }
        }
    }
}

export const mainNavigation = [
    {
        id: "home",
        href: "#home",
        icon: icons["home-line"],
        iconActive: icons["home-fill"]
    },
    {
        id: "aboutMe",
        href: "#aboutMe",
        icon: icons["id-card-line"],
        iconActive: icons["id-card-fill"]
    },
    {
        id: "projects",
        href: "#projects",
        icon: icons["repository-line"],
        iconActive: icons["repository-fill"]
    },
    {
        id: "contact",
        href: "#contact",
        icon: icons["inbox-line"],
        iconActive: icons["inbox-fill"]
    }
]

export const footer = {
    personal: [
        personalLinks[SOCIAL.GITHUB],
        personalLinks[SOCIAL.LINKEDIN],
        personalLinks[SOCIAL.INSTAGRAM]
    ],
    section: [
        {
            id: "navigation",
            links: mainNavigation
        },
        {
            id: "others",
            links: personalLinks
        }
    ]
}
