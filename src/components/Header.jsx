// Header.js
import React, { useState } from "react";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Log In</a></li>
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#" className="dropbtn">View Gallery</a>
            {dropdownVisible && (
              <div className="dropdown-content">
                <a href="#">Sun</a>
                <a href="#">Mountains</a>
                <a href="#">Beach</a>
              </div>
            )}
          </li>
          <li><a href="#">Order</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
