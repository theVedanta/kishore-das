import "./styles/index.css";
import "./styles/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Blogs from "./components/Blog/Blogs";
import BlogPage from "./components/Blog/BlogPage";
import Admin from "./components/Admin/Admin";
import Error from "./components/Error";
import "notyf/notyf.min.css";
import "aos/dist/aos.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/blog" element={<Blogs />} />
                <Route exact path="/blog/:id" element={<BlogPage />} />
                <Route exact path="/admin" element={<Admin page={"CMS"} />} />
                <Route
                    exact
                    path="/admin/blogs"
                    element={<Admin page={"blog"} />}
                />
                <Route
                    exact
                    path="/admin/blogs/add"
                    element={<Admin page={"add"} />}
                />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
