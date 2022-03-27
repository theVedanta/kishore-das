import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [activeLink, setActiveLink] = useState("CMS");

    return (
        <nav className="nav px-16 bg-gray flex justify-between items-center border-b-2 border-b-slate-200 fixed top-0 left-0 w-screen z-50 lap:px-10 ph:px-6 ph:bg-white ph:border-none">
            <div className="logo-hold w-1/3 ph:w-1/3 ph:z-40">
                <Link
                    onClick={() => {
                        setActiveLink("");
                        document.title = `Kishore Das`;
                    }}
                    to="/"
                >
                    <img
                        src="/assets/KD.svg"
                        alt="logo"
                        className="logo w-12 h-6 object-contain lap:h-5 lap:w-10 tab:w-8 tab:h-4 ph:my-4"
                    />
                </Link>
            </div>
            <div className="links w-1/3 flex justify-center ph:w-screen ph:flex-col ph:z-30">
                {[
                    ["CMS", "/admin"],
                    ["Blogs", "/admin/blogs"],
                ].map(([title, url]) => (
                    <Link
                        key={title}
                        to={url}
                        className={
                            title === activeLink
                                ? "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs text-blue"
                                : "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs"
                        }
                        onClick={() => {
                            setActiveLink(title);
                            document.title = `Kishore Das - ${title}`;

                            document
                                .querySelector(".ham")
                                .classList.toggle("ham-active");
                            document
                                .querySelector(".links")
                                .classList.toggle("links-active");
                        }}
                    >
                        {title}
                    </Link>
                ))}
            </div>
            <div className="sub-links w-1/3 flex justify-end ph:justify-center">
                <div
                    className="py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 cursor-pointer lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs ph:text-sm"
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.reload();
                    }}
                >
                    Logout
                </div>
            </div>
            <div
                className="ham w-1/3 hidden justify-end items-center h-full ph:flex ph:z-40"
                onClick={() => {
                    document
                        .querySelector(".ham")
                        .classList.toggle("ham-active");
                    document
                        .querySelector(".links")
                        .classList.toggle("links-active");
                }}
            >
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Nav;
