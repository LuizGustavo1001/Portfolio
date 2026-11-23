import { THEME_PREFERENCES } from "../constants/sysTheme"
import { ACTION_BUTTON_VARIANTS, BUTTON_TAGS, BUTTONS } from "../constants/components/buttons"
import { SOCIAL_LINK } from "../constants/socialLinks"
import { ABOUT_ME } from "../constants/components/aboutMeCard.ts"
import { LANGUAGES } from "../constants/sysLanguages.ts"

import { icons } from "../assets/icons/icons"

export const socialLinks = {
    [SOCIAL_LINK.GITHUB]: {
        id: SOCIAL_LINK.GITHUB,
        href: "https://github.com/LuizGustavo1001" ,
        value: "gustavw1001@gmail.com",
        iconFill: icons["github"],
        iconLine: icons["github"]
    },
    [SOCIAL_LINK.RESUME]: {
        id: SOCIAL_LINK.RESUME,
        href: "https://drive.google.com/drive/folders/1fGPZ3UlCj2dS8TwgPCCtXVZUbmM8z3sJ?usp=drive_link",
        value: "Portfolio",
        iconFill: icons["article-fill"],
        iconLine: icons["article-line"]
    },
    [SOCIAL_LINK.LINKEDIN]: {
        id: SOCIAL_LINK.LINKEDIN,
        href: "https://www.linkedin.com/in/luizgustavo1001/",
        value: "LuizGustavo1001",
        iconFill: icons["linkedin-fill"],
        iconLine: icons["linkedin-line"]
    },
    [SOCIAL_LINK.EMAIL]: {
        id: SOCIAL_LINK.EMAIL,
        href: "mailto:gustavw1001@gmail.com" ,
        value: "luiz_g1001",
        iconFill: icons["mail-fill"],
        iconLine: icons["mail-line"]
    },
    [SOCIAL_LINK.INSTAGRAM]: {
        id: SOCIAL_LINK.INSTAGRAM,
        href: "https://www.instagram.com/luiz_g1001/",
        value: "LuizGustavo1001",
        iconFill: icons["instagram-fill"],
        iconLine: icons["instagram-line"]
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
        href: "url(https://res.cloudinary.com/dw2eqq9kk/image/upload/v1795117178/facil-care_ov1flk.png)",
        stacks: ["PWA", "Vue.js", "Vite", "Dexie.js", "IndexedDB", "TypeScript", "Offline-First"],
        repository: "https://github.com/LuizGustavo1001/Facil_Care",
        demo: "https://facilcare.vercel.app/"
    },
    {
        id: "dictionary",
        href: "url(https://res.cloudinary.com/dw2eqq9kk/image/upload/v1793309853/dicionario_m9vseq.png)",
        stacks: ["Node.js", "Javascript", "Docker", "JWT", "Sass", "Express.js", "MySQL", "Cloudinary API"],
        repository: "https://github.com/LuizGustavo1001/Dicionario_Estudos"
    },
    {
        id: "acai",
        href: "url(https://res.cloudinary.com/dw2eqq9kk/image/upload/v1793309853/acai_oxniqt.webp)",
        stacks: ["PHP OOP", "MySQL", "HTML5", "CSS3", "Cloudinary API", "Composer", "Google Cloud API"],
        repository: "https://github.com/LuizGustavo1001/Projeto-Acai-2.0"
    },
    {
        id: "animeList",
        href: "url(https://res.cloudinary.com/dw2eqq9kk/image/upload/v1793309853/cpp_zeli1k.png)",
        stacks: ["C++", "CSV Scrapping"],
        repository: "https://github.com/LuizGustavo1001/Anime-Catalog-in-cpp"
    }
]

export const aboutMeCategory = {
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
    categories: {
        [ABOUT_ME.PROFILE]: {
            id: "profile",
            icon: icons["id-card-fill"],
            content: {
                paragraphs: [
                    { tag: "p" },
                    { tag: "p" },
                    { tag: "p" },
                    { tag: "p" }
                ]
            }
        },
        [ABOUT_ME.SKILLS]: {
            id: "skills",
            icon: icons["code-slash"]
        },
        [ABOUT_ME.BACKGROUNDS]: {
            id: "backgrounds",
            icon: icons["graduation-cap-fill"],
            content: [
                { id: "ufla" }
            ]
        },
        [ABOUT_ME.CERTIFICATES]: {
            id: "certificates",
            icon: icons["certificate-fill"],
            content: [
                {
                    id: "vue01",
                    period: "2026",
                    href: "https://www.udemy.com/certificate/UC-08f6e3ac-9943-40a9-ae72-e4a574766ab4/"
                }
            ]
        },
        [ABOUT_ME.LANGUAGES]: {
            id: "languages",
            icon: icons.translate,
            content: [
                { id: LANGUAGES.PT_BR },
                { id: LANGUAGES.EN_US }
            ]
        }
    }
}

export const contactCategory = {
    buttons: [
        ...[socialLinks.github],
        ...[socialLinks.linkedin],
        ...[socialLinks.email],
        ...[socialLinks.instagram]
    ]
}

export const skills = [
    {
        id: "ts",
        name: "TypeScript",
        icon: icons.ts
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: icons.vue
    },
    {
        id: "node",
        name: "Node.js",
        icon: icons.nodejs
    },
    {
        id: "figma",
        name: "Figma",
        icon: icons.figma
    },
    {
        id: "java",
        name: "Java",
        icon: icons.java
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
        id: "docker",
        name: "Docker",
        icon: icons.docker
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
            [SOCIAL_LINK.GITHUB]: {
                ...socialLinks.github,
                component: BUTTONS.ACTION_BUTTON,
                tag: BUTTON_TAGS.LINK,
                rightIcon: icons["external-link"]
            },
            [SOCIAL_LINK.LINKEDIN]: {
                ...socialLinks.linkedin,
                component: BUTTONS.ACTION_BUTTON,
                tag: BUTTON_TAGS.LINK,
                rightIcon: icons["external-link"]
            },
            [SOCIAL_LINK.INSTAGRAM]: {
                ...socialLinks.instagram,
                component: BUTTONS.ACTION_BUTTON,
                tag: BUTTON_TAGS.LINK,
                rightIcon: icons["external-link"]
            }
        },
    },
    others: {
        id: "others",
        items: {
            [SOCIAL_LINK.RESUME]: {
              ...socialLinks.resume,
              component: BUTTONS.ACTION_BUTTON,
              tag: BUTTON_TAGS.LINK,
              variant: ACTION_BUTTON_VARIANTS.REVERSE
            },
            "languages": {
                id: "languages",
                component:  BUTTONS.ACTION_BUTTON,
                tag: BUTTON_TAGS.BUTTON,
                leftIcon: icons.translate,
                rightIcon: icons["toggle-line"]
            },
            "themes": {
                id: "themes",
                component: BUTTONS.ACTION_BUTTON,
                tag: BUTTON_TAGS.BUTTON,
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
        ...[socialLinks.github],
        ...[socialLinks.linkedin],
        ...[socialLinks.instagram]
    ],
    section: [
        {
            id: "navigation",
            links: mainNavigation
        },
        {
            id: "others",
            links: socialLinks
        }
    ]
}
