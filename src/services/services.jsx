import React from "react";
import "./services.css";
import Card2 from "../components/card2/card2";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Import the hook

import Icon1 from "../assets/backend.webp";
import Icon2 from "../assets/dns.webp";
import Icon3 from "../assets/iot-solution.webp";
import Icon4 from "../assets/industrial.webp";

export default function Services() {
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={elementRef}
      className={`service-container section-entry ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <p className="header-p1">What I do ?</p>
      <p className="header-p2">
        Here are some of my <br /> expertise
      </p>
      <div className="service-card-container">
        <Card2
          icon={Icon1}
          title="SYSTEM DEVELOPMENT"
          content="Building cloud-based systems with a focus on meeting all requirements.
      "
        />
        <Card2
          icon={Icon2}
          title="WEB SITE DEVELOPMENT"
          content="Creating responsive websites and web applications."
        />
        <Card2
          icon={Icon3}
          title="IOT SOLUTIONS"
          content="Developing IoT solutions for connected devices and systems."
        />
        <Card2
          icon={Icon4}
          title="PLC Programming"
          content="Developing and maintaining Industrial Automation systems."
        />
      </div>
    </div>
  );
}
