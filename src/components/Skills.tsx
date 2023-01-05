import React, { FunctionComponent, useRef, useContext } from "react";
import { techs } from "../data";
import Context from "../context/Context";

interface SkillsProps {}
 
const Skills: FunctionComponent<SkillsProps> = () => {
  const { skills, setSkills } = useContext(Context);
  const ref = useRef<null | HTMLDivElement>(null);

  const scroll = (offset: number): void => {
    if (ref.current !== null) {
      ref.current.scrollLeft += offset;
    }
  }

  return (
    <div className="flex h-16 items-center justify-center skillsContainer">
    <button className="arrow-left text-white" onClick={() => scroll(-95)}>{ '<' }</button>

    <div className="flex h-14 items-center skills" ref={ref}>
      { 
        techs.map(({ image, name }) => (
          <img
            key={ name } 
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
  );
}
 
export default Skills;