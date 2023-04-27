import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
    return (
        <>
            <Router>
                <div>
                    {/* <Header /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    {/* <Footer /> */}
                </div>
            </Router>
            <ToastContainer />
        </>
    );
}

export default App;

