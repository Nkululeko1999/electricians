import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Info from '../components/Info';
import Quote from '../components/Quote';
import Projects from '../components/Projects';
import FadeLoader from "react-spinners/FadeLoader";
import Footer from '../components/Footer';

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="spinner-container">
          <FadeLoader
            color={"#36d7b7"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <Info />
          <Quote />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
