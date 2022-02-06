import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [activeLink, setActiveLink] = useState("About");

    return (
        <nav className="nav px-16 bg-gray flex justify-between items-center border-b-2 border-b-slate-200">
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
                    ["About", "/"],
                    ["Experience", "/experience"],
                    ["Education", "/education"],
                    ["Testimonials", "/testimonials"],
                    ["Contact", "/contact"],
                ].map(([title, url]) => (
                    <Link
                        to={url}
                        className={
                            title === activeLink
                                ? "py-5 px-6 inline-block transition-all duration-200 ease-in-out text-blue"
                                : "py-5 px-6 inline-block transition-all duration-200 ease-in-out"
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
