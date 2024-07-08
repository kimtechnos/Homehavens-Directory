import "./assets/globals.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contactus from "./pages/Contactus/Contactus";
import Signupage from "./pages/signup/Signupage";
import LoginPage from "./pages/login/LoginPage";
import Footer from "./componenents/Footer/Footer"

import Header from "./componenents/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/singup" element={<Signupage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
