import { Link } from "react-router-dom";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Blog = ({ title, content, timestamp, id }) => {
    return (
        <Link
            className="flex w-full flex-col py-8 px-16 bg-gray rounded-2xl my-5 transition-all duration-150 hover:bg-blue hover:text-white lap:px-12 lap:py-6 tab:px-8 ph:px-6 ph:py-4 ph:my-2"
            to={`/blog/${id}`}
        >
            <div className="flex ph:flex-col">
                <div className="flex items-center mb-6 w-2/3 lap:mb-3 ph:w-full ph:mb-2">
                    <h1 className="text-5xl font-serif blap:text-4xl lap:text-3xl tab:text-2xl">
                        {title}
                    </h1>
                    {/* <h2 className="opacity-70 text-3xl font-normal">
                        {tags.join(", ")}
                    </h2> */}
                </div>
                <h2 className="time w-1/2 flex items-center pb-6 font-normal opacity-70 justify-end text-2xl blap:text-xl lap:text-lg lap:pb-3 tab:text-base ph:text-sm ph:w-full ph:justify-start ph:pb-2">
                    {timestamp.getDate()} {monthNames[timestamp.getMonth()]},{" "}
                    {timestamp.getFullYear()}
                </h2>
            </div>
            <p
                className="text-xl font-normal mt-2 pr-32 leading-8 blap:text-lg lap:text-base lap:pr-24 tab:text-sm tab:pr-16 ph:pr-0"
                id="mini-blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
            ></p>
        </Link>
    );
};

export default Blog;
