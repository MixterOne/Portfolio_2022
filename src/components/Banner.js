import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import BannerRick from '../assets/img/banner-portal.png'
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Desenvolvedor Web", "Desenvolvedor Front-end" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Potfólio</span>
                        <h1>{`Oi eu sou `}<span className="wrap">{text}</span></h1>
                        <p>Meu nome é Matheus Rodrigues Isaias e estou em busca da minha primeira experiência no mercado de trabalho da programação!</p>
                        <p>Meu principal objetivo profissional é encontrar um trabalho que me dê a oportunidade de aprofundar e melhorar as minhas habilidades de programação, me envolver em projetos interessantes e criativos e aumentar minhas qualificações de desenvolvimento Front-End.</p>
                        <button onClick={() => console.log('teste2')}>Let´s connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={BannerRick} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Banner;