import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>template-front</h1>
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
