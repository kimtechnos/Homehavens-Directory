import "./assets/globals.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contactus from "./pages/Contactus/Contactus";
import Signupage from "./pages/signup/Signupage";
import LoginPage from "./pages/login/LoginPage";
import Footer from "./componenents/Footer/Footer"
import Reviews from "./componenents/Reviewform/Reviews";
import { AuthProvider } from "./componenents/AuthContext";


import Header from "./componenents/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Signupage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
