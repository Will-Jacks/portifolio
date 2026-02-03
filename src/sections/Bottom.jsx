import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Bottom.styles";

const Bottom = () => {

    return (
        <section>
            <Footer>
                <p>&copy; William Jackson</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/william-jackson-souza/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Will-Jacks" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </Footer>
        </section>
    )
}

export default Bottom;