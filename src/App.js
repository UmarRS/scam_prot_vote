import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; // Make sure the path is correct
import CurrentWebsites from "currentwebsites";
import AddWebsitePage from "addwebsite";
import Support from "support";
import ScamPreventionGuide from "scampreventionguide";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/currentsites" element={<CurrentWebsites />} />
          <Route path="/addwebsite" element={<AddWebsitePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/education" element={<ScamPreventionGuide />} />
          <Route path="/" element={<CurrentWebsites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
