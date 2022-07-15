import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2 style={{ color: "firebrick" }}>About Me</h2>
    <p>lorem20</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
