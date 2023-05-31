import React from 'react'
import HomeImg from '../../assets/home.jpg'
import MapImg from '../../assets/map.png'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="back">
                <img className="background" src={HomeImg} alt="home"></img>
            </div>
            <div className="front">
                <div className="front-left">
                    <h1 className="brand">Swappy</h1>
                    <h2 className="tag">Makes you Happy !</h2>
                    <p className="intro">
                        Dans un monde où la durabilité et la consommation
                        responsable sont devenues des préoccupations majeures,
                        de nouvelles approches économiques émergent pour
                        repenser nos modes de consommation. L'une de ces
                        approches prometteuses est le troc, qui permet aux
                        individus d'échanger des biens et des services sans
                        passer par la monnaie traditionnelle.
                    </p>

                    <div className="front-btn">
                        <button className="deposit">Déposer une annonce</button>
                            <button className="start">Voir les articles</button>
                    </div>
                </div>
                <div className="front-right">
                    <img src={MapImg} alt="plan" className="plan"></img>
                </div>
            </div>
        </div>
    )
}
export default Home
