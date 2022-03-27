import Heading from "../Heading";
import Blog from "./Blog";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import Nav from "../Nav";
import BASE_API_URL from "../../BASE_API_URL";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const initialFetch = async () => {
            const dataJson = await fetch(`${BASE_API_URL}/api/blogs`);
            const data = await dataJson.json();

            setBlogs(data.blogs);
        };
        initialFetch();
    }, []);

    return (
        <>
            <Nav />
            <main className="min-h-screen relative">
                <div className="main-container px-72 pt-36 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                    <div className="flex justify-between items-center">
                        <Heading text="Posts" />
                        <select
                            name="category"
                            id="category"
                            className="category bg-darkGray rounded-lg px-6 py-3 w-1/4 "
                        >
                            <option value="all">Category: All</option>
                            <option value="leadership">Leadership</option>
                            <option value="management">Management</option>
                            <option value="hr">HR</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-10 items-center pb-44">
                        {blogs.map((blog) => {
                            return (
                                <Blog
                                    key={blog._id}
                                    title={blog.title}
                                    // p={blog.p}
                                    content={blog.content.replace(
                                        /<img[^>]*>/g,
                                        ""
                                    )}
                                    timestamp={new Date(blog.createdAt)}
                                    id={blog._id}
                                    // tags={blog.tags}
                                />
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Blogs;
