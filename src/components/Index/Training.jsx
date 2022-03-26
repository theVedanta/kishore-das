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
            <p className="mt-7 mb-12 text-xl">{train ? train.desc : ""}</p>
            <div className="trs flex">
                {trs.map((tr) => {
                    return <Card content={tr} key={tr} />;
                })}
            </div>
        </section>
    );
};

export default Training;
