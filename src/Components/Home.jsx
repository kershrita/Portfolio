
import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/christopher-burns.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  const handleArrowClick = () => {
    const section = document.getElementById("about");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "8rem auto",
          textAlign: "center",
        }}
      >
        <div>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img
          id="arrow"
          className="arrow"
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
          alt={imageAltText}
          onClick={handleArrowClick}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;