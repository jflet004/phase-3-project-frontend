import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import ProgramList from "./components/ProgramList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/students" element={ <StudentList /> } />
          <Route exact path="/programs" element={ <ProgramList /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
