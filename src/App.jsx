// App.jsx
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sun from "./pages/sun"; // Import Sun component
import sunData from "./sunData"; // Corrected import statement


// const imagesData = [
//   { id: 1, category: "Mountains", src: "mountain1.jpg", alt: "Mountain Image 1" },
//   { id: 2, category: "Mountains", src: "mountain2.jpg", alt: "Mountain Image 2" },
//   { id: 3, category: "Beach", src: "beach1.jpg", alt: "Beach Image 1" },
//   { id: 4, category: "Beach", src: "beach2.jpg", alt: "Beach Image 2" }
// ];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <h1>Photo Gallery</h1>
      <div className="categories">
        <button onClick={() => handleCategoryClick("Sun")}>Sun</button>
        <button onClick={() => handleCategoryClick("Mountains")}>Mountains</button>
        <button onClick={() => handleCategoryClick("Beach")}>Beach</button>
      </div>
      {selectedCategory === "Sun" && <Sun images={sunData} />} {/* Pass Sun data as props */}
    </>
  );
}

export default App;
