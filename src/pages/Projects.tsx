import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";
import ShowList from "../components/ShowList";
import Skills from "../components/Skills";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
      
      <main className="projMain">
        <h2 className="projectsTitle">Projects</h2>

        <Skills />

        <ShowList />
      </main>
    </div>
  );
}
 
export default Projects;