import './Footer.css';
import ButtonElement from "../button/ButtonElement";

export default function FooterElement(props) {
    return (
        <footer className="footer">
            <div className="footer-top-wrapper">
                <div className="footer-box">
                    <h2>Ready To Build Your Community?</h2>
                </div>
                <ButtonElement
                    elementClasses='footer-top-button'
                    href='#'
                    title='Get Started For Free'/>
            </div>
            <div className="footer-content">
                <div className="footer-content-wrapper">
                    <div className="footer-content-column">
                        <img src="./../../../public/images/logo-white.svg" alt="logo white" width="200"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua</p>
                        <a href="tel:+15431234567">+1-543-123-4567</a>
                        <a href="mailto:example@huddle.com">example@huddle.com</a>
                    </div>
                </div>
                <div className="footer-content-wrapper">
                    <div className="footer-content-column">
                        <a>About Us</a>
                        <a>What We Do</a>
                        <a>FAQ</a>
                    </div>
                </div>
                <div className="footer-content-wrapper">
                    <div className="footer-content-column">
                        <a>Career</a>
                        <a>Blog</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className="footer-content-wrapper">
                    <div className="footer-content-column">
                        <p>Fb</p>
                        <p>Tw</p>
                        <p>Ig</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}