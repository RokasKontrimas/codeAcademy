const SelectElement = (props) => {
    const {labelName, id, defaults, name, stateValue, onStateChange} = props;

    const handleStateChange = (e) => {
        onStateChange(e.target.value)
        // console.log(e.target.value)
    }
    // const handleOtherColor = (e) => {
    //
    // }
    return (
        <div>
            <label htmlFor={id}>{labelName}</label>
            <select
                name={name}
                defaultValue={'black'}
                    onChange={(e) => {
                handleStateChange(e)
            }}>
                {defaults.map((item, index) => {
                    return <option value={item} key={index}>{item}</option>

                })}
                {}
            </select>
            {/*{stateValue === 'other' && (*/}
            {/*    <input*/}
            {/*        autoFocus={true}*/}
            {/*        type='text'*/}
            {/*        name='other-color'*/}
            {/*        onChange={(e) => {*/}
            {/*        handleStateChange(e)*/}

            {/*    }}/>*/}
            {/*)}*/}
        </div>
    );
};

export default SelectElement;
