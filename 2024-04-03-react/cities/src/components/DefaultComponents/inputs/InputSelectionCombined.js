const InputSelectionCombined = (props) => {
    const {labelName, type, id, inputName, stateValue, onStateChange} = props;
    const handleInputChange = (e) => {
        onStateChange(e.target.checked);
    };

    return (
        <div className='radio-input'>
            <input
                type={type}
                id={id}
                name={inputName}
                checked={stateValue}
                onChange={handleInputChange}
            />
            <label htmlFor={id}>{labelName}</label>

        </div>
    );
};

export default InputSelectionCombined;
