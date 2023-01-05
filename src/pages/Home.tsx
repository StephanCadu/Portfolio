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
        <h1 className=" text-7xl text-center m-2">
          Hi, I'm <span className="text-green-300">Eduardo Stephan</span>,
        </h1>
        
        <h1 className="text-7xl text-center m-2 flex w-full items-center justify-center">
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
          <button className="rounded-md border-2 border-green-400 bg-black p-3 text-green-400 hover:bg-green-300 hover:text-black transition-colors mt-20">SEE MY WORK</button>
        </Link>
      </main>
    </div>
  );
}
 
export default Home;