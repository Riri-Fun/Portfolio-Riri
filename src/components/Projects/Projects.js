import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import design from "../../Assets/Projects/设计.jpg";
import video from "../../Assets/Projects/视频.jpg";
import article from "../../Assets/Projects/文章.jpg";
import productManual from "../../Assets/Projects/产品手册.jpg";


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
              imgPath={productManual}
              isBlog={false}
              title="Product Manual"
              description="This product manual is designed to provide clear and comprehensive guidance on product usage, features, and specifications. It focuses on delivering user-friendly instructions while maintaining technical accuracy, helping users quickly understand and effectively utilize the product."

            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={article}
              isBlog={false}
              title="Article"
              description="These articles reflect my ability to research, analyze, and communicate ideas effectively. Covering topics such as industry trends, product insights, and marketing strategies, they are written to engage readers while delivering valuable and structured information."
            
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="Design"
              description="These design projects highlight my ability to create visually appealing and user-friendly interfaces. Each project involves careful consideration of color schemes, typography, and layout to ensure a cohesive and effective design solution."
            
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video"
              description="These videos showcase my skills in content planning, storytelling, and visual communication. From concept development to execution, each video is created to deliver engaging and informative content that enhances audience understanding and interaction."
  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
