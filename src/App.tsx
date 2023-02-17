import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ABout from "./pages/ABout";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog/Blog";
import ReadArticle from "./pages/Blog/ReadArticle";
import SearchImages from "./components/imagelist/SearchImages"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      {/* // public */}
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ABout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ReadArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/searchImages" element={<SearchImages />}/>
        {/* // private */}
        <Route path="/dashboard" element={isLoggedIn? <Dashboard />: <Navigate to="/login"/>} />
        <Route path="/payment" element={isLoggedIn? <PaymentPage />: <Navigate to="/login"/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
