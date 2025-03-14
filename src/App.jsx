import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import AboutPage from "./pages/AboutPage";
import ExpertiesPage from "./pages/ExpertiesPage";
import Registrations from "./pages/Registrations";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from './components/Footer'
import RegistrationPage from "./pages/RegistrationPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experties" element={<ExpertiesPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
