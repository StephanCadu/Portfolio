import React, { FunctionComponent } from 'react';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  return (
    <nav className="flex h-full w-1/6 min-w-min max-w-max border-white border-2">
      {/* <h2 className="text-white">
        Eduardo Stephan
      </h2> */}
      <div className="logo"></div>
    </nav>
  );
}
 
export default Nav;