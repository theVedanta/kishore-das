const InputBox = ({ text, supreme, name, id, placeholder, readonly }) => {
    return (
        <input
            className={
                !supreme
                    ? "border-slate-400 rounded-xl w-full px-6 py-4 my-2"
                    : "border-slate-400 rounded-xl w-full px-6 py-4 my-2 text-blue text-xl"
            }
            style={{ borderWidth: "1px" }}
            defaultValue={text}
            name={name}
            id={id}
            readOnly={readonly}
            placeholder={placeholder}
            autoComplete="off"
        />
    );
};

InputBox.defaultProps = {
    supreme: false,
    name: "input_box",
    id: "input_box",
    placeholder: "",
    readonly: false,
};

export default InputBox;
