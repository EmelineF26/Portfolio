import Hemy from '../src/assets/images/Hemy8.png';
import P7MVG from '../src/assets/projets/P7_MVG_1.jpg';
import kasa from '../src/assets/projets/Kasa_1.jpg';
import Nina from '../src/assets/projets/P5_Nina.jpg';
import MenuMaker from '../src/assets/projets/P4_MMBQ.jpg';
import SophieBluel from '../src/assets/projets/P3_SophieBluel.jpg';
import Booki from '../src/assets/projets/P2_Booki.jpg';
import JSlogo from '../src/assets/images/Logo-Javascript-remove.png';
import ReactLogo from '../src/assets/images/1175112.png';
import NodeLogo from '../src/assets/images/NodeJS_2.png';
import HtmlCssLogo from '../src/assets/images/html-css_1.png';
import './index.css';

const logotext = "HEMY";
const meta = {
    title: "Hemy's Portfolio",
    description: "Je suis Hémeline, Développeuse web junior fullstack sur Lyon et ses alentours",
};

const introdata = {
    title: "Je suis Hémeline",
    animated: {
        first: "Jeune Développeuse web fullstack",
        second: "Passionnée par le web et le code",
        third: "Transforme vos projets en réalité numérique",
    },
    description: "Après 7 ans à travailler dans le domaine de la logistique, j'ai décidé de me reconvertir dans le domaine du web, car j'ai toujours eu une appétence depuis petite pour l'informatique et le web. Je souhaite aujourd'hui compléter ma formation avec une alternance dans ce domaine à un niveau Bac +3/4 pour développer mes compétences.",
    your_img_url: Hemy,
};

const dataabout = {
    title: "Un peu plus à propos de moi",
    aboutme: "J'ai 29 ans, je suis amatrice de musique, d'animaux, de voyages. Pour parler un peu plus de mon travail, j'ai entamé ma reconversion professionnelle avec une formation au titre RNCP Développeur web Bac +2, que j'aimerais compléter avec une alternance.",
};

const MonCV = [{
        jobtitle: "Agent d'exploitation logistique",
        where: "Amazon",
        date: "2016 à 2024",
    },
    {
        jobtitle: "Formation Développeur web",
        where: "Open Classrooms",
        date: "2022 à 2024",
    },
    {   jobtitle: "Baccalauréat professionnel",
        where: "Lycée Agricole St Paul 3 Chateaux",
        date: "2010 à 2013",
    },
];

const skills = [{
        name: "Javascript",
        logo: JSlogo,
    },
    {
        name: "React",
        logo: ReactLogo,
    },
    {
        name: "Node.js",
        logo: NodeLogo,
    },
    {
        name: "HTML/CSS",
        logo: HtmlCssLogo,
    },
];

const dataportfolio = [{
        img: P7MVG,
        description: "Mon Vieux Grimoire, projet back-end de création d'une API du site d'une chaîne de librairies avec Node.js, Express, et MongoDB. J'ai trouvé ce projet contraignant car il y avait beaucoup de choses à vérifier, la conformité de chaque erreur, autant côté Postman que sur le site. La création également du processus de validation du mot de passe n'a pas été une mince à faire, mais j'ai trouvé ce projet très enrichissant en terme de technique.",
        link: "https://github.com/EmelineF26/MonVieuxGrimoire",
    },
    {
        img: kasa,
        description: "Kasa, projet front-end de création d'un site d'une agence immobilière en React. Ce projet n'a pas été simple, par rapport notamment à la création des collapses et des animations CSS qui vont avec (chose que je n'avais pas faite avant). Il m'a clairement balancé hors de ma zone de confort, mais j'ai appris énormément grâce à ce projet, j'ai eu plaisir à travailler avec React.",
        link: "https://github.com/EmelineF26/kasa",
    },
    {
        img: Nina,
        description: "Nina Carducci, une photographe qui avait besoin d'une prestation débug et optimisation pour son site (SEO). Ce projet n'a pas été simple à aborder, de par sa complexité et son absence de codage, la partie débugage n'a pas été ma préférée, mais la partie SEO a été intéressante à apprendre, et j'aurais plaisir à retravailler sur du SEO dans le futur.",
        link: "https://github.com/EmelineF26/P5_NinaCarducci",
    },
    {
        img: MenuMaker,
        description: "Menu Maker by Qwenta, un projet de site permettant aux restaurateurs d'afficher et de mettre en page leurs menus (gestion de projet avec Trello). Ce projet a été pour ma part, le moins stimulant de tous. Il m'a appris beaucoup de choses sur la manière de gérer un projet, toute la partie en amont, ça a été intéressant d'apprendre, de connaître, bien que ce ne soit pas quelque chose que j'aurais envie de pratiquer tout le temps.",
        link: "https://trello.com/b/NEt7vezl/menu-maker-by-qwenta",
    },
    {
        img: SophieBluel,
        description: "Sophie Bluel, architecte d'intérieur ayant fait appel à nous pour la conception de son site portfolio, projet en Javascript, incluant une communication avec une API. Projet intéressant, pas facile du point de vue technique quand on a un bas niveau en Javascript, la récupération des données m'a donné du fil à retordre, mais il m'en a appris énormément, et j'ai été très contente du résultat une fois le projet fini.",
        link: "https://github.com/EmelineF26/Portfolio-architecte-sophie-bluel",
    },
    {
        img: Booki,
        description: "Booki, site internet permettant de trouver des hébergements et des activités à Marseille (projet en HTML5/CSS3). Premier projet de ma formation, l'apprentissage de HTML et CSS a été long car je n'avais pas beaucoup de bases, le projet a été long à faire aussi. Flexbox nous promettait une mise en page facile, à condition de s'entraîner à l'utiliser, et à le comprendre. C'est un très bon projet de démarrage que je recommanderais à tout débutant.",
        link: "https://github.com/EmelineF26/ProjetBooki",
    },
];

const contactConfig = {
    YOUR_EMAIL: "emeline.farget@outlook.fr",
    YOUR_FONE: "+33 7 49 41 70 88",
    description: "N'hésitez pas à me contacter, je suis disponible essentiellement le soir entre 17h et 19h30 tous les soirs de la semaine, et entre 12h et 14h. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
    YOUR_USER_ID: "7vcy7tGpApwkc7B46",
};

const socialprofils = {
    github: "https://github.com/EmelineF26",
    linkedin: "https://www.linkedin.com/in/hemeline-farget",
};
export {
    meta,
    dataabout,
    dataportfolio,
    MonCV,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};