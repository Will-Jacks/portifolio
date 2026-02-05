import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">William Jackson</h1>
                <h3 className="hero-subtitle">
                    Olá, sou William Jackson. Sou desenvolvedor em formação focado em Java e React, cursando Ciência e Tecnologia na UFRN.
                    Gosto de resolver problemas de infraestrutura usando criatividade, como no meu projeto recente onde criei uma arquitetura distribuída usando MQTT e Java para gestão financeira pessoal. Busco minha primeira oportunidade para aplicar meus conhecimentos em arquitetura de software e desenvolvimento Full Stack."</h3>
            </div>

            <div>
                <picture>
                    <source srcSet="hero-image.avif" type="image/avif"></source>
                    <source srcSet="hero-image.webp" type="image/webp"></source>
                    <img src="hero-image.jpg" alt="" className="hero-image" />
                </picture>
            </div>
        </section>

    )
}

export default Hero;