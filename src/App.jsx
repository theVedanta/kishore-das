import "./styles/index.css";
import "./styles/all.css";
// import BASE_API_URL from "./BASE_API_URL";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Index from "./components/Index";
import Blogs from "./components/Blog/Blogs";
import BlogPage from "./components/Blog/BlogPage";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/blog" element={<Blogs />} />
                <Route exact path="/blog/:id" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
