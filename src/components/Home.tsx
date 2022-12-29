import React, { FunctionComponent } from "react";
import Nav from "./Nav";

interface HomeProps {}
 
const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="flex h-screen w-full items-center justify-around bg-black">
      <Nav />
      <main className="rounded-xl flex min-h-max w-4/5 min-w-min h-full text-white border-white border-2 items-center justify-center flex-col">
        <h1 className="">
          Wellcome
        </h1>
      </main>
    </div>
  );
}
 
export default Home;