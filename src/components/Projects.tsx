import React, { FunctionComponent, useState } from "react";
import Nav from "./Nav";

interface ProjectsProps {}

interface ITech {
  name: string,
  image: string
}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const [skill, setSkill] = useState('');
  
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
    { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' }
  ];
  
  return (
    <div className="outContainer">
      <Nav />
      
      <main className="mainContainer">
        <h2 className="mb-3 font-bold text-green-300">Select a skill:</h2>

        <div className="flex w-3/4 h-fit items-center justify-center flex-wrap">
          { techs.map(({ image, name }) => (
            <img 
              onClick={() => setSkill(skill === name ? '' : name)} 
              className={ `h-11 w-11 mx-6 my-3 p-1 hover:cursor-pointer ${skill === name ? ' border-b-2 border-b-green-200' : ''}`} 
              src={ image } 
              alt={ name } 
            />
          )) }
        </div>

        {/* projects to show */}
        <div>

        </div>
      </main>
    </div>
  );
}
 
export default Projects;