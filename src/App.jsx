import "./styles/index.css";
import "./styles/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Blogs from "./components/Blog/Blogs";
import BlogPage from "./components/Blog/BlogPage";
import Admin from "./components/Admin/Admin";
import "notyf/notyf.min.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/blog" element={<Blogs />} />
                <Route exact path="/blog/:id" element={<BlogPage />} />
                <Route exact path="/admin/ishaan" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
