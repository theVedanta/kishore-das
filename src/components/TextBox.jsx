const TextBox = ({ text, placeholder, height, name, readonly }) => {
    return (
        <textarea
            className="border-slate-400 rounded-xl w-full px-6 py-4 my-2"
            style={{ borderWidth: "1px", height: height, minHeight: "20vh" }}
            defaultValue={text}
            readOnly={readonly}
            placeholder={placeholder}
            name={name}
            autoComplete="off"
        ></textarea>
    );
};

TextBox.defaultProps = {
    height: "30vh",
    name: "Text_box",
    readonly: false,
};

export default TextBox;
