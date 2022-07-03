import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jeet Mondal </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />I am a Under-Graduate pursuing B.Tech in Computing Science and Engineering in KIIT University.
            <br />
            <br />
            Apart from coding, things that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no greater thing you can do with your life and your work than follow your passions -in a way that serves the world and you!"{" "}
          </p>
          <footer className="blockquote-footer">Richard Branson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
