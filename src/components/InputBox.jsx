const InputBox = ({
    text,
    supreme,
    name,
    id,
    placeholder,
    readonly,
    width,
    margin,
    onChange,
}) => {
    return (
        <input
            className={
                !supreme
                    ? `border-slate-400 rounded-xl ${width} px-6 py-4 my-2 ${margin}`
                    : `border-slate-400 rounded-xl ${width} px-6 py-4 my-2 ${margin} text-blue text-xl`
            }
            style={{ borderWidth: "1px" }}
            defaultValue={text}
            name={name}
            id={id}
            readOnly={readonly}
            placeholder={placeholder}
            autoComplete="off"
            onChange={onChange}
        />
    );
};

InputBox.defaultProps = {
    supreme: false,
    name: "input_box",
    id: "input_box",
    placeholder: "",
    readonly: false,
    width: "w-full",
};

export default InputBox;
