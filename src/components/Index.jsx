import Header from "./Index/Header";
import About from "./Index/About";
import Experience from "./Index/Experience";
import Education from "./Index/Education";
import Testimonials from "./Index/Testimonials";
import Contact from "./Index/Contact";
import Footer from "./Footer";

const Index = () => {
    return (
        <>
            <div className="main-container px-72 pt-16">
                <Header />
                <About />
                <Experience />
                <Education />
                <Testimonials />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Index;
