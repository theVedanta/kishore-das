const Card = ({ content }) => {
    return (
        <div className="my-16 flex items-center justify-between">
            <div className="exp-left w-2/3">
                <p className="text-slate-500 text-2xl font-normal">
                    {content.year}
                </p>
                <h1 className="text-4xl font-medium mt-4">
                    {content.orgName} - {content.pos}
                </h1>
                <p className="mt-7 text-lg pr-20">{content.p}</p>
            </div>
            <div className="exp-right">
                <img
                    src={content.img}
                    alt="ExpImg"
                    className="w-3/4 h-3/4 shadow-md mt-10"
                />
            </div>
        </div>
    );
};

export default Card;
