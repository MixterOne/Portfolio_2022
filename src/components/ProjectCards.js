import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, link }) => {
    return ( 
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                    <button><a href={link} target="_blank" style={{color: '#fff', textTransform: 'uppercase', textDecoration: 'none'}}>Ir ver</a></button>
                    </div>
                </div>
            </div>
        </Col>
     );
}
 
export default ProjectCard;