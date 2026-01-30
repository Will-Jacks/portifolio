import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

import { ProjectContainer, SectionHeader } from "./Projects.styles";

const Projects = () => {

    const projects = [
        {
            title: "Finance App",
            description: "Aplicação para gestão financeira pessoal utilizando MQTT e Java.",
            image: "/finance-app-preview.png",
            deployLink: "https://finance-app.example.com",
            repoLink: "https://github.com/yourusername/finance-app"
        },
        {
            title: "POO Tower Defense",
            description: "Jogo de Tower Defense desenvolvido em P5Js como aplicação dos conceitos de POO.",
            image: "/poo-tower-defense-preview.png",
            deployLink: "https://poo-tower-defense.example.com",
            repoLink: "https://github.com/yourusername/poo-tower-defense"
        },
        {
            title: "POO Tower Defense",
            description: "Jogo de Tower Defense desenvolvido em P5Js como aplicação dos conceitos de POO.",
            image: "/poo-tower-defense-preview.png",
            deployLink: "https://poo-tower-defense.example.com",
            repoLink: "https://github.com/yourusername/poo-tower-defense"
        }
    ]

    return (
        <section id="projects" className="projects-section">

            <SectionHeader>
                <h2 className="section-title">Meus projetos</h2>
                <p className="section-subtitle">Projetos de estudos desenvolvidos</p>
            </SectionHeader>

            <ProjectContainer className="projects-container">
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
            </ProjectContainer>
        </section>
    );
}


export default Projects;