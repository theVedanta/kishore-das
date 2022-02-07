import OwlCarousel from "react-owl-carousel2";
import { useRef } from "react";
import Testimonial from "./Testimonial";
import Heading from "./Heading";

const options = {
    items: 1,
    nav: false,
    autoplay: true,
    loop: true,
    dots: true,
    rewind: true,
};

const Testimonials = () => {
    const testRef = useRef("test");

    return (
        <section id="Testimonials">
            <Heading text="Testimonials" />
            <OwlCarousel ref={testRef} options={options}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </OwlCarousel>
        </section>
    );
};

export default Testimonials;
