import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';

const page = () => {
  return (
 
  
    
       
    
  
    <>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default page;
