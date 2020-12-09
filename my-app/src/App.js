import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <nav class="navbar">
      <Link class="navlinks" to="/">Home</Link>
      <Link class="navlinks" to="/Projects">Projects</Link>
      </nav>
      <Index></Index>
    </div>
  );
}

export default App;
