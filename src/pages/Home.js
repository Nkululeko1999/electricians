import Header from '../components/Header';
import Info from '../components/Info';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import FAQ from '../components/faq/FAQ';

function Home() {

  return (
    <div className="home-container">
      <Header />
      <Info />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
