import OwlCarousel from "react-owl-carousel2";
import { useRef } from "react";
import Testimonial from "./Testimonial";
import Heading from "../Heading";

const options = {
    items: 1,
    nav: false,
    autoplay: true,
    loop: true,
    dots: true,
    rewind: true,
    autoplayTimeout: 40000,
};

const Testimonials = ({ tests }) => {
    const testRef = useRef("test");

    console.log(tests);

    return (
        <section id="Testimonials">
            <Heading text="Testimonials" />
            <OwlCarousel ref={testRef} options={options}>
                {tests
                    ? tests.map((test) => {
                          return <Testimonial test={test} />;
                      })
                    : ""}
            </OwlCarousel>
        </section>
    );
};

export default Testimonials;
