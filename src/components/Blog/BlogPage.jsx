import { useParams, Link } from "react-router-dom";
import Footer from "../Footer";
import { FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        setBlog({
            title: `Blog Post ${id} Heading`,
            p: `Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.<br /><br />Aut debitis similique rem sapiente iusto qui assumenda dolores hic accusamus deserunt! Est aliquid expedita non iusto sunt cum consequatur quis sit similique autem ab recusandae ducimus ut illum recusandae. Ut Quis ipsam aut sequi delectus aut eaque voluptatum vel enim harum ad inventore omnis aut accusantium iure. Ad architecto laboriosam sit labore soluta qui aliquam nihil numquam eveniet?<br /><br /><a href='https://google.com/' class='text-blue underline font-medium'>https://hype4.academy/</a> Aut debitis similique rem sapiente iusto qui assumenda dolores hic accusamus deserunt! Est aliquid expedita non iusto sunt cum consequatur quis sit similique autem ab recusandae ducimus ut illum recusandae. Ut Quis ipsam aut sequi delectus aut eaque voluptatum vel enim harum ad inventore omnis aut accusantium iure. Ad architecto laboriosam sit labore soluta qui aliquam nihil numquam eveniet?`,
            timestamp: "26th January, 2021",
            imgs: ["/assets/kishoreji.png"],
        });
    }, [id]);

    useEffect(() => {
        document.getElementById("para").innerHTML = blog.p;
    }, [blog]);

    return (
        <main className="min-h-screen relative">
            <div className="main-container px-72 pt-24 pb-32 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                <Link
                    to="/blog"
                    className="text-blue text-xl flex items-center"
                >
                    <FaChevronLeft className="mr-3" /> Go Back
                </Link>
                <h1 className="text-5xl font-serif mb-6 mt-10 blap:text-5xl lap:text-4xl ph:text-center">
                    {blog.title}
                </h1>
                <p className="text-lg opacity-70 tracking-wide">
                    Posted on {blog.timestamp}
                </p>
                <p
                    id="para"
                    className="text-xl font-normal mb-8 mt-12 leading-8"
                ></p>
                {blog.imgs
                    ? blog.imgs.map((img) => {
                          return (
                              <img
                                  src={img}
                                  alt="Blog"
                                  className="w-full h-96 rounded-2xl"
                              />
                          );
                      })
                    : ""}
            </div>
            <Footer />
        </main>
    );
};

export default BlogPage;
