import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg1,
    },
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg2,
    },
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg3,
    },
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg1,
    },
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg2,
    },
    {
      title: "Ambani's Wedding",
      description: "7th March 2024, Goa",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Performances & Collaborations</h2>
                  <p>
                    Our musical journey has been filled with exciting
                    performances and collaborations. From live concerts to
                    studio sessions, we've had the privilege of working with
                    talented artists and performing at diverse venues. Whether
                    it’s an intimate acoustic set or a high-energy stage
                    performance, every moment has been a chance to connect with
                    the audience and push our creative boundaries. We continue
                    to explore new sounds and experiences, bringing our passion
                    for music to every performance.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Private Concerts</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Performances</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Collaborations</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
