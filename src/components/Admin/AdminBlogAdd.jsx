import Heading from "../Heading";
import InputBox from "../InputBox";
import TextBox from "./TextBox";
import { useState } from "react";
import { Notyf } from "notyf";
import BASE_API_URL from "../../BASE_API_URL";
// import { Navigate } from "react-router-dom";

const notyf = new Notyf();

const AdminBlogAdd = () => {
    const [content, setContent] = useState("");

    const getContent = (content) => {
        setContent(content);
    };

    const addBlog = async () => {
        const title = document
            .querySelector("input[name='blog-title']")
            .value.trim();
        const category = document
            .querySelector("select[name='category']")
            .value.trim();

        if (title !== "" && content !== "") {
            const addedJson = await fetch(`${BASE_API_URL}/api/blogs/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, category, content }),
            });
            const added = await addedJson.json();

            if (added.done) {
                window.location.href = "/admin/blogs";
            } else {
                notyf.error("Some error occurred");
            }
        } else {
            notyf.error("Please fill all the fields");
        }
    };

    return (
        <>
            <main className="mt-36 px-72">
                <Heading text="Blog Post" />

                <div className="blog-add-top flex items-center mb-5">
                    <InputBox placeholder="Post title" name="blog-title" />
                    <select
                        name="category"
                        id="category"
                        className="category bg-darkGray rounded-xl px-6 py-4 ml-10 w-1/4"
                    >
                        <option value="all">Category: All</option>
                        <option value="leadership">Leadership</option>
                        <option value="management">Management</option>
                        <option value="hr">HR</option>
                    </select>
                </div>

                <TextBox handleContentChange={getContent} />

                <button
                    id="add-blog"
                    className="px-10 py-3 text-white bg-blue rounded-lg mt-10 transition-all hover:bg-darkBlue"
                    onClick={addBlog}
                >
                    Create Post
                </button>
            </main>
        </>
    );
};

export default AdminBlogAdd;
