import HashLoader from "react-spinners/HashLoader";

const Load = (props) => {
    return props.loaded ? (
        <>{props.children}</>
    ) : (
        <div className="loading flex justify-center items-center h-screen">
            <HashLoader loading={true} size={80} color={"#6198FE"} />
        </div>
    );
};

Load.defaultProps = {
    loaded: false,
};

export default Load;
