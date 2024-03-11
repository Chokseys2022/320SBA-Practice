// Header.js
import React, { useState } from "react";

function Header() {
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update the selected option when it changes
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Log In</a></li>
          <li className="dropdown">
            <select value={selectedOption} onChange={handleOptionChange} className="dropbtn">
              <option value="">View Gallery</option>
              <option value="Sun">Sun</option>
              <option value="Mountains">Mountains</option>
              <option value="Beach">Beach</option>
            </select>
          </li>
          <li><a href="#">Order</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
