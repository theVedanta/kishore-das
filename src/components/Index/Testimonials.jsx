import OwlCarousel from "react-owl-carousel2";
import { useRef } from "react";
import Testimonial from "./Testimonial";

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
            <h1 className="text-6xl text-blue font-serif mb-16">
                Testimonials
            </h1>
            <OwlCarousel ref={testRef} options={options}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </OwlCarousel>
        </section>
    );
};

export default Testimonials;
