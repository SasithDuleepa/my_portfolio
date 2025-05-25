import React, { useEffect, useState } from "react";
import "./hero.css";

import Image1 from "./../assets/my1.webp";
import Image2 from "./../assets/my2.webp";

import Download from "./../assets/download.webp";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateH1, setAnimateH1] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);

  useEffect(() => {
    // Reset animations when slide changes
    setAnimateH1(false);
    setAnimateH2(false);

    // Stagger animations for h1 and h2
    // Using requestAnimationFrame to ensure state reset is processed before starting new timeouts
    requestAnimationFrame(() => {
      setTimeout(() => {
        setAnimateH1(true);
      }, 300); // Start H1 animation shortly after slide image begins to appear
      setTimeout(() => {
        setAnimateH2(true);
      }, 600); // Start H2 animation after H1
    });

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]); // Depend on currentSlide to re-trigger animations

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
          <div className="hero-slide1-text"> {/* This div might not be needed for animation control anymore */}
            <h1 className={animateH1 ? "animate-h1" : ""}>
              Hi, I'm <span className="hero-name">Sasith</span>
            </h1>
            <h2 className={animateH2 ? "animate-h2" : ""}>Full-Stack Developer</h2>
          </div>
        ) : (
          <div className="hero-slide2-text"> {/* This div might not be needed for animation control anymore */}
            <h1 className={animateH1 ? "animate-h1" : ""}>Hello!</h1>
            <h2 className={animateH2 ? "animate-h2" : ""}>Welcome to My Portfolio</h2>
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
