import Header from '../components/Header';
import Info from '../components/Info';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home() {

  return (
    <div className="home-container">
      <Header />
      <Info />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
