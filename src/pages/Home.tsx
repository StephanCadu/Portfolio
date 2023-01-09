import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import TypeWriterEffect from 'react-typewriter-effect';

interface HomeProps {}
 
const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
      
      <main className="mainContainer">
        <h1 className="homeText1">
          Hi, I'm <span className="text-green-300">Eduardo Stephan</span>,
        </h1>
        
        <h1 className="homeText2">
          <span className="mr-5">I'm a</span>
          <span>
            <TypeWriterEffect
            startDelay={300}
            cursorColor="#76D398"
            multiText={["Web Developer", "Student", "Programmer"]}
            typeSpeed={100}
            multiTextLoop />
          </span>.
        </h1>
        
        <Link to="/projects">
          <button className="rounded-md border-2 border-green-400 bg-gray-800 p-3 text-green-400 hover:bg-green-300 hover:text-gray-800 transition-colors mt-20">SEE MY WORK</button>
        </Link>
      </main>
    </div>
  );
}
 
export default Home;