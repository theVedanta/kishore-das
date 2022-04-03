import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Training = ({ train }) => {
    const [trs, setTrs] = useState([]);

    useEffect(() => {
        setTrs(train ? train.trs : []);
    }, [train]);

    return (
        <section id="Training">
            <Heading text="Training" />
            <p className="text-lg mt-10 mb-10 blap:text-base lap:text-text-sm tab:text-xs ph:mt-5 ph:text-justify">
                {train ? train.desc : ""}
            </p>
            <div className="trs flex flex-wrap">
                {trs.map((tr) => {
                    return <Card content={tr} key={tr} />;
                })}
            </div>
        </section>
    );
};

export default Training;
