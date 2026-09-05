import React, { useState } from "react";
import LoadingScreen from "./components/Animation/loading";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Animation/highLight";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/project";
import Journey from "./components/exprenice";
import Contact from "./components/contact";
import Footer from "./components/Fotter";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Journey/>
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
