import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import ScrollUp from './components/ScrollUp/ScrollUp';

const App = () =>{
  return(
    <>
    <Header />

    <main className='main'>
      <Home/>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>

    <ScrollUp/>
    <Footer />
    </>
  )
}

export default App;
