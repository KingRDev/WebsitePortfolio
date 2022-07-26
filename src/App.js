import React from 'react'
import Layout from "./components/Layout/layout";
import About from "./components/Contents/About/about";
import Achievements from "./components/Contents/Achievements/achievements";
import Projects from "./components/Contents/Projects/projects";
import Skills from "./components/Contents/Skills/skills";
import Hero from './components/Contents/Hero/hero';

export default function App() {
  return (
    <Layout>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
    </Layout>
  );
}
