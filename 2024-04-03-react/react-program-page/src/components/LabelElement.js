export default function LabelElement(props) {
    return (
        <label htmlFor={props.selector}>{props.title}</label>
    )
}