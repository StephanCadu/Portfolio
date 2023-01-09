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
    <div className="projOutContainer">
      {
        projects.map(({ name, image, description, techs, link }) => (
          <div className="projContainer" key={ name }>            
            <a href={ link } target="_blank" rel="noreferrer" className="projImgLink">
              <img src={ image } alt={ name } className="projImg" />
            </a>

            <section className="projInfo">
              <h1 className="projTitle">{ name }</h1>

              <p className="projDescription">{ description }</p>
              
              <div className="projTechs">
                { techs.map((tech) => <p className="projTech">{ tech }</p>) }
              </div>
            </section>
          </div>
        ))
      }
    </div>
  );
}
 
export default ShowList;