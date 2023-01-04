import { GitHub, LinkedIn } from '@mui/icons-material';
import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  const location = useLocation();

  const isThisLocation = (local: string): boolean => location.pathname.includes(local);

  return (
    <nav className="text-white flex flex-col h-full w-32 border-r-green-300 border-r-2 min-w-fit items-center justify-around left-0 shadow-lg shadow-green-300">
      <Link to="/" className="h-28 w-28">
        <div className="logo"></div>
      </Link>

      <section className="flex flex-col justify-between items-center h-36 font-medium">
        <Link to="/projects" className={`navLink ${isThisLocation('projects') ? 'text-green-400' : ''}`}>Projects</Link>
        <Link to="/about" className={`navLink ${isThisLocation('about') ? 'text-green-400' : ''}`}>About</Link>
        <Link to="/contact" className={`navLink ${isThisLocation('contact') ? 'text-green-400' : ''}`}>Contact</Link>
        <Link to="/" className={`navLink ${location.pathname === '/' ? 'text-green-400' : ''}`}>Home</Link>
      </section>

      <section className="flex w-full items-center justify-center">
        <a href="https://www.linkedin.com/in/carlos-eduardo-stephan-851b91233/" target="_blank" rel="noreferrer">
          <GitHub className="m-2 hover:text-green-400 hover:scale-110" />
        </a>
        <a href="https://github.com/StephanCadu" target="_blank" rel="noreferrer">
          <LinkedIn className="m-2 hover:text-green-400 hover:scale-110" />
        </a>
      </section>
    </nav>
  );
}
 
export default Nav;