import React from 'react';
import Nav from './components/Nav';

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-around bg-black">
      <Nav />
      <main className="flex min-h-max w-4/5 min-w-min h-full text-white border-white border-2">
        <h1 className="text-5xl font-bold underline">
          Wellcome
        </h1>
      </main>
    </div>
  );
}

export default App;
