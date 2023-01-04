import React, { FunctionComponent } from "react";
import Nav from "./Nav";

interface AboutProps {}
 
const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
    </div>
  );
}
 
export default About;