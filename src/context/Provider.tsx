import React, { ReactNode, useState } from 'react';
import Context from './Context';

interface Props {
  children: ReactNode
}

const Provider: React.FunctionComponent<Props> = ({ children }) => {
  const [skills, setSkills] = useState<string[]>([]);

  const context = {
    skills,
    setSkills,
  }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
}

export default Provider;