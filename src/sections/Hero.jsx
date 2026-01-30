import { HeroContent, HeroImage, HeroSection, HeroSubTitle, HeroTitle } from "./Hero.styles";

const Hero = () => {
    return (
        <HeroSection className="hero-section">
            <HeroContent className="hero-content">
                <HeroTitle className="hero-title">William Jackson</HeroTitle>
                <HeroSubTitle className="hero-subtitle">
                    Olá, sou William Jackson. Sou desenvolvedor em formação focado em Java e React, cursando Ciência e Tecnologia na UFRN.
                    Gosto de resolver problemas de infraestrutura usando criatividade, como no meu projeto recente onde criei uma arquitetura distribuída usando MQTT e Java para gestão financeira pessoal. Busco minha primeira oportunidade para aplicar meus conhecimentos em arquitetura de software e desenvolvimento Full Stack."</HeroSubTitle>
            </HeroContent>

            <div className="hero-image">
                <picture>
                    <source srcSet="hero-image.avif" type="image/avif"></source>
                    <source srcSet="hero-image.webp" type="image/webp"></source>
                    <HeroImage src="hero-image.jpg" alt="" />
                </picture>
            </div>
        </HeroSection>

    )
}

export default Hero;