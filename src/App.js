import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import GenerateQuote from './pages/GenerateQuote';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/quote' element={<GenerateQuote />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
