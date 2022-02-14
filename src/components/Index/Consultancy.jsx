import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Consultancy = () => {
    const [cons, setCons] = useState([]);

    useEffect(() => {
        setCons(["Management", "Whatever"]);
    }, []);

    return (
        <section id="Consultancy">
            <Heading text="Consultancy" />
            <p className="mt-7 mb-12 text-xl">
                20+ years of training facilitation experience in the following
                areas
            </p>
            <div className="cons flex">
                {cons.map((con) => {
                    return <Card content={con} key={con} />;
                })}
            </div>
        </section>
    );
};

export default Consultancy;
