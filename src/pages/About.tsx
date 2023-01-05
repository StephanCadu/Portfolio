import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";

interface AboutProps {}
 
const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
    </div>
  );
}
 
export default About;