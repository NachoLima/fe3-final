import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
