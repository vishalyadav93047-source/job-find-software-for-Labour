import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Jobs from "./Pages/Jobs/Jobs";
import Contact from "./Pages/Contact/Contact";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import JobFinder from "./Components/Jobfinder/JobFinder";
import Alljobs from "./Components/Alljobs/Alljobs";
import Working from "./Components/Workingpage/Working";
import AlljobsDetails from "./Components/AlljobsDetails/AlljobsDetails";

function App() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/jobfinder" element={<JobFinder />} />
      <Route path="/alljobs" element={<Alljobs />} />

      {/* Dynamic Route */}
      <Route path="/jobs/:id" element={<AlljobsDetails />} />

      <Route path="/working" element={<Working />} />

    </Routes>

  );
}

export default App;