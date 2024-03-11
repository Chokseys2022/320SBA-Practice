// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Photo Gallery</h1>
      <div className="image-container">
        <div className="image-item">
          <img src="sun.png" alt="Image 1" />
          <p>Click here for images</p>
        </div>
        <div className="image-item">
          <img src="mts.jpg" alt="Image 2" />
          <p>Click here for images</p>
        </div>
        <div className="image-item">
          <img src="beach.jpg" alt="Image 3" />
          <p>Click here for images</p>
        </div>
      </div>
    </>
  );
}

export default App;
