import React from "react";
import image from "../images/high-angle-measuring-tools-desk-still-life.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Parasite Image Classifier",
    description:
      "(CNN) deep learning model for classifying medical images of parasites into various species. The model is trained to recognize and differentiate between different parasite species commonly found in medical and biological imaging data.",
    url: "https://github.com/kershrita/Parasite-Image-Classifier",
  },
  {
    title: "Predicting Market Costs",
    description:
      "Building regression model to accurately predict the costs of products within a diverse market landscape.",
    url: "https://github.com/kershrita/Predicting-Market-Costs",
  },
  {
    title: "Human Activity Recognition",
    description:
      "A system capable of recognizing human activities based on sensor data.",
    url: "https://github.com/kershrita/Human-Activity-Recognition",
  },
  {
    title: "Biometric Attendance System",
    description:
      "Biometric attendance system that register and track attendance using fingerprints, allowing administrators to manage attendance records easily.",
    url: "https://github.com/kershrita/Biometric-Attendance-System",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
