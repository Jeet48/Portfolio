import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adblock from "../../Assets/Projects/adblock.png";
import ann from "../../Assets/Projects/ann.png";
import covid19 from "../../Assets/Projects/covid.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import downloads from "../../Assets/Projects/download.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Talk With Jeet"
              description="A simple interactive Chat app created using html, css ,javascript, react and react-dom having a login authentication page using firebase"
              ghLink="https://github.com/Jeet48/Talk-With-Jeet"
              demoLink="https://talk-with-jeet.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={downloads}
              isBlog={false}
              title="Netflix-Clone"
              description="A netflix ui created using REST API, Next.js, Typescript,Tailwind"
              ghLink="https://github.com/Jeet48/Netflix-clone"
              demoLink="https://netflix-clone-iota-six.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="Covid-19 Tracker App"
              description="A app that tracks the number of covid 19 cases all over the world and shows the number of active Covid-19 cases,the recovered amount and total number of deaths country wise"
              ghLink="https://github.com/Jeet48/covid_19_tracker"
              demoLink="https://polite-daifuku-7dde64.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adblock}
              isBlog={false}
              title="ad-blocker"
              description="A simple ad blocker extension being implemented using JavaScript"
              ghLink="https://github.com/Jeet48/ad-blocker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ann}
              isBlog={false}
              title="Self_Driving_Car"
              description="A simple neural network is created a neural network using JavaScript with no libraries used . It also implements how Artificial neural networks work with real life networks being compared with our brain.Also car driving mechanics,enviroment is implemented ,also simulated some sensors and detected collisions and how to make a car control itself"
              ghLink="https://github.com/Jeet48/self_driving_car"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
