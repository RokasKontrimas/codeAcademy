import LabelElement from "./LabelElement";
import SelectElement from "./SelectElement";
import InputElement from "./InputElement";

export default function DynamicInputSelect(props) {
    const {title, id, options} = props
    return (
        <div>
            <label id={id}>{title}</label>
            <SelectElement options={options}/>
        </div>
    )
}