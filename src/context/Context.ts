import { createContext } from "react";

interface ContextState {
  skills: string[]
  setSkills(newSkills: string[]): void
}

const Context = createContext({} as ContextState);

export default Context;