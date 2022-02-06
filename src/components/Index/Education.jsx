import { useState, useEffect } from "react";
import Card from "./Card";

const Education = () => {
    const [edus, setEdus] = useState([]);

    useEffect(() => {
        setEdus([
            {
                orgName: "Insitute",
                pos: "Degree Name",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
            {
                orgName: "Institute",
                pos: "Degree Name 2",
                year: "2018 - 2020",
                p: "Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime nemo et odio excepturi et perferendis dolorem! Et voluptas consequatur in molestiae quisquam est dolorem odit hic illum distinctio ut voluptatum assumenda aut atque Quis id explicabo dolorum.",
                img: "/assets/kishoreji.png",
            },
        ]);
    }, []);

    return (
        <section>
            <h1 className="text-6xl text-blue font-serif mb-4">Education</h1>
            {edus.map((edu) => {
                return <Card content={edu} />;
            })}
        </section>
    );
};

export default Education;
