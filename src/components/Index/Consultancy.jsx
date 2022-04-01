import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Consultancy = ({ consul }) => {
    const [cons, setCons] = useState([]);

    useEffect(() => {
        setCons(consul ? consul.cons : []);
    }, [consul]);

    return (
        <section id="Consultancy" data-aos="fade-up">
            <Heading text="Consultancy" />
            <p className="text-lg mt-10 mb-10 blap:text-base lap:text-text-sm tab:text-xs ph:mt-5 ph:text-justify">
                {consul ? consul.desc : ""}
            </p>
            <div className="cons flex flex-wrap">
                {cons.map((con) => {
                    return <Card content={con} key={con} />;
                })}
            </div>
        </section>
    );
};

export default Consultancy;
