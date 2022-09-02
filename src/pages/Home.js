import React from "react";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import Seprator from "../components/Seprator";
import { Skills } from "../components/Skills";

const Home = () => {
  return (
    <div className="w-full lg:max-w-6xl m-auto">
      <Navbar />
      <Hero />
      <Seprator />
      <Skills id="skills" />
      <Seprator />
      <Projects />
      <Seprator />
      <Blogs />
      <Seprator />
      <Education />
      <Seprator />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
