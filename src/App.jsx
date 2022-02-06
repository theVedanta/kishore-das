import "./styles/index.css";
// import BASE_API_URL from "./BASE_API_URL";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Index from "./components/Index";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
