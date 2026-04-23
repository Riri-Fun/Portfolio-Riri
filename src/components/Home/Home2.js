import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Marketing Specialist transitioning into a Software Engineer,
              with a strong passion for combining business thinking with
              technical solutions.
              <br />
              <br />
              With experience in B2B marketing, I have worked on
              <i>
                <b className="purple">
                  {" "}
                  brand strategy, market research, and data analysis{" "}
                </b>
              </i>
              — helping companies better understand their customers and improve
              decision-making.
              <br />
              <br />
              I was also responsible for developing and optimizing our
              <i>
                <b className="purple">
                  {" "}
                  company website and CRM system{" "}
                </b>
              </i>
              , which sparked my interest in how technology powers business
              growth.
              <br />
              <br />
              Currently, I am building my skills in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, and web development{" "}
                </b>
              </i>
              , aiming to create scalable digital products and user-friendly
              experiences.
              <br />
              <br />
              I’m especially interested in
              <i>
                <b className="purple">
                  {" "}
                  web applications, AI-driven marketing tools,{" "}
                </b>
              </i>
              and leveraging technology to solve real-world business problems.
              <br />
              <br />
              My goal is to become a developer who not only writes code, but also
              understands users, markets, and product strategy.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;