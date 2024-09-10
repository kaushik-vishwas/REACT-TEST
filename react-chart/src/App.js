import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Graph from "./Graph";
import GraphDetails from "./GraphDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/graph-details" element={<GraphDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
