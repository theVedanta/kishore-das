import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Experience = () => {
    const [exps, setExps] = useState([]);

    useEffect(() => {
        setExps([
            {
                id: 1,
                orgName: "Org Name",
                pos: "Position",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                id: 2,
                orgName: "Org Name",
                pos: "Position 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                id: 3,
                orgName: "Org Name",
                pos: "Position",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                id: 4,
                orgName: "Org Name",
                pos: "Position 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
        ]);
    }, []);

    return (
        <section id="Experience">
            <Heading text="Experience" />
            {exps.map((exp) => {
                return <Card content={exp} key={exp.id} />;
            })}
        </section>
    );
};

export default Experience;
