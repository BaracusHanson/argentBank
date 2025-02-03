import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil.jsx";
import "./designs/css/main.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import SignIn from "./page/SignIn.jsx";
import Profil from "./page/Profil.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<Profil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
