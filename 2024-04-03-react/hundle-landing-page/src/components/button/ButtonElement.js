import './Button.css';

export default function ButtonElement(props) {
    const {elementClasses, href, title} = props;
    return (
        title && href && (
            <a className={`button ${elementClasses}`} href={href}>{title}</a>
        )
    )
}