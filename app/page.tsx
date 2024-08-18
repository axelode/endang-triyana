'use client'

import Footer from "./component/footer";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Skills from "./component/skills";
import Summary from "./component/summary";

export default function Home() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="">
        <Hero />
        <Summary />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
