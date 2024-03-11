import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="image-container">
        <img src="sun.png" alt="Image 1" />
        <img src="mts.jpg" alt="Image 2" />
        <img src="beach.jpg" alt="Image 3" />
      </div>
    </>
  );
}

export default App;
