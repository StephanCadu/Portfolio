import React, { FunctionComponent, useRef, useState } from "react";
import Nav from "./Nav";
import onlinestore from '../images/onlinestore.png'

interface ProjectsProps {}

interface ITech {
  name: string
  image: string
}

interface IProject {
  name: string
  image: string
  description: string
  techs: string[]
  link: string
}

const techs: Array<ITech> = [
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

const myProjects: IProject[] = [
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

const Projects: FunctionComponent<ProjectsProps> = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const ref = useRef<null | HTMLDivElement>(null);

  const projects: IProject[] = myProjects.filter((project) => !skills.length
    || skills.some((skill) => project.techs.some((tech) => tech === skill)));

  const scroll = (offset: number): void => {
    if (ref.current !== null) {
      ref.current.scrollLeft += offset;
    }
  }

  
  return (
    <div className="outContainer">
      <Nav />
      
      <main className="mainContainer">
        {/* title */}
        <h2 className="mb-3 font-bold text-green-200 text-4xl">Projects</h2>

        {/* techs carousel */}
        <div className="flex h-16 items-center justify-center skillsContainer">
          <button className="arrow-left text-white" onClick={() => scroll(-95)}>{ '<' }</button>

          <div className="flex h-14 items-center skills" ref={ref}>
            { 
              techs.map(({ image, name }, index) => (
                <img 
                  onClick={() => setSkills(
                    skills.includes(name) 
                    ? skills.filter((skill) => skill !== name) 
                    : [...skills, name])} 
                  className={ 
                    `h-11 w-11 mx-6 my-3 p-1 hover:cursor-pointer 
                    ${skills.includes(name) ? 'border-b-2 border-b-green-200' : ''}
                    `
                  }
                  src={ image } 
                  alt={ name } 
                />
              ))
            }
          </div>
          
          <button className="arrow-right text-white" onClick={() => scroll(95)}>{ '>' }</button>
        </div>

        {/* projects */}
        <div className=" h-2/3 w-5/6">
          {
            projects.map(({ name, image, description, techs, link }) => (
              <div className="flex w-full h-full items-center justify-around flex-col">
                <h1 className="text-center font-bold text-2xl text-green-200 my-3">{ name }</h1>
                
                <a href={ link } className="h-fit w-3/5 max-w-xs rounded-md mx-3">
                  <img src={ image } alt={ name } />
                </a>

                <p className="text-center p-1 w-5/6">{ description }</p>
                
                <div className="flex w-11/12 h-3/5 items-center justify-center overflow-x-auto">
                  { techs.map((tech) => <p className="mx-4 text-green-200">{ tech }</p>) }
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}
 
export default Projects;