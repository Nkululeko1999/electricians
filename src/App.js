import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from './pages/Services';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <ToastContainer className="custom-toast-container" />
    </BrowserRouter>
  );
}

export default App;
