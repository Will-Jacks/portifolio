import styled from "styled-components";
import { CardContainer, CardContent } from "./ProjectCard.styles";

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

                {deployLink && (
                    <a href={deployLink} target="_blank" className="card-deploy-link">DeployLink</a>
                )}
                {repoLink && (
                    <a href={repoLink} target="_blank">RepoLink</a>
                )}
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