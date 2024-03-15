// Sun.jsx
import React from "react";
import sunData from "../sunData"; // Import Sun data

const Sun = () => {
  return (
    <div className="image-container">
      {sunData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={sunData.png} alt={image.alt} />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Sun;
