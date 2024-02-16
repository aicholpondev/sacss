import React from 'react';
import logo from'../../assests/img/logo.svg'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";





const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__general">
                        <div className="footer__one">
                            <img src={logo} alt="img"/>
                            <h3>Artificial Intelligence</h3>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>

                            <a href="#"><MdOutlineEmail />Company@gmail.com.com</a>
                            <a href="#"><FiPhoneCall />
                                Phone: (064) 332-1233</a>
                            <a href="#"><CiLocationOn />
                                450 Wall Street, USA, New York</a>
                        </div>
                        <div className="footer__two">
                            <h1>INFORMATION</h1>
                            <a href="#">New Collection</a>
                            <a href="#">About Store</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Latest News</a>
                            <a href="#">Our Sitemap</a>
                            <a href="#">Orders History</a>
                        </div>
                        <div className="footer__two">
                            <h1>FOOTER MENU</h1>
                            <a href="#">Instagram profile</a>
                            <a href="#">New Collection</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Latest News</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Purchase Theme</a>
                        </div>
                        <div className="footer__two">
                            <h1>USEFUL LINKS</h1>
                            <a href="#">New Collection</a>
                            <a href="#">About Store</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Latest News</a>
                            <a href="#">Our Sitemap</a>
                            <a href="#">Orders History</a>
                        </div>
                        <div className="footer__one">
                            <h1>ABOUT THE STORE</h1>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                             <h2>www.company.com</h2>
                            <div className="footer__icons">
                                <a href="#"><FiFacebook /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FiTwitter /></a>
                                <a href="#"><FiLinkedin /></a>
                                <a href="#"><LuYoutube /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Footer;