import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const Projects = () => {

    const projects = [
        {
            title: "Finance App",
            description: "Aplicação para gestão financeira pessoal utilizando MQTT e Java.",
            image: "/finance-app-preview.png",
            deployLink: "https://finance-wiliv.netlify.app/",
            repoLink: "https://github.com/Will-Jacks/frontend-finance-app.git"
        },
        {
            title: "POO Tower Defense",
            description: "Jogo de Tower Defense desenvolvido em P5Js como aplicação dos conceitos de POO.",
            image: "/poo-tower-defense-preview.png",
            deployLink: "https://poo-defense.netlify.app/",
            repoLink: "https://github.com/Will-Jacks/arrow-tower-poo-p5js"
        },
        {
            title: "Home Life",
            description: "Jogo de Tower Defense desenvolvido em P5Js como aplicação dos conceitos de POO.",
            image: "/home-life-preview.png",
            deployLink: "https://home-life-app.netlify.app/tabs/index.html",
            repoLink: "https://github.com/Will-Jacks/home_life"
        }
    ]

    return (
        <section id="projects" className="projects-section">
            <section className="section-header">
                <h2 className="section-title">Meus projetos</h2>
                <p className="section-subtitle">Projetos de estudos desenvolvidos</p>
            </section>

            <section className="projects-container">
                {projects.map(project => {
                    return (
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            deployLink={project.deployLink}
                            repoLink={project.repoLink}
                            key={project.title}
                        />
                    )
                })
                }
            </section>
        </section>
    );
}


export default Projects;