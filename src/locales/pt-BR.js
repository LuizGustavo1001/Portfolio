import { SOCIAL } from "./portfolioConfig.js"
import { THEME_PREFERENCES } from "../composables/useTheme.js"

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
        [SOCIAL.EMAIL]: "E-mail",
        [SOCIAL.RESUME]: "Currículo",
        [SOCIAL.LINKEDIN]: "LinkedIn",
        [SOCIAL.GITHUB]: "GitHub",
        [SOCIAL.INSTAGRAM]: "Instagram"
    },

    skills: {
        title: "Habilidades",
        content: {
            js: {
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
            description: "Sistema focado em facilitar a rotina de cuidadores, permitindo gerenciar dados médicos de um paciente, garantindo a privacidade dos dados diretamente no dispositivo do usuário, eliminando custos de infraestrutura em nuvem. É possível fazer backup de dados por meio de um arquivo backup no formato JSON ou por meio de sincronização P2P (WebRTC) ao ler o código QR"
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
        sections: {
            profile: {
                title: "Perfil Profissional",
                content: {
                    paragraphs: [
                        {
                            tag: "p",
                            classes: [],
                            content: "Desenvolvedor Full-Stack, construo APIs com arquitetura REST com o objetivo, principalmente, de integrar sistemas web utilizando Node.js e PHP com bancos de dados"
                        },
                        {
                            tag: "p",
                            classes: [],
                            content: "Desenvolvo interfaces pensando em experiências intuitivas, responsivas e amigáveis para diferentes perfis de usuários. Sempre planejando reusabilidade e facilidade de manutenção de códigos"
                        },
                        {
                            tag: "p",
                            classes: [],
                            content: "Possuo grande interesse por design em geral e por frameworks modernos, como Vue.js"
                        }
                    ]
                }
            },
            skills: {
                title: "Habilidades"
            },
            backgrounds: {
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
            certificates: {
                title: "Certificados",
                content: {
                    vue01: {
                        title: "Vue na Prática: Fundamentos Profissionais com Projeto Real",
                        subtitle: "Udemy",
                        period: "2026",
                        link: "https://www.udemy.com/certificate/UC-08f6e3ac-9943-40a9-ae72-e4a574766ab4/",
                        linkLabel: "Certificado"
                    }
                }
            },
            languages: {
                title: "Idiomas",
                content: {
                    ptbr: {
                        title: "Português",
                        subtitle: "Nativo",
                        period: "",
                        description: ""
                    },
                    en: {
                        title: "Inglês",
                        subtitle: "Avançado",
                        period: "",
                        description: ""
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
            title: "Outros",
            items: {
                [SOCIAL.RESUME]: {
                    title: "Visualizar Currículo"
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
                    [SOCIAL.EMAIL]: {
                        label: "E-mail"
                    },
                    [SOCIAL.RESUME]: {
                        label: "Currículo"
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
        thanks: "Desenvolvido por Luiz Gustavo"
    }
}
