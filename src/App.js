import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home";

import Signup from "./pages/signup";
import Login from "./pages/login";
import FindWorkers from "./pages/findwork";
import PostJob from "./pages/postjob"; 
import CheckJob from "./pages/checkjob";
import About from "./pages/about"; // adjust path if needed


import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
           <Route path="/workers" element={<FindWorkers />} />
           <Route path="/Login" element={<Login />} />
          <Route path="/postjob" element={<PostJob />} />
           <Route path="/checkjob" element={<CheckJob />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
