import { PortfolioData } from '../types/PortfolioData';
import rickImg from '../assets/img/rickAndMorty.png';
import songImg from '../assets/img/songBird.png';
import graphiImg from '../assets/img/graphiql.png';
import blazingImg from '../assets/img/blazing8.png';

export const portfolioData: PortfolioData[] = [
  {
    img: rickImg,
    title: 'Rick and Morty',
    deployUrl: 'https://rick-and-morty-maksim-maksimenko.netlify.app/',
    repoUrl: 'https://github.com/mskmee/rss_react',
    stack: [],
  },
  {
    img: songImg,
    title: 'Song Bird',
    deployUrl: 'https://mskmee.github.io/song_bird_quizz/index.html',
    repoUrl: 'https://github.com/mskmee/song_bird_quizz',
    stack: [],
  },
  {
    img: graphiImg,
    title: 'GraphiQl',
    deployUrl: 'https://github.com/mskmee/rs_GraphiQL_front/pull/38',
    repoUrl: 'https://github.com/mskmee/rs_GraphiQL_front',
    stack: [],
  },
  {
    img: blazingImg,
    title: 'Blazing 8 clone',
    deployUrl: 'https://github.com/MOONcitizenX/rs-blazing-8-client/pull/127',
    repoUrl: 'https://github.com/MOONcitizenX/rs-blazing-8-client',
    stack: [],
  },
];
