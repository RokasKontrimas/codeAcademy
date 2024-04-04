export default function Label(props) {
    return (
        <label htmlFor={props.selector}>{props.title}</label>
    )
}