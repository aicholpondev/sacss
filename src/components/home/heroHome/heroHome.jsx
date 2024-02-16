import React from 'react';
import { FaPlay } from "react-icons/fa6";
import heroHome from '../../../assests/img/heroHome.png'
import iconOne from '../../../assests/img/heroOne.svg'
import iconTwo from '../../../assests/img/heroTwo.svg'
import iconThree from '../../../assests/img/heroThree.svg'
import iconFour from '../../../assests/img/heroFour.svg'

const HeroHome = () => {
    return (
        <section id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero__block">

                            <div className="hero__block-text">
                                <h3>Next genaretion platform</h3>
                                <h1>Artificial intelligence & Syber security</h1>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <div>
                                    <button>Get Started</button>
                                    <button><FaPlay />
                                        Watch Video</button>
                                </div>
                            </div>
                            <img src={heroHome} alt="img"/>
                        </div>

                        <div className="hero__icons">
                            <img src={iconOne} alt="img"/>
                            <img src={iconTwo} alt="img"/>
                                <img src={iconThree} alt="img"/>
                            <img src={iconFour} alt="img"/>
                        </div>

                    </div>
                </div>

        </section >
    );
};

export default HeroHome;