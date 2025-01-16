import React from "react";

import logo from '../assets/logo.png';

export default function Navbar({ scrollToSection }) {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm"
            style={{
                backgroundColor: "#f8f9fa",
                padding: "10px 20px",
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
            }}
        >
            <div className="container-fluid">
                {/* Icon sosial di kiri */}
                <div
                    className="icon-sosial d-flex"
                    style={{  padding: "10px", gap: "15px", alignItems: "center",}}
                >
                    <i
                        className="fa-brands fa-twitter"
                        style={{ color: "#A9C46C", fontSize: "20px" }}
                    ></i>
                    <i
                        className="fa-brands fa-square-facebook"
                        style={{ color: "#A9C46C", fontSize: "20px" }}
                    ></i>
                    <i
                        className="fa-brands fa-linkedin"
                        style={{ color: "#A9C46C", fontSize: "20px" }}
                    ></i>
                </div>

                {/* Logo di tengah */}
                <div
                    className="navbar-logo"
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: "100px",
                            objectFit: "contain",
                            
                        }}
                    />
                </div>

                {/* Menu navigasi di kanan */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarExample">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                style={{ background: "none", border: "none", color: "#A9C46C" }}
                                onClick={() => scrollToSection("home")}
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                style={{ background: "none", border: "none", color: "#A9C46C" }}
                                onClick={() => scrollToSection("about")}
                            >
                                About
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                style={{ background: "none", border: "none", color: "#A9C46C" }}
                                onClick={() => scrollToSection("service")}
                            >
                                Service
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                style={{ background: "none", border: "none", color: "#A9C46C" }}
                                onClick={() => scrollToSection("product")}
                            >
                                Product
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                style={{ background: "none", border: "none", color: "#A9C46C" }}
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
