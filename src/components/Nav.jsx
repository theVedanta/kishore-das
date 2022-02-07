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
        <nav className="nav px-16 bg-gray flex justify-between items-center border-b-2 border-b-slate-200 fixed top-0 left-0 w-screen z-50">
            <div className="logo-hold w-1/3">
                <Link to="/">
                    <img
                        src="/assets/KD.svg"
                        alt="logo"
                        className="logo w-12 h-6"
                    />
                </Link>
            </div>
            <div className="links w-1/3 flex justify-center">
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
                                ? "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1 text-blue"
                                : "py-5 px-6 inline-block transition-all duration-200 ease-in-out mx-1"
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
            <div className="sub-links w-1/3 flex justify-end">
                {[
                    ["Projects", "/projects"],
                    ["Blog", "/blog"],
                ].map(([title, url]) => (
                    <Link to={url} className="py-5 px-6 inline-block">
                        {title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
