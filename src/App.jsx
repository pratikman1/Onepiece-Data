import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";
import LatestSection from "./components/LatestSection/LatestSection";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Character from "./components/Character/Character";
import Footer from "./components/Footer/Footer";
import DevilFruits from "./components/DevilFruits/DevilFruits";
import WorldMap from "./components/WorldMap/WorldMap";
import Episodes from "./components/Episodes/Episodes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/devil-fruit" element={<DevilFruits />} />
        <Route path="/world-map" element={<WorldMap />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
