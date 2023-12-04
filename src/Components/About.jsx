import React from "react";

import image from "../images/jigar-panchal.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "AI student with a mix of experience in data science and machine learning. Seeking for internship or job opportunities to foster my professional growth";


const skillsList = [
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Robotics",
  "Graphic design",
  "UI/UX",
];


const detailOrQuote =
  "I like to make data breathe and come alive.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
