import { GitHub, LinkedIn } from '@mui/icons-material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  return (
    <nav className="text-white flex flex-col h-full w-1/6 max-w-max border-white border-2 min-w-fit items-center justify-around rounded-xl">
      <section>
        <h2>
          Eduardo Stephan
        </h2>
      </section>

      <section className="flex flex-col justify-between items-center h-28">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </section>

      <section className="flex w-full items-center justify-center">
        <a href="https://www.linkedin.com/in/carlos-eduardo-stephan-851b91233/" target="_blank" rel="noreferrer">
          <GitHub className="m-2" />
        </a>
        <a href="https://github.com/StephanCadu" target="_blank" rel="noreferrer">
          <LinkedIn className="m-2" />
        </a>
      </section>
    </nav>
  );
}
 
export default Nav;