export default {
    utils: {
      certificate: "Certificado"
    },
    personalLinks: {
        mail: "E-mail",
        resume: "Currículo",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
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
        demo: "Demonstração",
        repository: "Repositório",
        dictionary: {
            title: "Dicionário de Estudos",
            subtitle: "Plataforma de Gerenciamento",
            description: "Gerenciador de vocabulário com foco em estudantes e pesquisadores, separando termos em pastas, sendo possível filtrar e realizar operações do tipo CRUD para cada um deles. A plataforma conta com uma arquitetura de API RESTful, com autenticação JWT para cada usuário cadastrado, contando com armazenamento em nuvem utilizando Cloudinary API",
        },
        acai: {
            title: "Projeto Açaí 2.0",
            subtitle: "E-commerce",
            description: "Plataforma de e-commerce completa, com gerenciamento de usuários, controle de vendas e painel administrativo com suporte a operações CRUD. Aplicação desenvolvida inteiramente em PHP, garantindo organização e segurança no fluxo de informações. A cada pedido realizado, os dados da transação são automaticamente registrados em uma planilha online, incluindo informações do cliente, produtos adquiridos e locais da compra, facilitando o acompanhamento e a gestão das vendas"
        },
        todo: {
            title: "Lista de Tarefas",
            subtitle: "Lista de Tarefas",
            description: "Lista de tarefas online contendo filtros e tema escuro utilizando JavaScript. A aplicação recebe dados a partir de um arquivo JSON, responsável por armazenar informações sobre cada tarefa. Implementa um CRUD simples, permitindo criar, visualizar, atualizar e remover tarefas, além de gerenciar seus estados entre concluída e em andamento"
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
                        link: "https://www.udemy.com/certificate/UC-08f6e3ac-9943-40a9-ae72-e4a574766ab4/"
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
        resume: "Baixar Currículo",
        language: "Idioma - Português",
        lightTheme: "Tema - Claro",
        darkTheme: "Tema - Escuro",
        sections: {
            social: {
                title: "Redes Sociais"
            },
            others: {
                title: "Outros"
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
                    mail: {
                        label: "E-mail"
                    },
                    resume: {
                        label: "Currículo"
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
        thanks: "Desenvolvido por Luiz Gustavo"
    }
}