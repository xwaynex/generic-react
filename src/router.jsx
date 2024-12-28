import { Routes, Route } from "react-router-dom";
import About from "./pages/public/About";
import Expertise from "./pages/public/Expertise";
import Contacts from "./pages/public/Contacts";
import Home from "./pages/public/Home";
import GalleryAwards from "./pages/public/GalleryAwards";
import Login from "./pages/public/Login";

const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/gallery" element={<GalleryAwards />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
