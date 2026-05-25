const languageIconMap = {
  javascript: 'fab fa-js',
  css: 'fab fa-css3-alt',
  html: 'fab fa-html5',
  scss: 'fab fa-sass',
  reactjs: 'fab fa-react',
  vuejs: 'fab fa-vuejs',
  mysql: 'fab fa-database',
  mongodb: 'fab fa-database',
  sketchbook: 'fab fa-pencil-alt',
};

const getLanguageIcons = (languages) =>
  languages.map(lang => languageIconMap[lang] || 'fas fa-code');

export const portfolioData = [
  {
    id: 1,
    name: 'FilmseriesApi',
    languages: ['javascript', 'css', 'reactjs'],
    source: 'https://filmserie.netlify.app/',
    info: 'Projet avec reactjs, api TMBD',
    picture: './media/filmapi.PNG',
  },
  {
    id: 2,
    name: 'Brasseur de France',
    languages: ['javascript', 'css', 'reactjs'],
    source: 'https://thebrasseurs.netlify.app',
    info: "Projet Brasseur de France, j'ai utilisé react, leaflet et création de la base de données.",
    picture: './media/brasseur.png',
  },
  {
    id: 3,
    name: 'Monty python',
    languages: ['javascript', 'css'],
    source: 'https://projetmonty.netlify.app/',
    info: "Fan des Monty python, donc un projet plutôt autour de la dérision. front-end avec REACTJS, pour le slide j'ai utilisé la librairie swiper. page media API film.",
    picture: './media/montypython.png',
  },
  {
    id: 4,
    name: 'Hans Hartung',
    languages: ['javascript', 'css'],
    source: 'https://projetart.netlify.app/',
    info: "J'ai découvert Hans Hartung lors de mes cours de dessin. J'ai utilisé la librairie AOS.",
    picture: './media/hanshartung.png',
  },
  {
    id: 5,
    name: 'Breaking Bad',
    languages: ['javascript', 'css'],
    source: 'https://frameur.github.io/projetbreaking/',
    info: 'Petit projet, responsive breaking bad simple html, css, javascript.',
    picture: './media/page_breaking.png',
  },
  {
    id: 6,
    name: 'Systéme Solaire',
    languages: ['javascript', 'css', 'scss', 'reactjs'],
    source: 'https://systemsolaire.netlify.app/earth',
    info: 'Projet sur le systeme solaire avec reactjs.',
    picture: './media/systemsolar.png',
  },
  {
    id: 7,
    name: 'Portfolio gatsby',
    languages: ['javascript', 'css', 'reactjs'],
    source: 'https://portfolioframgatsby.netlify.app/',
    info: 'Projet pour presenter mes projets design realisé avec la suite Adobe, suite Affinty et sketchbook.',
    picture: './media/gatsbyportfolio2.png',
  },
  {
    id: 8,
    name: 'React restcountries',
    languages: ['javascript', 'css', 'reactjs'],
    source: 'https://react-api-restcountries.netlify.app/',
    info: 'API countries avec REACTJS avec AXIOS.',
    picture: './media/reactcountries.png',
  },
  {
    id: 9,
    name: 'Todos vuejs',
    languages: ['javascript', 'css', 'vuejs'],
    source: 'https://todoframvuejs.netlify.app/',
    info: 'Petit projet classique, faire sa liste de course avec VUEJS.',
    picture: './media/todo-list.png',
  },
  {
    id: 10,
    name: 'Effet miroir',
    languages: ['css', 'html', 'sketchbook'],
    source: 'https://effetmiroir.netlify.app/',
    info: 'Projet de dessin sur tablette graphique xp-pen artist 22e pro avec le logiciel sketchbook',
    picture: './media/effetmiroir.png',
  },
];

export { getLanguageIcons };
