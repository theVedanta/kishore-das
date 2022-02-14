import Header from "./Index/Header";
import About from "./Index/About";
import Consultancy from "./Index/Consultancy";
import Training from "./Index/Training";
import Testimonials from "./Index/Testimonials";
import Contact from "./Index/Contact";
import Footer from "./Footer";

const Index = () => {
    return (
        <main className="relative">
            <div className="main-container px-72 pt-16 blap:px-52 lap:px-32 lap:pt-10 tab:px-20 ph:px-6 ph:pt-3">
                <Header />
                <About />
                <Training />
                <Consultancy />
                <Testimonials />
                <Contact />
            </div>
            <Footer />
        </main>
    );
};

export default Index;
