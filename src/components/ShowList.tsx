import React, { FunctionComponent, useContext } from "react";
import Context from "../context/Context";
import { myProjects } from "../data";
import { IProject } from "../interfaces";

interface ShowListProps {}
 
const ShowList: FunctionComponent<ShowListProps> = () => {
  const { skills } = useContext(Context);

  const projects: IProject[] = myProjects.filter((project) => !skills.length
    || skills.some((skill) => project.techs.some((tech) => tech === skill)));

  return (
    <div className=" h-2/3 w-5/6">
      {
        projects.map(({ name, image, description, techs, link }) => (
          <div className="flex w-full h-full items-center justify-around flex-col" key={ name }>
            <h1 className="text-center font-bold text-2xl text-green-200 my-3">{ name }</h1>
            
            <a href={ link } target="_blank" rel="noreferrer" className="h-fit w-3/5 max-w-xs rounded-md mx-3">
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
  );
}
 
export default ShowList;