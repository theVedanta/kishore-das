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
            className="flex w-full flex-col py-8 px-16 bg-gray rounded-3xl my-5 transition-all duration-150 hover:bg-blue hover:text-white ph:px-10"
            to={`/blog/${id}`}
        >
            <div className="flex">
                <div className="flex flex-col mb-6 w-2/3">
                    <h1 className="text-5xl font-serif mb-4 blap:text-5xl lap:text-4xl ph:text-center">
                        {title}
                    </h1>
                    {/* <h2 className="opacity-70 text-3xl font-normal">
                        {tags.join(", ")}
                    </h2> */}
                </div>
                <h2 className="time w-1/2 flex mt-4 font-normal opacity-70 justify-end text-2xl">
                    {timestamp.getDate()} {monthNames[timestamp.getMonth()]},{" "}
                    {timestamp.getFullYear()}
                </h2>
            </div>
            <p
                className="text-xl font-normal mt-2 pr-32 leading-8"
                id="mini-blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
            ></p>
        </Link>
    );
};

export default Blog;
