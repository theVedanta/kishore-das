import { useState, useEffect } from "react";
import Card from "./Card";

const Experience = () => {
    const [exps, setExps] = useState([]);

    useEffect(() => {
        setExps([
            {
                orgName: "Org Name",
                pos: "Position",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                orgName: "Org Name",
                pos: "Position 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                orgName: "Org Name",
                pos: "Position",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                orgName: "Org Name",
                pos: "Position 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
        ]);
    }, []);

    return (
        <section>
            <h1 className="text-6xl text-blue font-serif mb-4">Experience</h1>
            {exps.map((exp) => {
                return <Card content={exp} />;
            })}
        </section>
    );
};

export default Experience;