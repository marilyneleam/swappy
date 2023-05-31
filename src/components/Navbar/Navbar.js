import React, { useState } from "react";

import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo"></img>
        </Link>
		
        <input
          className="search"
          type="text"
          placeholder="Non fonctionnel"
          onChange={handleChange}
          value={searchInput}
        />
      </div>

      <div className="right">
        <Link to="/register">
          <button className="btn sign">S'inscrire</button>
        </Link>
        <Link to="/login">
          <button className="btn log">Se connecter</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
