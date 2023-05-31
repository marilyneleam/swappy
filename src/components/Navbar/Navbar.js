import React, { useState } from 'react'

import Logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div className="navbar">
            <div className="left">
                <img className="logo" src={Logo} alt="logo"></img>

                <input
                    className="search"
                    type="text"
                    placeholder="Recherche"
                    onChange={handleChange}
                    value={searchInput}
                />
            </div>

            <div className="right">
                <button className="btn sign">S'inscrire</button>
                <button className="btn log">Se connecter</button>
            </div>
        </div>
    )
}

export default Navbar
