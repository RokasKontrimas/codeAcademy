const InputSelectionCombined = (props) => {
    const { labelName, type, id, inputName,data,value, onStateChange } = props;
    const handleInputChange = (e) => {
        onStateChange(e.target.value);
        // console.log(data,'current')
    };

    return (
        <div className='radio-input'>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={type}
                id={id}
                name={inputName}
                value={value}
                checked={data === value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputSelectionCombined;
