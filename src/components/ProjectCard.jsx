import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './ProjectCard.css'

const ProjectCard = ({ image, title, badges, description, deployLink, repoLink, }) => {
    return (
        <div className="project-card">
            <div className="project-card-container">
                <img src={image} alt={title} className="card-image" />

                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    {/* Card badges no futuro */}
                    <p className="card-description">{description}</p>
                </div>

                <div className="project-links">
                    {deployLink && (
                        <a href={deployLink} target="_blank" className="card-deploy-link"><FontAwesomeIcon icon={faLink} color="#0A001B" fontSize={20} /></a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank"><FontAwesomeIcon icon={faGithub} color="#0A001B" fontSize={20} /></a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;