import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";
import './App.css';
const App = () => {
  return (
    <div>
      <Header nombre="Romano Leonel" profesion="Estudiante prog" />
      <Hero />
      <About />
      <Skills />
      <Proyects />
      <Footer />
    </div>
  );
};

export default App;
