import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
