"use client";
import About from "./about/page";
import HomeContent from "./components/HomeContent";
import Contact from "./contact/page";
import Watches from "./watches/page";

export default function Home() {
  return (
   <div>
    <HomeContent />
    <About />
    <Watches />
    <Contact />
    
   </div>
  )
};
