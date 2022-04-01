import Heading from "../Heading";

const About = ({ about }) => {
    return (
        <section id="About" data-aos="fade-up">
            <Heading text="About" />
            <p className="text-lg mt-10 blap:text-base lap:text-text-sm tab:text-xs ph:mt-5 ph:text-justify">
                {about ? about : ""}
            </p>
        </section>
    );
};

export default About;
