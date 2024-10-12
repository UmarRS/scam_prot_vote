import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; // Make sure the path is correct
import CurrentWebsites from "currentwebsites";
import AddWebsitePage from "addwebsite";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/currentsites" element={<CurrentWebsites />} />
          <Route path="/addwebsite" element={<AddWebsitePage />} />
          <Route path="/" element={<CurrentWebsites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
