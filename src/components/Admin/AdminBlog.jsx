import Heading from "../Heading";
import Footer from "../Footer";
import Blog from "../Blog/Blog";
import { useState, useEffect } from "react";
import BASE_API_URL from "../../BASE_API_URL";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Notyf } from "notyf";

const notyf = new Notyf();

const AdminBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [remBlog, setRemBlog] = useState("");
    const [categBlogs, setCategBlogs] = useState([]);

    const changeCateg = () => {
        const val = document
            .querySelector("select[name='category']")
            .value.trim();

        if (val === "all") setCategBlogs(blogs);
        else setCategBlogs(blogs.filter((blog) => blog.category === val));
    };

    const removeBlog = async (id) => {
        toggleTrans();

        const deletedJson = await fetch(
            `${BASE_API_URL}/api/blogs/delete/${id}`,
            {
                method: "DELETE",
            }
        );
        const deleted = await deletedJson.json();

        if (deleted.done) {
            setBlogs(blogs.filter((blog) => blog._id !== id));
            setRemBlog("");
        } else {
            notyf.error("Some error occurred");
        }
    };

    const toggleTrans = () => {
        document
            .querySelector(".trans-del")
            .classList.toggle("trans-del-active");
    };

    useEffect(() => {
        const effectChangeCateg = () => {
            const val = document
                .querySelector("select[name='category']")
                .value.trim();

            if (val === "all") setCategBlogs(blogs);
            else setCategBlogs(blogs.filter((blog) => blog.category === val));
        };

        effectChangeCateg();
    }, [blogs]);

    useEffect(() => {
        const initialFetch = async () => {
            const dataJson = await fetch(`${BASE_API_URL}/api/blogs`);
            const data = await dataJson.json();

            setBlogs(data.blogs);
            setCategBlogs(data.blogs);
        };
        initialFetch();
    }, []);

    return (
        <>
            <main className="min-h-screen relative">
                <div
                    className="trans-del fixed top-0 left-0 w-screen h-screen z-50 transition-all opacity-0 pointer-events-none"
                    style={{ background: "rgba(0, 0, 0, 0.3)" }}
                >
                    <div className="confirm-box fixed top-1/2 left-1/2 rounded-xl bg-white w-3/12 -translate-x-1/2 -translate-y-1/2 flex p-12 justify-center items-center flex-col">
                        <h1 className="text-2xl font-semiMed text-center leading-9">
                            Are you sure you want to delete this Post?
                        </h1>
                        <div className="del-btns mt-10">
                            <button
                                className="del-cancel px-10 py-3 rounded-xl bg-blue text-white transition-all mx-5 hover:bg-darkBlue"
                                onClick={() => {
                                    toggleTrans();
                                    setRemBlog("");
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="del-delete px-10 py-3 rounded-xl bg-red-500 text-white transition-all mx-5 hover:bg-red-800"
                                onClick={() => removeBlog(remBlog)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main-container px-72 pt-36 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                    <div className="flex justify-between items-center">
                        <div className="blog-head-left flex items-center">
                            <Heading text="Posts" />
                            <Link to="/admin/blogs/add">
                                <FaPlusCircle className="ml-10 text-3xl text-blue" />
                            </Link>
                        </div>
                        <select
                            name="category"
                            id="category"
                            className="category bg-darkGray rounded-lg px-6 py-3 w-1/4"
                            onChange={changeCateg}
                        >
                            <option value="all">Category: All</option>
                            <option value="leadership">Leadership</option>
                            <option value="management">Management</option>
                            <option value="hr">HR</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-10 items-center pb-44">
                        {categBlogs.map((blog) => {
                            return (
                                <div className="blog-hold flex items-center w-full">
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
                                    <button
                                        id="removeBlog"
                                        // onClick={() => removeBlog(blog._id)}
                                        onClick={() => {
                                            toggleTrans();
                                            setRemBlog(blog._id);
                                        }}
                                    >
                                        <FaTrashAlt className="text-3xl ml-10 text-red-500" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default AdminBlog;
