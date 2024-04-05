import LabelElement from "./LabelElement";
import SelectElement from "./SelectElement";
import InputElement from "./InputElement";

export default function DynamicInputSelect(props) {
    return (
        <>
            <LabelElement title={props.title} selector={props.id}/>
            {props.isInput ? <InputElement id={props.id} type={props.type}/> : <SelectElement options={props.options}/>}
        </>
    )
}