import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Consultancy = ({ consul }) => {
    const [cons, setCons] = useState([]);

    useEffect(() => {
        setCons(consul ? consul.cons : []);
    }, [consul]);

    return (
        <section id="Consultancy">
            <Heading text="Consultancy" />
            <p className="mt-7 mb-12 text-xl">{consul ? consul.desc : ""}</p>
            <div className="cons flex">
                {cons.map((con) => {
                    return <Card content={con} key={con} />;
                })}
            </div>
        </section>
    );
};

export default Consultancy;
