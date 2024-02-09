import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Info from '../components/Info';
import Quote from '../components/Quote';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <Quote />
      <Projects />
    </>
  )
}

export default Home