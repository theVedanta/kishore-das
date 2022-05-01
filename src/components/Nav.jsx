import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [activeLink, setActiveLink] = useState("");

    window.onscroll = () => {
        const sections = document.querySelectorAll("section");

        for (let section of sections) {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset + 50 >= sectionTop - 75) {
                setActiveLink(section.getAttribute("id"));
            }
        }
    };

    return (
        <nav className="nav px-16 bg-gray flex justify-between items-center border-b-2 border-b-slate-200 fixed top-0 left-0 w-screen z-50 lap:px-10 ph:px-6 ph:bg-white ph:border-none">
            <div className="logo-hold w-3/12 ph:w-1/3 ph:z-40">
                <a
                    // onClick={() => {
                    //     setActiveLink("");
                    //     document.title = `Kishore Das`;
                    // }}
                    href="/#Header"
                >
                    <img
                        src="/assets/KD.svg"
                        alt="logo"
                        className="logo w-12 h-6 object-contain lap:h-5 lap:w-10 tab:w-8 tab:h-4 ph:my-4"
                    />
                </a>
            </div>
            <div className="links w-6/12 flex justify-center ph:w-screen ph:flex-col ph:z-30">
                {[
                    ["About", "/#About"],
                    ["Training", "/#Training"],
                    ["Consultancy", "/#Consultancy"],
                    ["Testimonials", "/#Testimonials"],
                    ["Contact", "/#Contact"],
                ].map(([title, url]) => (
                    <a
                        key={title}
                        href={url}
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
                    </a>
                ))}
            </div>
            <div className="sub-links w-3/12 flex justify-end ph:justify-center">
                {[
                    ["Blog", "/blog"],
                    ["Resume", "/assets/resume.pdf"],
                ].map(([title, url]) => (
                    <Link
                        key={title}
                        to={url}
                        className={
                            title === activeLink
                                ? "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs ph:text-sm text-blue"
                                : "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs ph:text-sm"
                        }
                        onClick={() => {
                            setActiveLink(title);
                            document.title = `Kishore Das - ${title}`;
                        }}
                    >
                        {title}
                    </Link>
                ))}
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
