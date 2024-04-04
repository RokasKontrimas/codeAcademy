import Option from "./Option";

export default function Select(props) {
    return (
        <select id={props.id}>
            {props.title.map((item,key) => {
                return <Option title={item} key={key}/>
            })}
        </select>
    )
}