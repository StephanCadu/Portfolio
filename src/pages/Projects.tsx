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
        <ShowList />

        <Skills />
      </main>
    </div>
  );
}
 
export default Projects;