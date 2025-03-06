import React, { useEffect, useState } from "react";
import "./hero.css";

import Image1 from "./../assets/my1.webp";
import Image2 from "./../assets/my2.webp";

import Download from "./../assets/download.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const DownloadCV = () => {
    const cvUrl = require("./../assets/sasith.pdf"); // Correct path for Webpack to bundle the file

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sasith_Duleepa_CV.pdf"; // Set the file name here

    // Append the link, trigger the download, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-page-container">
      <img
        alt=""
        src={currentSlide === 0 ? Image1 : Image2}
        className={currentSlide === 0 ? "hero-slide1" : "hero-slide2"}
      />

      <div className="hero-text-container">
        {currentSlide === 0 ? (
          <div className="hero-slide1-text">
            <h1>
              Hi, I'm <span className="hero-name">Sasith</span>
            </h1>
            <h2>Full-Stack Developer</h2>
          </div>
        ) : (
          <div className="hero-slide2-text">
            <h1>Hello!</h1>
            <h2>Welcome to My Portfolio</h2>
          </div>
        )}

        <button className="cv-btn" onClick={DownloadCV}>
          <p className="cv-btn-text">DOWNLOAD CV</p>
          <img src={Download} alt="Download" className="download-icon" />
        </button>
      </div>
    </div>
  );
}
