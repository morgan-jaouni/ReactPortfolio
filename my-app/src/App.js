import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/Home">Home</Link>
      <Link to="/About">About Me</Link>
      </nav>
      <Index></Index>
    </div>
  );
}

export default App;
