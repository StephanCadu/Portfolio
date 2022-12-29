import React, { FunctionComponent } from "react";
import Nav from "./Nav";

interface HomeProps {}
 
const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
      <main className="rounded-xl flex min-h-max w-10/12 min-w-min h-full text-white border-white border-2 items-center justify-center flex-col">
        <h1 className="">
          Wellcome
        </h1>
      </main>
    </div>
  );
}
 
export default Home;