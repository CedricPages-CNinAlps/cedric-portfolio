import type { PersonalInfo, Experience, Project, Skill, Education, Hobby } from '../types/cv';

export const personal: PersonalInfo = {
    name: "Cédric PAGES",
    title: "Chef de projet technique & Développeur Full Stack | Expert Transformation Digitale",
    location: "Grenoble, France",
    email: "cedricpages_1@hotmail.com",
    phone: "+33 6 10 43 66 48",
    summary:
        `<p>Chef de projet polyvalent et développeur web full stack avec 15+ ans d'expérience hybride.</p>

        <ul>
          <li><strong>Expertise technique</strong> : E-commerce (Laravel/Vue.js), ERP CODIAL, transformation digitale et automatisation des processus métier</li>
          <li><strong>Double compétence business</strong> : Finance patrimoniale (CIF certifié AMF 92.66%) et management de projets européens (KIC InnoEnergy)</li>
          <li><strong>Valeur ajoutée unique</strong> : Capacité à coordonner des équipes pluridisciplinaires, optimiser les processus métier et développer des solutions web sur mesure pour des gains de performance mesurables</li>
          <li><strong>Profil recherché</strong> : Pont naturel entre les besoins techniques et les objectifs business des entreprises</li>
        </ul>`
};

export const skills: Skill[] = [
    // Frontend Development
    {
        name: "Vue.js",
        link: "https://vuejs.org/",
        icone: "fa-brands fa-vuejs",
        rate: 5
    },
    {
        name: "React",
        link: "https://reactjs.org/",
        icone: "fa-brands fa-react",
        rate: 4
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icone: "fa-brands fa-js",
        rate: 5
    },
    {
        name: "HTML / CSS",
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        icone: "fa-brands fa-html5",
        rate: 5
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        icone: "fa-brands fa-bootstrap",
        rate: 5
    },
    {
        name: "Vuetify",
        link: "https://vuetifyjs.com/",
        icone: "fas fa-cube",
        rate: 4
    },
    
    // Backend Development
    {
        name: "Laravel",
        link: "https://laravel.com/",
        icone: "fa-brands fa-laravel",
        rate: 5
    },
    {
        name: "PHP",
        link: "https://www.php.net/",
        icone: "fa-brands fa-php",
        rate: 5
    },
    {
        name: "MySQL",
        link: "https://www.mysql.com/",
        icone: "fas fa-database",
        rate: 5
    },
    {
        name: "Python",
        link: "https://www.python.org/",
        icone: "fa-brands fa-python",
        rate: 5
    },
    {
        name: "Axios",
        link: "https://axios-http.com/",
        icone: "fas fa-exchange-alt",
        rate: 5
    },
    
    // E-commerce & CMS
    {
        name: "Prestashop",
        link: "https://www.prestashop.com/",
        icone: "fas fa-shopping-cart",
        rate: 5
    },
    
    // Development Tools
    {
        name: "Git / GitHub",
        link: "https://github.com/",
        icone: "fa-brands fa-git-alt",
        rate: 5
    },
    {
        name: "VSCode",
        link: "https://code.visualstudio.com/",
        icone: "fas fa-code",
        rate: 5
    },
    {
        name: "PhpStorm",
        link: "https://www.jetbrains.com/phpstorm/",
        icone: "fas fa-code",
        rate: 5
    },
    
    // Business & Automation
    {
        name: "VBA",
        link: "https://docs.microsoft.com/fr-fr/office/vba/api/overview/",
        icone: "fas fa-code",
        rate: 4
    },
    {
        name: "WinDev",
        link: "https://www.pcsoft.fr/fr/windev/",
        icone: "fas fa-code",
        rate: 3
    },
    {
        name: "MS Project",
        link: "https://www.microsoft.com/fr-fr/microsoft-365/project/project-management-software",
        icone: "fas fa-project-diagram",
        rate: 4
    },
    
    // Design & Marketing
    {
        name: "Figma",
        link: "https://www.figma.com/",
        icone: "fa-brands fa-figma",
        rate: 5
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/fr/products/photoshop.html",
        icone: "fas fa-image",
        rate: 3
    },
    {
        name: "Adobe InDesign",
        link: "https://www.adobe.com/fr/products/indesign.html",
        icone: "fas fa-newspaper",
        rate: 3
    },
    {
        name: "Camtasia",
        link: "https://www.techsmith.com/video-editor.html",
        icone: "fas fa-video",
        rate: 3
    },
    {
        name: "SEM Rush",
        link: "https://www.semrush.com/",
        icone: "fas fa-search",
        rate: 4
    }
];

export const experiences: Experience[] = [
    {
        period: "Juil. 2019 - aujourd'hui",
        role: "Assistant administratif et financier (CIF)",
        company: "Cabinet OEFIC, Meylan",
        description: "Conseil en gestion de patrimoine, optimisation fiscale et suivi des dossiers d'investissement financier pour une clientèle privée.",
        logos: [
            { type: 'icon', content: 'fas fa-briefcase' },
            { type: 'icon', content: 'fas fa-chart-line' },
            { type: 'image', content: '/cedric-portfolio/images/experience/oefic.png', alt: 'Cabinet OEFIC', link: '#' }
        ],
        more: `
<h3>Missions principales</h3>
<ul>
  <li><strong>Gestion des dossiers patrimoniaux, fiscaux et CIF</strong> - Conseil en Investissement Financier</li>
  <li><strong>Gestion des dossiers de présentation</strong> - Augmentations de capital et financements institutionnels</li>
  <li><strong>Gestion administrative</strong> - Comptabilité, archivage, structuration des documents</li>
</ul>

<h3>Compétences développées</h3>
<ul>
  <li>Expertise en ingénierie patrimoniale et assurance</li>
  <li>Gestion fiscale et conformité réglementaire</li>
  <li>Relation client et conseil personnalisé</li>
</ul>

<p><em>Secteur : Finance, Ingénierie Patrimoniale, Assurance, Fiscale</em></p>
`
    },
    {
        period: "Mai. 2021 - Déc. 2024",
        role: "Lead Développeur Full Stack & Référent Technique ERP",
        company: "Groupe MO, Saint-Egrève",
        description: "Pilotage de la transformation digitale : architecture Full Stack Laravel/Vue.js, optimisation ERP CODIAL et développement de solutions e-commerce sur mesure.",
        logos: [
            { type: 'icon', content: 'fab fa-laravel' },
            { type: 'icon', content: 'fab fa-vuejs' },
            { type: 'image', content: '/cedric-portfolio/images/experience/groupe_mo.png', alt: 'Groupe MO', link: 'https://www.groupe-mo.fr' },
            { type: 'image', content: '/cedric-portfolio/images/experience/MO-shop.png', alt: 'MO Shop', link: 'https://shop.groupe-mo.fr' }
        ],
        more: `
<h3>Développement Web Full Stack</h3>
<ul>
  <li><strong>Construction interfaces WEB</strong> - Frontend et Backend complet</li>
  <li><strong>BackOffice Laravel</strong> - Interface sécurisée et gestion des données</li>
  <li><strong>FrontOffice VueJS</strong> - Single Page Application moderne</li>
  <li><strong>Programmation et développement</strong> - Mise à jour continue du site et applications</li>
</ul>

<h3>E-commerce et ERP</h3>
<ul>
  <li><strong>Site E-commerce Prestashop 8</strong> - Compatible avec l'ERP CODIAL</li>
  <li><strong>Optimisation ERP CODIAL</strong> - Fluidité interne et avec prestataires</li>
  <li><strong>Gestion fournisseurs</strong> - Récupération datas, images, normes, fiches techniques</li>
  <li><strong>Traitement données tarifaires</strong> - Excel, PDF, optimisation marge</li>
</ul>

<h3>Automatisation et Développement</h3>
<ul>
  <li><strong>Macro WinDev</strong> - Gestion automatique des modes de livraison</li>
  <li><strong>VBA Excel</strong> - Micrologiciel pour optimisation tarifs et import CODIAL</li>
  <li><strong>Python</strong> - DownloaderImage pour téléchargement massif d'images</li>
</ul>

<h3>Formation et Support</h3>
<ul>
  <li><strong>Formation utilisateurs</strong> - BackOffice web et ERP CODIAL</li>
  <li><strong>Formation commerciale</strong> - Utilisation du site E-commerce</li>
  <li><strong>Visites clients</strong> - Présentation du site avec les commerciaux</li>
</ul>

<p><strong>Sites web</strong> : <a href="https://www.groupe-mo.fr" target="_blank">groupe-mo.fr</a> et <a href="https://shop.groupe-mo.fr" target="_blank">shop.groupe-mo.fr</a></p>
<p><em>Secteur : Développement Web, Webmarketing, E-Merchandising, Management, Gestion fournisseurs</em></p>
`
    },
    {
        period: "Janv. 2017 - Août. 2019",
        role: "Customer Success Manager & Chef de Projets Digital Marketing",
        company: "Webmarketing Booster, Grenoble",
        description: "Accompagnement client et pilotage de projets webmarketing : stratégie SEO, optimisation des outils digitaux et développement de solutions marketing personnalisées.",
        logos: [
            { type: 'icon', content: 'fas fa-bullhorn' },
            { type: 'icon', content: 'fas fa-search' },
            { type: 'image', content: '/cedric-portfolio/images/experience/wmb.png', alt: 'Webmarketing Booster', link: '#' }
        ],
        more: `
<h3>Stratégie Webmarketing</h3>
<ul>
  <li><strong>Restructuration</strong> - Outils de communication de l'entreprise</li>
  <li><strong>Développement</strong> - Visuels et outils à la commercialisation</li>
  <li><strong>SEO</strong> - Gestion Search Engine Optimisation pour clients services</li>
</ul>

<h3>Gestion client et projets</h3>
<ul>
  <li><strong>Stratégies webmarketing</strong> - Accompagnement clients produits</li>
  <li><strong>Suivi projets</strong> - Mise en place et suivi des projets clients</li>
  <li><strong>Support technique</strong> - Accompagnement à la résolution des problèmes</li>
</ul>

<p><em>Secteur : Webmarketing, E-Merchandising, Développement Web, Management de projets</em></p>
`
    },
    {
        period: "Fév. 2014 - Déc. 2016",
        role: "Gestion de dossiers familiaux",
        company: "Césure personnelle, Grenoble",
        description: "Prise en charge et gestion de dossiers patrimoniaux, juridiques et fiscaux suite à succession familiale.",
        logos: [
            { type: 'icon', content: 'fas fa-home' },
            { type: 'icon', content: 'fas fa-shield-alt' },
            { type: 'image', content: '/cedric-portfolio/images/experience/cesure.jpg', alt: 'Césure personnelle' }
        ],
        more: `
<h3>Gestion de succession familiale</h3>
<ul>
  <li><strong>Dossiers patrimoniaux</strong> - Succession familiale complète</li>
  <li><strong>Suivi juridique</strong> - Succession et assurances GAV</li>
  <li><strong>Dossiers fiscaux</strong> - Déclarations et optimisation fiscale</li>
</ul>

<p><em>Secteur : Finance, Ingénierie Patrimoniale, Assurance, Fiscale</em></p>
`
    },
    {
        period: "Mai 2010 - Janv. 2014",
        role: "European Innovation Project Manager",
        company: "Grenoble Ecole de Management & KIC InnoEnergy",
        description: "Coordination de projets européens d'innovation énergétique, management d'équipes internationales et gestion budgétaire (<1M&eur;).",
        logos: [
            { type: 'icon', content: 'fas fa-project-diagram' },
            { type: 'icon', content: 'fas fa-euro' },
            { type: 'image', content: '/cedric-portfolio/images/experience/grenoble_em.jpg', alt: 'Grenoble Ecole de Management', link: 'https://www.grenoble-em.com' },
            { type: 'image', content: '/cedric-portfolio/images/experience/kic_innoEnergy.jpg', alt: 'KIC InnoEnergy', link: 'https://www.innoenergy.com' }
        ],
        more: `
<h3>Mastère Spécialisé Management et Marketing de l'Énergie</h3>
<ul>
  <li><strong>Réseau B to B</strong> - Création de 250 comptes entreprises partenaires</li>
  <li><strong>Gestion formation</strong> - Coordination du projet de formation MS Énergie</li>
  <li><strong>Budget</strong> - Gestion budgétaire <1 M&eur; et plannings projets</li>
  <li><strong>Pédagogie</strong> - Sélection et intégration d'intervenants professionnels</li>
  <li><strong>Accompagnement étudiants</strong> - Solutions projets professionnels</li>
</ul>

<h3>KIC InnoEnergy</h3>
<ul>
  <li><strong>Management équipe</strong> - Équipe européenne de 14 personnes</li>
  <li><strong>Projets innovation</strong> - 6 projets collaboratifs européens</li>
  <li><strong>Business development</strong> - Accompagnement porteurs de projets (R&D, prototypage)</li>
  <li><strong>Coordination européenne</strong> - Relations entre porteurs et partenaires</li>
  <li><strong>Gestion budgétaire</strong> - Prévisionnels projets européens</li>
</ul>

<h3>Collaboration Grenoble Ecole de Management</h3>
<ul>
  <li><strong>GEM Inno Awards</strong> - Gestion du projet</li>
  <li><strong>Projets R&D</strong> - Interventions académiques et recherche</li>
  <li><strong>Innovation</strong> - Gestion projets divers dans l'innovation</li>
</ul>

<p><strong>Site web</strong> : <a href="https://www.innoenergy.com" target="_blank">innoenergy.com</a></p>
<p><em>Secteur : Management de projets</em></p>
`
    },
    {
        period: "Déc. 2009 - Avr. 2010",
        role: "Fondateur & Directeur Général",
        company: "Projet Bureau d'Études Photovoltaïque, Grenoble",
        description: "Création et développement d'un bureau d'études spécialisé en projets photovoltaïques industriels (>250Kwc) pour valorisation de toitures.",
        logos: [
            { type: 'icon', content: 'fas fa-solar-panel' },
            { type: 'icon', content: 'fas fa-briefcase' },
            { type: 'image', content: '/cedric-portfolio/images/experience/pv.jpeg', alt: 'Projet photovoltaïque' }
        ],
        more: `
<h3>Projet photovoltaïque</h3>
<ul>
  <li><strong>Développement projets</strong> - Photovoltaïque >250 Kwc</li>
  <li><strong>Valorisation</strong> - Toitures industrielles et tertiaires</li>
  <li><strong>Études</strong> - Techniques et financières complètes</li>
</ul>

<p><em>Arrêt du projet suite au moratoire sur le photovoltaïque en décembre 2009</em></p>
<p><em>Secteur : Gestion d'entreprise, Management de projets, Énergétique</em></p>
`
    },
    {
        period: "Sept. 2007 - Déc. 2008",
        role: "Business Development Manager",
        company: "Sogeti High Tech, Lyon & Grenoble",
        description: "Développement commercial B2B et création d'une nouvelle Business Unit spécialisée en ingénierie (mécanique, énergie, industrialisation).",
        logos: [
            { type: 'icon', content: 'fas fa-handshake' },
            { type: 'icon', content: 'fas fa-chart-line' },
            { type: 'image', content: '/cedric-portfolio/images/experience/sogeti.png', alt: 'Sogeti High Tech', link: 'https://www.fr.sogeti.com' }
        ],
        more: `
<h3>Développement commercial</h3>
<ul>
  <li><strong>Portefeuille clients</strong> - 25 comptes clients B to B</li>
  <li><strong>Business Unit</strong> - Développement stratégique ingénierie (Mécanique, Énergie, Industrialisation)</li>
  <li><strong>Études projets</strong> - Techniques et marché qualitatif</li>
</ul>

<h3>Marketing et vente</h3>
<ul>
  <li><strong>Outils marketing</strong> - Conception et vente</li>
  <li><strong>Vente B to B</strong> - Relations avec Directeurs R&D, Projets et Sites</li>
  <li><strong>Recrutement</strong> - Profils selon besoins clients</li>
  <li><strong>Outils bureautiques</strong> - Utilisation avancée</li>
</ul>

<p><strong>Site web</strong> : <a href="https://www.fr.sogeti.com" target="_blank">fr.sogeti.com</a></p>
<p><em>Secteur : Autres activités de services, Commercial, Management de service</em></p>
`
    },
    {
        period: "Avr. 2007 - Août 2007",
        role: "Research Assistant - Nanotechnology",
        company: "CNRS, Institut Néel, Grenoble",
        description: "Stage R&D : Caractérisation et optimisation de nanotubes de carbone par CVD pour applications micro & nano-électroniques.",
        logos: [
            { type: 'icon', content: 'fas fa-microscope' },
            { type: 'icon', content: 'fas fa-atom' },
            { type: 'image', content: '/cedric-portfolio/images/experience/cnrs.jpg', alt: 'CNRS', link: 'https://www.cnrs.fr' },
            { type: 'image', content: '/cedric-portfolio/images/experience/neel.png', alt: 'Institut Néel', link: 'https://neel.cnrs.fr' }
        ],
        more: `
<h3>Stage CNRS Institut Néel</h3>
<ul>
  <li><strong>Recherche</strong> - Nanotubes de carbone par dépôt chimique en phase vapeur</li>
  <li><strong>Application</strong> - Secteur Micro & Nano-électronique</li>
  <li><strong>Optimisation</strong> - Caractérisation et optimisation du procédé</li>
</ul>

<p><strong>Site web</strong> : <a href="http://neel.cnrs.fr" target="_blank">neel.cnrs.fr</a></p>
<p><em>Secteur : Activités spécialisées, scientifiques et techniques</em></p>
`
    },
    {
        period: "Avr. 2006 - Août 2006",
        role: "Research Assistant - Materials Science",
        company: "CEA Liten, Grenoble",
        description: "Stage R&D : Élaboration et caractérisation de couches minces carbonées par PECVD pour applications énergie, médical et automobile.",
        logos: [
            { type: 'icon', content: 'fas fa-flask' },
            { type: 'icon', content: 'fas fa-atom' },
            { type: 'image', content: '/cedric-portfolio/images/experience/cea_liten.jpg', alt: 'CEA Liten', link: 'https://liten.cea.fr/cea-tech/liten' }
        ],
        more: `
<h3>Stage CEA Liten</h3>
<ul>
  <li><strong>Développement</strong> - Couches minces à base de carbone</li>
  <li><strong>Technologie</strong> - Dépôt chimique en phase vapeur amélioré par plasma</li>
</ul>

<h3>Secteurs d'application</h3>
<ul>
  <li>Énergie</li>
  <li>Médical</li>
  <li>Automobile</li>
  <li>Micro & Nano-électronique</li>
</ul>

<p><strong>Site web</strong> : <a href="http://liten.cea.fr/cea-tech/liten" target="_blank">CEA Liten</a></p>
<p><em>Secteur : Activités spécialisées, scientifiques et techniques</em></p>
`
    },
    {
        period: "Juin 2004 - Août 2004",
        role: "Préparateur de commandes",
        company: "Citroën, Grenoble",
        description: "Réception, préparation et livraison de véhicules neufs.",
        logos: [
            { type: 'icon', content: 'fas fa-car' },
            { type: 'icon', content: 'fas fa-truck' },
            { type: 'image', content: '/cedric-portfolio/images/experience/citroen.png', alt: 'Citroën' }
        ],
        more: `
<h3>Missions chez Citroën</h3>
<ul>
  <li><strong>Réception véhicules</strong> - Véhicules neufs</li>
  <li><strong>Préparation</strong> - Mise en conformité des véhicules</li>
  <li><strong>Livraison</strong> - Distribution aux clients</li>
</ul>
`
    },
    {
        period: "Été 1999 - 2003",
        role: "Plagiste bénévole",
        company: "Moana Beach, Cannes",
        description: "Location de loisirs nautiques (voiles, pédalos) pendant les étés.",
        logos: [
            { type: 'icon', content: 'fas fa-umbrella-beach' },
            { type: 'icon', content: 'fas fa-water' }
        ],
        more: `
<h3>Activités estivales</h3>
<ul>
  <li><strong>Location loisirs</strong> - Voiles et pédalos</li>
  <li><strong>Service client</strong> - Accueil et conseil</li>
  <li><strong>Gestion plage</strong> - Organisation et sécurité</li>
</ul>
`
    }
];

export const education: Education[] = [
    {
        period: "Oct. 2020 - Juil. 2021",
        school: "Campus Numérique in the Alps & CNAM",
        description: "Titre Professionnel Développeur Web Full Stack (RNCP Niveau 5 - Bac+2)",
        logos: [
            { type: 'icon', content: 'fas fa-code' },
            { type: 'icon', content: 'fas fa-graduation-cap' },
            { type: 'image', content: '/cedric-portfolio/images/education/campus-numerique.jpg', alt: 'Campus Numérique' },
            { type: 'image', content: '/cedric-portfolio/images/education/cnam.png', alt: 'CNAM' }
        ],
        more: `
<h3>Programme de formation</h3>
<p>Formation intensive en développement web <strong>full stack</strong> avec spécialisation sur les technologies modernes.</p>

<h4>Compétences techniques développées</h4>
<ul>
  <li><strong>Frontend</strong> : HTML, CSS, JavaScript, React, VueJS, React Native</li>
  <li><strong>Backend</strong> : PHP, Laravel, MySQL, PDO</li>
  <li><strong>Framework</strong> : Angular, ReactJS</li>
  <li><strong>Algorithmique</strong> : Variables, conditions, fonctions, boucles, tableaux</li>
  <li><strong>Base de données</strong> : MySQL Workbench, SQL, PDO</li>
  <li><strong>Outils</strong> : GitLab, WAMP, Git</li>
</ul>

<h4>Projets réalisés</h4>
<ul>
  <li>Front-End simple sans Framework (HTML/CSS/JS natif)</li>
  <li>Projet Angular et ReactJS</li>
  <li>Application mobile hybride React Native/VueJS</li>
  <li>Mise en ligne de site internet</li>
</ul>

<p><strong>Certification</strong> : HTML / CSS / JavaScript</p>
<p><strong>Niveau</strong> : 5 CEC (Bac+2)</p>
`
    },
    {
        period: "Nov. 2019 - Déc. 2019",
        school: "Formation CGP-CIF",
        description: "Certification AMF - Conseiller en Investissement Financier (92.66% de réussite)",
        logos: [
            { type: 'icon', content: 'fas fa-certificate' },
            { type: 'icon', content: 'fas fa-euro-sign' }
        ],
        more: `
<h3>Formation AMF</h3>
<p>Réussite de l'examen à <strong>92.66%</strong></p>

<h4>Programme</h4>
<ul>
  <li>Cadre institutionnel et réglementaire français</li>
  <li>Architecture européenne de la régulation</li>
  <li>Politique économique et monétaire</li>
  <li>Organisation des marchés financiers</li>
  <li>Protection des clients et déontologie</li>
  <li>Instruments financiers, risques et rendement</li>
  <li>Gestion pour compte de tiers</li>
  <li>Réglementation OPCVM et lutte contre le blanchiment</li>
</ul>

<p><strong>Validé</strong> : Décembre 2019</p>
`
    },
    {
        period: "Juin 2012",
        school: "M2i Formation",
        description: "Construire et suivre un projet sous MS Project 2010",
        logos: [
            { type: 'icon', content: 'fas fa-project-diagram' },
            { type: 'icon', content: 'fas fa-chart-gantt' },
            { type: 'image', content: '/cedric-portfolio/images/education/m2i.jpg', alt: 'M2i Formation' }
        ]
    },
    {
        period: "Sept. 2009 - Déc. 2009",
        school: "CNAM Rhône-Alpes",
        description: "Certificat Énergie Photovoltaïque (RNCP Niveau 7 - Master 1)",
        logos: [
            { type: 'icon', content: 'fas fa-solar-panel' },
            { type: 'icon', content: 'fas fa-graduation-cap' },
            { type: 'image', content: '/cedric-portfolio/images/education/ense3.svg', alt: 'ENSE3'},
            { type: 'image', content: '/cedric-portfolio/images/education/cnam.png', alt: 'CNAM' }
        ],
        more: `
<h3>Études photovoltaïques</h3>
<ul>
  <li>Étude des composants photovoltaïques</li>
  <li>Étude des systèmes photovoltaïques</li>
</ul>

<h4>Logiciels maîtrisés</h4>
<ul>
  <li>RetScreen</li>
  <li>PVsyst</li>
  <li>PVsols</li>
</ul>

<p><strong>Niveau</strong> : 7 CEC (Master 1)</p>
`
    },
    {
        period: "Sept. 2007 - Nov. 2008",
        school: "IDRAC École Supérieure de Commerce",
        description: "Titre RNCP Niveau 6 - Responsable Développement Marketing & Commercial International",
        logos: [
            { type: 'icon', content: 'fas fa-bullhorn' },
            { type: 'icon', content: 'fas fa-chart-line' },
            { type: 'image', content: '/cedric-portfolio/images/education/idrac.png', alt: 'IDRAC' }
        ],
        more: `
<h3>Programme IDRAC</h3>
<ul>
  <li>Marketing et communication</li>
  <li>Négociation commerciale et internationale</li>
  <li>Informatique de gestion (comptabilité, finance)</li>
  <li>Système d'information</li>
  <li>Gestion budgétaire et comptable</li>
  <li>Prévisions des ventes</li>
  <li>Analyse de données qualitative et quantitative</li>
  <li>Droit commercial, social, international</li>
  <li>Gestion des ressources humaines</li>
  <li>Diagnostic stratégique d'entreprise</li>
</ul>

<p><strong>Niveau</strong> : 6 CEC</p>
`
    },
    {
        period: "Oct. 2003 - Août. 2007",
        school: "Université Grenoble Alpes - Joseph Fourier",
        description: "DUT Génie Mécanique et Productique (RNCP Niveau 5 - Bac+2) - Parcours Sportif de Haut Niveau",
        logos: [
            { type: 'icon', content: 'fas fa-industry' },
            { type: 'icon', content: 'fas fa-cogs' },
            { type: 'image', content: '/cedric-portfolio/images/education/IUT1.png', alt: 'IUT1' }
        ],
        more: `
<h3>DUT Génie Mécanique</h3>
<p>Parcours réalisé en statut <strong>Sportif de Haut Niveau (SHN)</strong></p>

<h4>Compétences développées</h4>
<ul>
  <li><strong>Conception mécanique</strong> : Études de mécanismes, transmissions, chaîne numérique</li>
  <li><strong>Résistance des matériaux</strong> : Propriétés, sollicitations, comportement</li>
  <li><strong>Mécanique</strong> : Statique, dynamique du solide</li>
  <li><strong>Production</strong> : Procédés d'obtention, phase-optimisation des coûts</li>
  <li><strong>Métrologie</strong> : Mesures, contrôle, états de surface</li>
  <li><strong>Électricité</strong> : Fondamentales, motorisation électrique</li>
  <li><strong>Automatisme</strong> : Conception, programmation, sécurité</li>
  <li><strong>Thermodynamique</strong> : Mécanique des fluides</li>
  <li><strong>Informatique</strong> : Bases de données</li>
  <li><strong>Management</strong> : Conduite de projet, gestion d'équipe</li>
</ul>

<p><strong>Niveau</strong> : 5 CEC (Bac+2)</p>
`
    },
    {
        period: "Sept. 2002 - Juil. 2003",
        school: "Lycée Pierre Termier",
        description: "Baccalauréat Technologique en Sciences et Technologies Industrielles spécialisé en Génie Mécanique",
        logos: [
            { type: 'icon', content: 'fas fa-school' },
            { type: 'icon', content: 'fas fa-cog' }
        ]
    }
];

export const hobbies: Hobby[] = [
    // Sportif
    {
        name: "Escrime",
        description: "Pratique compétitive en club - discipline stratégique",
        logo: { type: 'icon', content: 'fas fa-medal' }
    },
    {
        name: "Natation",
        description: "Entrainement régulier pour bien-être et endurance",
        logo: { type: 'icon', content: 'fas fa-swimmer' }
    },
    {
        name: "Volley-ball",
        description: "Pratique en club et loisirs - esprit d'équipe",
        logo: { type: 'icon', content: 'fas fa-volleyball-ball' }
    },
    {
        name: "Ski",
        description: "Alpin et nordique - passion montagne",
        logo: { type: 'icon', content: 'fas fa-skiing' }
    },
    {
        name: "Randonnée",
        description: "Exploration des sentiers de montagne et découvertes",
        logo: { type: 'icon', content: 'fas fa-mountain' }
    },
    
    // Réflexion & Culture
    {
        name: "Lecture",
        description: "Roman, essais, philosophie - développement intellectuel",
        logo: { type: 'icon', content: 'fas fa-book' }
    },
    {
        name: "Jeux de stratégie",
        description: "Échecs et jeux de société - esprit analytique",
        logo: { type: 'icon', content: 'fas fa-chess' }
    },
    {
        name: "Escape Games",
        description: "Résolution d'énigmes - travail d'équipe et logique",
        logo: { type: 'icon', content: 'fas fa-puzzle-piece' }
    },
    {
        name: "Magic: The Gathering",
        description: "Collection et compétition - stratégie et analyse",
        logo: { type: 'icon', content: 'fas fa-hat-wizard' }
    },
    {
        name: "Arts & Culture",
        description: "Visites d'expositions, musées et découvertes artistiques",
        logo: { type: 'icon', content: 'fas fa-palette' }
    }
];

export const projects: Project[] = [
    {
        name: "BackOffice Laravel + SPA Vue.js",
        description: "Interface sécurisée et front-office moderne pour la gestion de contenu et de processus métier.",
        liveUrl: "https://groupe-mo.fr",
        githubUrl: "https://github.com/cedric-pages/backoffice-laravel-vue",
        technologies: ["Laravel", "Vue.js", "MySQL", "API REST", "JWT"]
    },
    {
        name: "Site e-commerce Prestashop",
        description: "Site compatible ERP CODIAL, avec optimisation des flux internes et du catalogue produit.",
        liveUrl: "https://shop.groupe-mo.fr",
        githubUrl: "https://github.com/cedric-pages/ecommerce-prestashop",
        technologies: ["Prestashop", "PHP", "MySQL", "ERP Integration", "Payment APIs"]
    },
    {
        name: "Automatisations Python / VBA",
        description: "Scripts et micro-outils pour l'import de données, la gestion de tarifs et le traitement de fichiers.",
        // githubUrl: "https://github.com/cedric-pages/automations-python-vba",
        technologies: ["Python", "VBA", "Excel", "Data Processing", "Automation"]
    }
];
