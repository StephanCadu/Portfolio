import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

interface HomeProps {}
 
const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
      <main className="rounded-xl flex min-h-max w-10/12 min-w-min h-full text-white items-center justify-center flex-col">
        <h1 className=" text-7xl text-center m-2">
          Hi, I'm <span className="text-green-300">Eduardo Stephan</span>,
        </h1>
        <h1 className="text-7xl text-center m-2">
          I'm a Web Developer.
        </h1>
        <Link to="/projects">
          <button className="rounded-md border-2 border-green-400 bg-black p-3 text-green-400 hover:bg-green-300 hover:text-black transition-colors mt-20">SEE MY WORK</button>
        </Link>
      </main>
    </div>
  );
}
 
export default Home;