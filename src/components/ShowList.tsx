import React, { FunctionComponent, useContext, useRef } from "react";
import Context from "../context/Context";
import { myProjects } from "../data";
import { IProject } from "../interfaces";

interface ShowListProps {}
 
const ShowList: FunctionComponent<ShowListProps> = () => {
  const { skills } = useContext(Context);
  const ref = useRef<null | HTMLDivElement>(null);

  const scroll = (offset: number): void => {
    if (ref.current !== null) {
      ref.current.scrollLeft += offset;
    }
  }

  const projects: IProject[] = myProjects.filter((project) => !skills.length
    || skills.some((skill) => project.techs.some((tech) => tech === skill)));

  return (
    // <div className="projWrapper">
      <div className="projOutContainer" ref={ ref }>
        <div className="projController">
          <button className=" font-bold text-4xl" onClick={() => scroll(-600)}>{ '<' }</button>
          <button className=" font-bold text-4xl" onClick={() => scroll(600)}>{ '>' }</button>
        </div>
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
    // </div>
  );
}
 
export default ShowList;