import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import Mystyle from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={`bg-success text-white pt-5 pb-4 ${Mystyle.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="fs-4">Zwigato</h5>
                        <p className="mt-3">
                            Your one-stop destination for the best food delivery experience.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fs-4">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <BsFillTelephoneFill /> <span className="ms-2">+123 456 7890</span>
                            </li>
                            <li>
                                <BsFillEnvelopeFill /> <span className="ms-2">support@zwigato.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fs-4">Follow Us</h5>
                        <div className="d-flex mt-3">
                            <a href="https://facebook.com" className="text-white mx-2">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-white mx-2">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-white mx-2">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-white mx-2">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">&copy; 2024 Zwigato. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
