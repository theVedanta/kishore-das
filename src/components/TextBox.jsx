const TextBox = ({
    text,
    placeholder,
    height,
    name,
    readonly,
    id,
    onChange,
}) => {
    return (
        <textarea
            className="border-slate-400 rounded-xl w-full px-6 py-4 my-2"
            style={{ borderWidth: "1px", height: height, minHeight: "20vh" }}
            defaultValue={text}
            readOnly={readonly}
            placeholder={placeholder}
            name={name}
            autoComplete="off"
            id={id}
            onChange={onChange}
        ></textarea>
    );
};

TextBox.defaultProps = {
    height: "30vh",
    name: "Text_box",
    readonly: false,
    id: "text_box",
};

export default TextBox;
