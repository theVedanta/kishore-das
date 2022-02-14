import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Training = () => {
    const [trs, setTrs] = useState([]);

    useEffect(() => {
        setTrs(["Mangement", "Whatever"]);
    }, []);

    return (
        <section id="Training">
            <Heading text="Training" />
            <p className="mt-7 mb-12 text-xl">
                20+ years of training facilitation experience in the following
                areas
            </p>
            <div className="trs flex">
                {trs.map((tr) => {
                    return <Card content={tr} key={tr} />;
                })}
            </div>
        </section>
    );
};

export default Training;
