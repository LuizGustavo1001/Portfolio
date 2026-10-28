import { icons } from "/src/assets/icons/icons.js"

export const personalLinks = {
    mail: {
        id: "mail",
        href: "mailto:gustavw1001@gmail.com",
        value: "gustavw1001@gmail.com",
        icon: icons.mailFilled,
    },
    resume: {
        id: "resume",
        href: "https://drive.google.com/drive/folders/1fGPZ3UlCj2dS8TwgPCCtXVZUbmM8z3sJ?usp=drive_link",
        value: "Portfolio",
        icon: icons.documentFilled,
    },
    github: {
        id: "github",
        href: "https://github.com/LuizGustavo1001",
        value: "LuizGustavo1001",
        icon: icons.github,
    },
    instagram: {
        id: "instagram",
        href: "https://www.instagram.com/luiz_g1001/",
        value: "luiz_g1001",
        icon: icons.instagram,
    },
    linkedin: {
        id: "linkedin",
        href: "https://www.linkedin.com/in/luizgustavo1001/",
        value: "LuizGustavo1001",
        icon: icons.linkedinFilled,
    }
}

export const projects = [
    {
        id: "dictionary",
        href: "url(/images/dicionario.png)",
        stacks: ["Node.js", "Javascript", "Docker", "npm", "JWT", "Sass", "Express.js", "MySQL", "Figma", "Cloudinary API", "RESTful API"],
        repository: "https://github.com/LuizGustavo1001/Dicionario_Estudos",
        demo: ""
    },
    {
        id: "acai",
        href: "url(/images/acai.webp)",
        stacks: ["PHP OOP", "MySQL", "HTML5", "CSS3", "Cloudinary API", "Composer", "Google Cloud API", "Figma"],
        repository: "https://github.com/LuizGustavo1001/Projeto-Acai-2.0",
        demo: ""
    },
    {
        id: "todo",
        href: "url(/images/todo.webp)",
        stacks: ["JavaScript", "JSON", "Node.js", "Scrapping", "CRUD"],
        repository: "https://github.com/LuizGustavo1001/TODO-WebPage-JS",
        demo: "https://vercel-todo-list-js.vercel.app/"
    },
    {
        id: "animeList",
        href: "url(/images/cpp.png)",
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
            icon: icons.userIdFilled,
            type: "text"
        },
        {
            id: "skills",
            icon: icons.code,
            type: "grid-list"
        },
        {
            id: "backgrounds",
            icon: icons.capFilled,
            type: "regular-list",
            content: [
                {
                    id: "ufla"
                }
            ]
        },
        {
            id: "certificates",
            icon: icons.pencilFilled,
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
        icon: "js.svg",
    },
    {
        id: "node",
        name: "Node.js",
        icon: "node.svg",
    },
    {
        id: "docker",
        name: "Docker",
        icon: "docker.svg"
    },
    {
        id: "php",
        name: "PHP",
        icon: "php.svg"
    },
    {
        id: "scss",
        name: "Scss/Sass",
        icon: "scss.svg"
    },
    {
        id: "figma",
        name: "Figma",
        icon: "figma.svg"
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: "mysql.svg"
    },
    {
        id: "html",
        name: "HTML & CSS",
        icon: "html.svg"
    },
    {
        id: "cpp",
        name: "C++",
        icon: "cpp.svg"
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: "vue.svg"
    },
    {
        id: "illustrator",
        name: "Adobe Illustrator",
        icon: "illustrator.svg"
    },
    {
        id: "git",
        name: "Git • Github",
        icon: "git.svg"
    },
    {
        id: "insomnia",
        name: "Insomnia",
        icon: "insomnia.svg"
    }
]

export const backgrounds = [
    {
        id: "ufla"
    },
]

export const experiences = [
    {
        id: "vue01"
    }
]

export const sidebar = [
    {
        id: "social",
        items: [
            {
                id: "github"
            },
            {
                id: "linkedin"
            },
            {
                id: "instagram"
            }
        ]
    },
    {
        id: "others",
        items: [
            {
                id: "resume"
            },
            {
                id: "toggleLanguage"
            },
            {
                id: "toggleTheme"
            }
        ]
    }
]

export const mainNavigation = [
    {
        id: "home",
        href: "#home",
        icon: icons.home,
        iconActive: icons.homeFilled
    },
    {
        id: "aboutMe",
        href: "#aboutMe",
        icon: icons.userFrame,
        iconActive: icons.userFrameFilled
    },
    {
        id: "projects",
        href: "#projects",
        icon: icons.cube,
        iconActive: icons.cubeFilled
    },
    {
        id: "contact",
        href: "#contact",
        icon: icons.inbox,
        iconActive: icons.inboxFilled
    }
]

export const navbar = {
    items: mainNavigation
}

export const footer = {
    personal: {
        github: "github",
        linkedin: "linkedin",
        instagram: "instagram"
    },
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