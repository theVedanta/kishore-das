const Card = ({ content }) => {
    return (
        <div className="my-16 flex items-center justify-between blap:my-10 tab:my-6 bph:flex-col-reverse">
            <div className="exp-left w-2/3  tab:w-9/12 bph:w-full">
                <p className="text-slate-500 text-2xl font-normal blap:text-xl tab:text-base bph:text-center">
                    {content.year}
                </p>
                <h1 className="text-4xl font-medium mt-4 blap:text-3xl lap:text-2xl lap:mt-2 tab:text-xl bph:text-center bph:mt-3">
                    {content.orgName} - {content.pos}
                </h1>
                <p className="mt-7 text-lg pr-20 blap:text-base lap:text-sm lap:mt-6 tab:text-xs bph:text-justify bph:text-sm bph:px-0 bph:mt-5">
                    {content.p}
                </p>
            </div>
            <div className="exp-right w-1/3 flex justify-end items-center lap:justify-center tab:w-3/12 bph:w-full bph:mb-6">
                <img
                    src={content.img}
                    alt="ExpImg"
                    className="w-3/4 h-3/4 shadow-md mt-10 blap:w-7/12 blap:h-7/12 lap:w-1/2 lap:h-1/2 tab:w-10/12 tab:h-10/12 bph:w-1/2 bph:h-1/2"
                />
            </div>
        </div>
    );
};

export default Card;
