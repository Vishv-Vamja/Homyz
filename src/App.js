import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Companies from './Companies';
import Residencies from './Residencies';
import Value from './Value';
import Contact from './Contact';
import GetStarted from './GetStarted';
import Footer from './Footer';
import "./App.css";
function App() {
  return (
    <>
    <div className='App'>
    <div>
      <div className='white-gradient' />
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
   
    </>
  );
}

export default App;
