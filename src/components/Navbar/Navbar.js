import React, { useEffect, useState } from "react";
import axios from "axios";

import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("userId"));
  }, []);

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
          value={searchInput}
        />
      </div>
      <div className="right">
        {user != "" ? (
          <>
            <Link to="/register">
              <button className="btn sign">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="btn log">Se connecter</button>
            </Link>
          </>
        ) : (
          localStorage.getItem("userId") && (
            <>
              <Link to="/addproduct">
                <button className="btn add">Ajouter une annonce</button>
              </Link>
              <Link to="/items">
                <button className="btn items">Mes annonces</button>
              </Link>
              <Link to="/login">
                <button className="btn log">Se déconnecter</button>
              </Link>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
