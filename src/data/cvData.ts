import type { PersonalInfo, Experience, Project, Skill, Education, Hobby } from '../types/cv';

export const personal: PersonalInfo = {
    name: "Cédric PAGES",
    title: "Chef de projet / Développeur web full stack",
    location: "Grenoble, France",
    email: "cedricpages_1@hotmail.com",
    phone: "+33 6 10 43 66 48",
    summary:
        "Développeur web full stack et chef de projet avec une forte expérience en e-commerce, ERP, webmarketing, finance patrimoniale et coordination d'équipes pluridisciplinaires."
};

export const skills: Skill[] = [
    {
        name: "React",
        link: "https://reactjs.org/",
        icone: "fa-brands fa-react",
        rate: 4
    },
    {
        name: "Vue.js",
        link: "https://vuejs.org/",
        icone: "fa-brands fa-vuejs",
        rate : 5
    },
    {
        name: "Laravel",
        link: "https://laravel.com/",
        icone: "fa-brands fa-laravel",
        rate : 5
    },
    {
        name: "PHP",
        link: "https://www.php.net/",
        icone: "fa-brands fa-php",
        rate : 5
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icone: "fa-brands fa-js",
        rate : 5
    },
    {
        name: "MySQL",
        link: "https://www.mysql.com/",
        icone: "fas fa-database",
        rate : 5
    },
    {
        name: "HTML / CSS",
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        icone: "fa-brands fa-html5",
        rate : 5
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        icone: "fa-brands fa-bootstrap",
        rate : 5
    },
    {
        name: "Git / GitHub",
        link: "https://github.com/",
        icone: "fa-brands fa-git-alt",
        rate : 5
    },
    {
        name: "Figma",
        link: "https://www.figma.com/",
        icone: "fa-brands fa-figma",
        rate : 5
    },
    {
        name: "Prestashop",
        link: "https://www.prestashop.com/",
        icone: "fas fa-shopping-cart",
        rate : 5
    },
    {
        name: "Python",
        link: "https://www.python.org/",
        icone: "fa-brands fa-python",
        rate : 5
    }
];

export const experiences: Experience[] = [
    {
        period: "2022 - aujourd'hui",
        role: "Assistant administratif et financier CIF",
        company: "Cabinet OEFIC, Meylan",
        description:
            "Gestion de dossiers patrimoniaux, fiscaux et CIF, suivi administratif, archivage et structuration documentaire.",
        logos: [
            { type: 'icon', content: 'fas fa-briefcase' },
            { type: 'icon', content: 'fas fa-chart-line' }
        ],
        more: "Gestion quotidienne de portefeuilles clients, préparation des déclarations fiscales, suivi des investissements, coordination avec les conseillers financiers, et mise en place de procédures d'archivage numérique conformes aux normes RGPD."
    },
    {
        period: "2021 - 2024",
        role: "Développeur web full stack et référent ERP CODIAL",
        company: "Groupe MO, Saint-Égrève",
        description:
            "Développement Laravel et Vue.js, construction d'interfaces web, gestion du site e-commerce, formation des utilisateurs, optimisation des processus internes.",
        logos: [
            { type: 'icon', content: 'fab fa-laravel' },
            { type: 'image', content: '/images/vue-logo.png', alt: 'Vue.js Logo' }
        ]
    },
    {
        period: "2017 - 2019",
        role: "Customer Success Manager / Chargé de projets E-Marketing",
        company: "Webmarketing Booster, Grenoble",
        description:
            "Refonte des outils de communication, SEO, accompagnement client et gestion de projets webmarketing.",
        logos: [
            { type: 'icon', content: 'fas fa-search' },
            { type: 'icon', content: 'fas fa-chart-line' }
        ]
    }
];

export const education: Education[] = [
    {
        period: "2020 - 2022",
        school: "CNAM / Campus Numérique in the Alps",
        description: "Technicien développeur web et applications",
        logos: [
            { type: 'icon', content: 'fas fa-code' },
            { type: 'icon', content: 'fas fa-graduation-cap' }
        ],
        more: "Formation intensive de 2 ans en développement web full stack avec spécialisation en PHP/Laravel, JavaScript/Vue.js, bases de données MySQL, et méthodes agiles. Stage de fin d'études sur projet e-commerce réel."
    },
    {
        period: "2019 - 2020",
        school: "Formation CGP-CIF",
        description: "Certification AMF",
        logos: [
            { type: 'icon', content: 'fas fa-certificate' },
            { type: 'icon', content: 'fas fa-euro-sign' }
        ]
    },
    {
        period: "2015 - 2017",
        school: "IDRAC",
        description: "Responsable du développement marketing et commercial inter-organisationnel",
        logos: [
            { type: 'icon', content: 'fas fa-bullhorn' },
            { type: 'icon', content: 'fas fa-chart-line' }
        ]
    },
    {
        period: "2013 - 2015",
        school: "Université Grenoble Alpes",
        description: "DUT Génie Mécanique et Productique",
        logos: [
            { type: 'icon', content: 'fas fa-industry' },
            { type: 'icon', content: 'fas fa-cogs' }
        ]
    }
];

export const hobbies: Hobby[] = [
    {
        name: "Photographie",
        description: "Paysages et portraits",
        logo: { type: 'icon', content: 'fas fa-camera' }
    },
    {
        name: "Randonnée",
        description: "Exploration des montagnes",
        logo: { type: 'icon', content: 'fas fa-mountain' }
    },
    {
        name: "Cuisine",
        description: "Cuisine française et italienne",
        logo: { type: 'icon', content: 'fas fa-utensils' }
    },
    {
        name: "Lecture",
        description: "Science-fiction et philosophie",
        logo: { type: 'icon', content: 'fas fa-book' }
    }
];

export const projects: Project[] = [
    {
        name: "BackOffice Laravel + SPA Vue.js",
        description:
            "Interface sécurisée et front-office moderne pour la gestion de contenu et de processus métier."
    },
    {
        name: "Site e-commerce Prestashop",
        description:
            "Site compatible ERP CODIAL, avec optimisation des flux internes et du catalogue produit."
    },
    {
        name: "Automatisations Python / VBA",
        description:
            "Scripts et micro-outils pour l'import de données, la gestion de tarifs et le traitement de fichiers."
    }
];
