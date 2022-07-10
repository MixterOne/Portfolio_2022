import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
    return ( 
        <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 style={{color: '#fff', textTransform: 'uppercase'}}>Matheus</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{marginTop: '20px'}}>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/matheus-rodrigues-isaias/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
                        <a href="https://github.com/MixterOne" target="_blank"><img src={navIcon2} alt="GitHub" /></a>
                        <a href="https://wa.me/+5531988952080" target="_blank"><img src={navIcon3} alt="WhatsApp" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
     );
}
 
export default Footer;