import Home from "./Home";
import Navbar from "./Navbar";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

    return (
        <>
            <Navbar/>
            <div className="w-full mx-auto my-container">
                <Home/>
                <Menu/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default App
