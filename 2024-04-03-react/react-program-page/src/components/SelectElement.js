import OptionElement from "./OptionElement";

export default function SelectElement(props) {
    return (
        <select id={props.id}>
            {props.options.map((option,key) => {
                return <OptionElement title={option} key={key}/>
            })}
        </select>
    )
}