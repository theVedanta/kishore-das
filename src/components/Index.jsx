import Header from "./Index/Header";
import About from "./Index/About";
import Consultancy from "./Index/Consultancy";
import Training from "./Index/Training";
import Testimonials from "./Index/Testimonials";
import Contact from "./Index/Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import BASE_API_URL from "../BASE_API_URL";
import HashLoader from "react-spinners/HashLoader";
import Nav from "./Nav";
import { Notyf } from "notyf";

const notyf = new Notyf();

const Index = () => {
    const [index, setIndex] = useState({});

    useEffect(() => {
        const initialFetch = async () => {
            try {
                const dataJson = await fetch(`${BASE_API_URL}/api/cms`);
                const data = await dataJson.json();
                const index = data.index;

                setIndex(index);
            } catch (err) {
                notyf.error("Something went wrong");
            }
        };
        initialFetch();
    }, []);

    return (
        <>
            <Nav />
            {index.header ? (
                <main className="relative">
                    <div className="main-container px-72 pt-16 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                        <Header header={index ? index.header : ""} />
                        <About about={index ? index.about : ""} />
                        <Training train={index ? index.training : ""} />
                        <Consultancy consul={index ? index.consultancy : ""} />
                        <Testimonials tests={index ? index.testimonials : ""} />
                        <Contact conts={index ? index.contacts : ""} />
                    </div>
                    <Footer />
                </main>
            ) : (
                <div className="loading flex justify-center items-center h-screen">
                    <HashLoader loading={true} size={80} color={"#6198FE"} />
                </div>
            )}
        </>
    );
};

export default Index;
