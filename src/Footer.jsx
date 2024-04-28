import React from "react";
import "./Footer.css";

function Footer() {
    const youtubeURL = "https://www.youtube.com/@StarstreamVisualJourneys/";
    const instagramURL = "https://www.instagram.com/blogs_master/";

    return (
        <footer className="w-100 foot text-center">
            <p className="peraa">©2024 VishvVamja - Empowering your future</p>
            <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube btninsta" style={{fontSize: 48}}></i>
            </a>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram btninsta" style={{fontSize: 48}}></i>
            </a>
        </footer>
    );
}

export default Footer;
