import Heading from "../Heading";
import Blog from "./Blog";
import Footer from "../Footer";
import { useState, useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([
            {
                id: 1,
                title: "Blog Post 1 Heading",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum",
                timestamp: "26th January, 2021",
                imgs: ["/assets/kishoreji.png"],
            },
            {
                id: 2,
                title: "Blog Post 2 Heading",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum",
                timestamp: "26th January, 2021",
                imgs: ["/assets/kishoreji.png"],
            },
            {
                id: 3,
                title: "Blog Post 3 Heading",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum",
                timestamp: "26th January, 2021",
                imgs: ["/assets/kishoreji.png"],
            },
        ]);
    }, []);

    return (
        <main className="min-h-screen relative">
            <div className="main-container px-72 pt-36 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                <Heading text="Posts" />
                <div className="flex flex-col mt-10 items-center pb-44">
                    {blogs.map((blog) => {
                        return (
                            <Blog
                                key={blog.id}
                                title={blog.title}
                                p={blog.p}
                                timestamp={blog.timestamp}
                                id={blog.id}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Blogs;
