import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
        <nav className="nav px-16 bg-gray flex justify-between items-center border-b-2 border-b-slate-200 fixed top-0 left-0 w-screen z-50 lap:px-10 bph:px-6">
            <div className="logo-hold w-1/3 bph:w-1/2">
                <Link to="/">
                    <img
                        src="/assets/KD.svg"
                        alt="logo"
                        className="logo w-12 h-6 object-contain lap:h-5 lap:w-10 tab:w-8 tab:h-4 bph:my-4"
                    />
                </Link>
            </div>
            <div className="links w-1/3 flex justify-center bph:hidden">
                {[
                    ["About", "#About"],
                    ["Experience", "#Experience"],
                    ["Education", "#Education"],
                    ["Testimonials", "#Testimonials"],
                    ["Contact", "#Contact"],
                ].map(([title, url]) => (
                    <a
                        href={url}
                        className={
                            title === activeLink
                                ? "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs text-blue"
                                : "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs"
                        }
                        onClick={() => {
                            setActiveLink(title);
                            document.title = `Kishore Das - ${title}`;
                        }}
                    >
                        {title}
                    </a>
                ))}
            </div>
            <div className="sub-links w-1/3 flex justify-end bph:hidden">
                {[
                    ["Projects", "/projects"],
                    ["Blog", "/blog"],
                ].map(([title, url]) => (
                    <Link
                        to={url}
                        className="py-5 px-6 inline-block lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs"
                    >
                        {title}
                    </Link>
                ))}
            </div>
            <div className="w-1/2 hidden justify-end items-center bph:flex">
                <FaBars className="cursor-pointer" />
            </div>
        </nav>
    );
};

export default Nav;
