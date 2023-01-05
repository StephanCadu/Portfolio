import onlinestore from '../images/onlinestore.png';
import { ITech, IProject } from '../interfaces';

export const techs: Array<ITech> = [
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
  { name: 'TS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg' },
  { name: 'Jest', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Mocha', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
  { name: 'Sequelize', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
];

export const myProjects: IProject[] = [
  {
    name: 'Frontend Online Store', 
    image: onlinestore, 
    description: 'E-commerce app consuming Mercado Livre\'s API. Developed in group.',
    techs: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
    link: 'https://my-frontend-online-store.vercel.app/'
  },
  // {
  //   name: 'New Bank', 
  //   image: '', 
  //   description: 'Bank app in wich you can create an account, login and transfer money to other accounts. This was my first Full-stack app.',
  //   techs: ['HTML', 'CSS', 'TS', 'React', 'Node.js', 'Docker', 'PostgreSQL']
  // }
];