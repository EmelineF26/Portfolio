import Hemy from '../src/assets/images/Hemy8.png';
import P7MVG from '../src/assets/projets/P7_MVG_1.jpg';
import kasa from '../src/assets/projets/Kasa_1.jpg';
import Nina from '../src/assets/projets/P5_Nina.jpg';
import MenuMaker from '../src/assets/projets/P4_MMBQ.jpg';
import SophieBluel from '../src/assets/projets/P3_SophieBluel.jpg';
import Booki from '../src/assets/projets/P2_Booki.jpg';

const logotext = "HEMY";
const meta = {
    title: "Hemy Portfolio",
    description: "Je suis Hémeline, Développeuse web junior fullstack sur Lyon et ses alentours",
};

const introdata = {
    title: "Je suis Hémeline",
    animated: {
        first: "Jeune Développeuse web fullstack",
        second: "Avec une légère préférence pour le back-end",
        third: "J'aspire à développer de nouvelles compétences",
    },
    description: "Après 7 ans à travailler dans le domaine de la logistique, j'ai décidé de me reconvertir dans le domaine du web, car j'ai toujours eu une appétence depuis petite pour l'informatique et le web. Je souhaite aujourd'hui si possible compléter ma formation avec une alternance dans ce domaine à un niveau Bac +3/4.",
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
        value: 60,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Node.js",
        value: 70,
    },
    {
        name: "HTML/CSS",
        value: 80,
    },
];

// // const services = [{
// //     title: "UI & UX Design",
// //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
// // },
// // {
// //     title: "Mobile Apps",
// //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
// // },
// // {
// //     title: "Wordpress Design",
// //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
// // },
// ];

const dataportfolio = [{
        img: P7MVG,
        description: "Mon Vieux Grimoire, projet back-end de création d'une API du site d'une chaîne de librairies.",
        link: "https://github.com/EmelineF26/MonVieuxGrimoire",
    },
    {
        img: kasa,
        description: "Kasa, projet front-end de création d'un site d'une agence immobilière en React.",
        link: "https://github.com/EmelineF26/kasa",
    },
    {
        img: Nina,
        description: "Nina Carducci, une photographe qui avait besoin d'une prestation débug et optimisation pour son site.",
        link: "https://github.com/EmelineF26/P5_NinaCarducci",
    },
    {
        img: MenuMaker,
        description: "Menu Maker by Qwenta, un projet de site permettant aux restaurateurs d'afficher et de mettre en page leurs menus (gestion de projet).",
        link: "https://trello.com/b/NEt7vezl/menu-maker-by-qwenta",
    },
    {
        img: SophieBluel,
        description: "Sophie Bluel, architecte d'intérieur ayant fait appel à nous pour la conception de son site portfolio, projet en Javascript, incluant une communication avec une API.",
        link: "https://github.com/EmelineF26/Portfolio-architecte-sophie-bluel",
    },
    {
        img: Booki,
        description: "Booki, site internet permettant de trouver des hébergements et des activités dans la ville de leur choix (projet en HTML5/CSS3).",
        link: "https://github.com/EmelineF26/ProjetBooki",
    },
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "emeline.farget@outlook.fr",
    YOUR_FONE: "+33 7 49 41 70 88",
    description: "N'hésitez pas à me contacter, je suis disponible essentiellement le soir entre 17h et 19h30 tous les soirs de la semaine, et entre 12h et 14h. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/EmelineF26",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/hémeline-farget-ab351b121",
    // twitter: "https://twitter.com",
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