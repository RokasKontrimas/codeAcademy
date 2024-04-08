import './Hero.css';
import ButtonElement from "../../button/ButtonElement";

export default function HeroElement(props) {
    const {title,body} = props
    return (
        <div className="hero">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>{title}</h1>
                    <p>{body}</p>
                    <ButtonElement elementClasses='hero-button' href='#' title='Get Started For Free'/>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-mockups.svg"
                        alt="mockups"/>
                </div>
            </div>
        </div>

    )
}