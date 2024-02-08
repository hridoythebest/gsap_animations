import { useState } from "react";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Places from "./components/Places";
function App() {
  return (
    <div className="bg-[#090614] space-y-20">
      <Hero />
      <Discover />
      <Places />
    </div>
  );
}

export default App;
