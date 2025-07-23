import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundOverlay from './components/BackgroundOverlay';
import GalleryPage from './pages/Gallery';

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url('/flag-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="min-h-screen font-sans text-parchment"
    >
      <BackgroundOverlay />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;