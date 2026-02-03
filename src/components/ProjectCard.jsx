import styled from "styled-components";
import { CardContainer, CardContent } from "./ProjectCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ image, title, badges, description, deployLink, repoLink, }) => {
    return (
        <div className="project-card">
            <CardContainer className="project-card-container">
                <CardImage src={image} alt={title} className="card-image" />

                <CardContent className="card-content">
                    <h3 className="card-title">{title}</h3>
                    {/* Card badges no futuro */}
                    <p className="card-description">{description}</p>
                </CardContent>

                <div className="project-links">
                    {deployLink && (
                        <a href={deployLink} target="_blank" className="card-deploy-link"><FontAwesomeIcon icon={faLink} color="#0A001B" fontSize={20} /></a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank"><FontAwesomeIcon icon={faGithub} color="#0A001B" fontSize={20} /></a>
                    )}
                </div>
            </CardContainer>
        </div>
    )
}

const CardImage = styled.img`
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
`

export default ProjectCard;