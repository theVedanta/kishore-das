import Header from "./Index/Header";
import About from "./Index/About";
import Experience from "./Index/Experience";
import Education from "./Index/Education";
import Footer from "./Footer";

const Index = () => {
    return (
        <>
            <div className="main-container px-72 pt-8">
                <Header />
                <About />
                <Experience />
                <Education />
            </div>
            <Footer />
        </>
    );
};

export default Index;
