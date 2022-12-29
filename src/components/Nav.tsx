import { GitHub, LinkedIn } from '@mui/icons-material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  return (
    <nav className="text-white flex flex-col h-full w-1/6 max-w-max border-r-green-300 border-r-2 min-w-fit items-center justify-around left-0 shadow-md shadow-green-300">
      <section className="w-24">
        <h2 className="flex flex-col items-center justify-around text-green-300 h-10 font-mono font-bold text-center">
          Eduardo Stephan
          {/* <span className="text-green-300">Stephan</span> */}
        </h2>
      </section>

      <section className="flex flex-col justify-between items-center h-36 text-green-100 font-medium">
        <Link to="/projects" className=" w-11/12 hover:text-green-400 border-b-2 hover:border-b-green-400 border-b-black">Projects</Link>
        <Link to="/about" className="hover:text-green-400 border-b-2 hover:border-b-green-400 border-b-black">About</Link>
        <Link to="/contact" className="hover:text-green-400 border-b-2 hover:border-b-green-400 border-b-black">Contact</Link>
        <Link to="/" className="hover:text-green-400 border-b-2 hover:border-b-green-400 border-b-black">Home</Link>
      </section>

      <section className="flex w-full items-center justify-center text-green-100">
        <a href="https://www.linkedin.com/in/carlos-eduardo-stephan-851b91233/" target="_blank" rel="noreferrer">
          <GitHub className="m-2 hover:text-green-400" />
        </a>
        <a href="https://github.com/StephanCadu" target="_blank" rel="noreferrer">
          <LinkedIn className="m-2 hover:text-green-400" />
        </a>
      </section>
    </nav>
  );
}
 
export default Nav;