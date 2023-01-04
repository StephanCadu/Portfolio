import React, { FunctionComponent } from "react";
import Nav from "./Nav";

interface ProjectsProps {}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
    </div>
  );
}
 
export default Projects;