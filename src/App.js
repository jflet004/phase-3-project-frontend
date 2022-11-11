import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import ProgramList from "./components/ProgramList";
import AddProgram from "./components/AddProgram";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/students" element={ <StudentList /> } />
          <Route path="/students/new" element={ <AddStudent /> } />
          <Route path="/programs" element={ <ProgramList /> } />
          <Route path="/programs/new" element={ <AddProgram /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
