import { Link } from "react-router-dom";

const Blog = ({ title, p, timestamp, id }) => {
    return (
        <Link
            className="flex w-full flex-col py-8 px-16 bg-gray rounded-3xl my-5 transition-all duration-150 hover:bg-blue hover:text-white"
            to={`/blog/${id}`}
        >
            <h1 className="text-5xl font-serif mb-4 blap:text-5xl lap:text-4xl ph:text-center">
                {title}
            </h1>
            <p className="text-xl font-normal mb-8 mt-2 leading-8">{p}</p>
            <p className="text-lg opacity-70 tracking-wide">{timestamp}</p>
        </Link>
    );
};

export default Blog;
