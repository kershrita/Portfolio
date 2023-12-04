import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ color: "#333", textAlign: "center" }}>Education</h2>
      <div className="content">
        <div className="education">
          <div className="education__item" style={{ marginBottom: "1rem", padding: "2rem" }}>
            <h3 style={{ color: "#555" }}>Kafrelsheikh University, Kafr El Sheikh</h3>
            <p>
              <strong style={{ fontSize: "1.2rem" }}>Artificial Intelligence</strong>
            </p>
            <p style={{ fontStyle: "italic" }}>2021 - present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
