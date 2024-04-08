import './Header.css';
import ButtonElement from "../button/ButtonElement";
import HeroElement from "./hero/HeroElement";

export default function HeaderElement() {

    return (
        <header>
            <div className="header-wrapper">
                <img
                    src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/logo.svg"
                    alt="logo"/>
                <ButtonElement elementClasses='header-button' href='#' title='Try It Free'/>
            </div>
            <HeroElement
                body='Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                     Create connections with your users as you engage in genuine discussion. '
                title='Build The Community Your Fans Will Love'/>
        </header>

    )
}