import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import NotFound from "./pages/notfound";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css"; 

function App() {
    return (
        <div className="app-container"> 
            <Router>
                <Header />
                <main className="container mt-4"> 
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

