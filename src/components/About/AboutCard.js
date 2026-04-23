import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Riri (Feng Danrui)</span>{" "}
            from <span className="purple">China</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Marketing Specialist</span>, focusing on B2B marketing, brand promotion, and data analysis.
            <br />
            I hold a Bachelor’s degree in{" "}
            <span className="purple">Advertising</span> from{" "}
            <span className="purple">Chung-Ang University, South Korea</span>.
            <br />
            I’m currently preparing to pursue a{" "}
            <span className="purple">Master’s in Computer Science</span> at{" "}
            <span className="purple">Stevens Institute of Technology</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out & Fitness 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Storytelling 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and keep exploring."
          </p>
          <footer className="blockquote-footer">Riri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;