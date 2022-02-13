import { useState, useEffect } from "react";
import Card from "./Card";
import Heading from "../Heading";

const Education = () => {
    const [edus, setEdus] = useState([]);

    useEffect(() => {
        setEdus([
            {
                id: 1,
                orgName: "Insitute",
                pos: "Degree Name",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                id: 2,
                orgName: "Institute",
                pos: "Degree Name 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
        ]);
    }, []);

    return (
        <section id="Education">
            <Heading text="Education" />
            {edus.map((edu) => {
                return <Card content={edu} key={edu.id} />;
            })}
        </section>
    );
};

export default Education;
