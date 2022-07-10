import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


import ProjectCard from "./ProjectCards";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/projImg1.jpg'
import projImg2 from '../assets/img/projImg2.jpg'
import projImg3 from '../assets/img/projImg3.jpeg'
import projImg4 from '../assets/img/projImg4.jpeg'

const Projects = () => {
    const projects = [
        {
            title: "Loja Galáxia",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg1,
            link: "https://mixterone.github.io/Loja-Galaxia/",
          },
          {
            title: "Lista de tarefas",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg2,
            link: "https://mixterone.github.io/Lista_de_Tarefas/",
          },
          {
            title: "Basket Web",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg3,
            link: "https://mixterone.github.io/BasketWeb/",
          },
          {
            title: "Aniflix",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg4,
            link: "https://mixterone.github.io/AniFlix/"
          },
          {
            title: "Lista de tarefas",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg2,
          },
          {
            title: "Basket Web",
            description: "HTML, CSS e JavaScript",
            imgUrl: projImg3,
          },
          
    ]

    return ( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>A seguir meus projetos desenvolvido por mim:</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab Tree
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Nada ainda..</Tab.Pane>
                            <Tab.Pane eventKey="third">Nada ainda..</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
     );
}
 
export default Projects;