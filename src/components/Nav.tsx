import { GitHub, LinkedIn } from '@mui/icons-material';
import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  const location = useLocation();

  const isThisLocation = (local: string): boolean => location.pathname.includes(local);

  return (
    <nav className="navigation">
      
      <Link to="/" className="logoLink">
        <h1 className="text-3xl text-center font-bold text-green-400">Cadu Stephan</h1>
        <h1 className="text-md text-center">web developer</h1>
      </Link>

      <section className="links">
        <Link to="/projects" className={`navLink ${isThisLocation('projects') ? 'text-green-400 scale-110' : ''}`}>Projects</Link>
        <Link to="/about" className={`navLink ${isThisLocation('about') ? 'text-green-400 scale-110' : ''}`}>About</Link>
        <Link to="/contact" className={`navLink ${isThisLocation('contact') ? 'text-green-400 scale-110' : ''}`}>Contact</Link>
        <Link to="/" className={`navLink ${location.pathname === '/' ? 'text-green-400' : ''}`}>Home</Link>
      </section>

      <section className="contactLinks">
        <a href="https://github.com/StephanCadu" target="_blank" rel="noreferrer">
          <GitHub className="m-2 hover:text-green-400 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-stephan-851b91233/" target="_blank" rel="noreferrer">
          <LinkedIn className="m-2 hover:text-green-400 hover:scale-110" />
        </a>
      </section>
    </nav>
  );
}
 
export default Nav;