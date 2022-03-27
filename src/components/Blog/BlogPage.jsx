import { useParams, Link } from "react-router-dom";
import Footer from "../Footer";
import { FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import Nav from "../Nav";
import BASE_API_URL from "../../BASE_API_URL";

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

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const initialFetch = async () => {
            const dataJson = await fetch(`${BASE_API_URL}/api/blogs/${id}`);
            const data = await dataJson.json();

            setBlog({
                title: data.blog.title,
                content: data.blog.content,
                category: data.blog.category,
                timestamp: new Date(data.blog.createdAt),
            });
        };
        initialFetch();
    }, [id]);

    return (
        <>
            <Nav />
            <main className="min-h-screen relative">
                <div className="main-container px-72 pt-24 pb-32 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                    <Link
                        to="/blog"
                        className="text-blue text-xl flex items-center"
                    >
                        <FaChevronLeft className="mr-3" /> Go Back
                    </Link>
                    <h1 className="text-5xl font-serif mb-3 mt-10 blap:text-5xl lap:text-4xl ph:text-center">
                        {blog ? blog.title : ""}
                    </h1>
                    <p className="text-2xl opacity-70 tracking-wide">
                        Posted on{" "}
                        {`${blog.timestamp ? blog.timestamp.getDate() : ""} ${
                            blog.timestamp
                                ? monthNames[blog.timestamp.getMonth()]
                                : ""
                        }, ${
                            blog.timestamp ? blog.timestamp.getFullYear() : ""
                        }`}
                    </p>
                    <p
                        id="para"
                        className="text-xl font-normal mb-8 mt-6 leading-8"
                        dangerouslySetInnerHTML={{
                            __html: blog ? blog.content : "",
                        }}
                    ></p>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default BlogPage;
