import { THEME_PREFERENCES } from "../constants/sysTheme"
import { ABOUT_ME } from "../constants/aboutMeCard"
import { SOCIAL_LINK } from "../constants/socialLinks"
import { LANGUAGES } from "../constants/sysLanguages.ts"

export default {
    utils: {
        certificate: "Certificado",
        theme: "Tema",
        language: "Idioma",
        currentLanguage: "Português Brasil"
    },

    themes: {
        [THEME_PREFERENCES.LIGHT]: "Claro",
        [THEME_PREFERENCES.DARK]: "Escuro",
        [THEME_PREFERENCES.SYSTEM]: "Seguir Sistema"
    },

    personalLinks: {
        [SOCIAL_LINK.EMAIL]: "E-mail",
        [SOCIAL_LINK.RESUME]: "Currículo",
        [SOCIAL_LINK.LINKEDIN]: "LinkedIn",
        [SOCIAL_LINK.GITHUB]: "GitHub",
        [SOCIAL_LINK.INSTAGRAM]: "Instagram"
    },

    skills: {
        title: "Habilidades",
        content: {
            ts: {
                category: "Desenvolvimento Web"
            },
            node: {
                category: "Engenharia Back-End"
            },
            docker: {
                category: "Empacotador de Aplicações"
            },
            php: {
                category: "Desenvolvimento Web"
            },
            scss: {
                category: "Pré-processador de Estilos"
            },
            figma: {
                category: "UI/UX Design"
            },
            mysql: {
                category: "SGBD"
            },
            html: {
                category: "Fundamentos Web"
            },
            cpp: {
                category: "Backend/Scripting"
            },
            vue: {
                category: "Framework JavaScript"
            },
            illustrator: {
                category: "Design"
            },
            git: {
                category: "Controle de Versão",
            },
            insomnia: {
                category: "Cliente API"
            }
        }
    },

    projects: {
        facilCare: {
            title: "FacilCare",
            subtitle: "PWA Offline-First para Monitoramento de Saúde",
            description: "PWA focado em facilitar a rotina de cuidadores, permitindo o gerenciamento de dados médicos de um paciente. Garantindo a privacidade dos dados diretamente no dispositivo do usuário. É possível fazer backup de dados por meio de um arquivo backup no formato JSON ou por meio de sincronização P2P (WebRTC) ao ler o código QR"
        },
        dictionary: {
            title: "Dicionário de Estudos",
            subtitle: "Plataforma para Gerenciamento de Vocabulário",
            description: "Gerenciador de vocabulário com foco em estudantes e pesquisadores, separando termos em pastas, sendo possível filtrar e realizar operações do tipo CRUD para cada um deles. A plataforma conta com uma arquitetura de API RESTful, com autenticação JWT para cada usuário cadastrado, contando com armazenamento em nuvem utilizando Cloudinary API",
        },
        acai: {
            title: "Projeto Açaí 2.0",
            subtitle: "E-commerce",
            description: "Plataforma de e-commerce completa, com gerenciamento de usuários, controle de vendas e painel administrativo com suporte a operações CRUD. Aplicação desenvolvida inteiramente em PHP, garantindo organização e segurança no fluxo de informações. A cada pedido realizado, os dados da transação são automaticamente registrados em uma planilha online, incluindo informações do cliente, produtos adquiridos e locais da compra, facilitando o acompanhamento e a gestão das vendas"
        },
        animeList: {
            title: "Lista de Animes",
            subtitle: "Gerenciador de Animes",
            description: "Catálogo de anime desenvolvido em C++ utilizando lista duplamente encadeada declarada puramente. O projeto apresenta suporte a operações CRUD, mostrar um intervalo filtrado/ordenado e opção para salvar alterações"
        }
    },

    home: {
        role: "Desenvolvedor Web {role}",
        scrollLabel: "Role para baixo para continuar..."
    },

    aboutMe: {
        title: {
            medium: "Sobre",
            bold: "Mim"
        },
        categories: {
            [ABOUT_ME.PROFILE]: {
                title: "Perfil Profissional",
                content: {
                    paragraphs: [
                        "Desenvolvedor Full-Stack, construo sistemas integrando bancos de dados e páginas web, pensando em experiências intuitivas, responsivas e amigáveis para diferentes perfis de usuários. Sempre planejando o reuso e a facilidade de manutenção do código",
                        "Para o desenvolvimento web, utilizo, principalmente, TypeScript, JavaScript, Vue.js + Vite e Figma",
                        "No que diz respeito a bancos de dados, estou acostumado com MySQL e IndexedDB (Dexie.js)",
                        "Possuo grande interesse por design em geral e por frameworks e bibliotecas Front-End, como React e Angular"
                    ]
                }
            },

            [ABOUT_ME.SKILLS]: {
                title: "Habilidades"
            },

            [ABOUT_ME.BACKGROUNDS]: {
                title: "Formação",
                content: {
                    ufla: {
                        title: "Bacharelado em Ciência da Computação",
                        subtitle: "Universidade Federal de Lavras (UFLA)",
                        period: "2024 - Em Andamento",
                        description: ""
                    }
                }
            },

            [ABOUT_ME.CERTIFICATES]: {
                title: "Certificados",
                content: {
                    vue01: {
                        title: "Vue na Prática: Fundamentos Profissionais com Projeto Real",
                        subtitle: "Udemy"
                    }
                }
            },

            [ABOUT_ME.LANGUAGES]: {
                title: "Idiomas",
                content: {
                    [LANGUAGES.PT_BR]: {
                        title: "Português",
                        subtitle: "Nativo"
                    },
                    [LANGUAGES.EN_US]: {
                        title: "Inglês",
                        subtitle: "Avançado"
                    }
                }
            }
        }
    },

    projectsSection: {
        title: {
            medium: "Últimos",
            bold: "Projetos"
        },
        subtitle: "Clique em um dos projetos para mais informações",
        actions: {
            github: "Outros Projetos"
        }
    },

    contact: {
        island: "Contato",
        title: {
            medium: "Entre em",
            bold: "Contato",
        },
        subtitle: "Sinta-se à vontade para contatar-me clicando nas opções abaixo"
    },

    sidebar: {
        social: {
            title: "Redes Sociais",
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
            title: "Outros",
            items: {
                [SOCIAL_LINK.RESUME]: {
                    title: "Visualizar Currículo"
                },
            }
        }
    },

    navbar: {
        items: {
            home: {
                label: "Início"
            },
            aboutMe: {
                label: "Sobre Mim"
            },
            projects: {
                label: "Projetos"
            },
            contact: {
                label: "Contato"
            }
        }
    },

    footer: {
        section: {
            navigation: {
                title: "Navegação",
                links: {
                    home: {
                        label: "Início"
                    },
                    aboutMe: {
                        label: "Sobre Mim"
                    },
                    projects: {
                        label: "Projetos"
                    },
                    contact: {
                        label: "Contato"
                    }
                }
            },
            others: {
                title: "Outros",
                links: {
                    [SOCIAL_LINK.EMAIL]: {
                        label: "E-mail"
                    },
                    [SOCIAL_LINK.RESUME]: {
                        label: "Currículo"
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
        thanks: "Desenvolvido por Luiz Gustavo de Almeida Lopes"
    }
}
