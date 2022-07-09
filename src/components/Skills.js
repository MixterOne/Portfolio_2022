import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";

import Html from '../assets/img/html.svg';
import Css from '../assets/img/css.svg';
import Javascript from '../assets/img/javascript.svg';
import React from '../assets/img/reactjs.svg';
import Bootstrap from '../assets/img/bootstrap.svg';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                      <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Trabalho com tecnologias como:</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={Html} alt="image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Javascript} alt="image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={Bootstrap} alt="image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                      </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
     );
}
 
export default Skills;