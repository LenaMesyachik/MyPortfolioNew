import './App.css';
import {NavMenu} from "./components/NavMenu";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React from "react";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavMenu/>
            <Routes>

                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Home/>}/>

            </Routes>
            <Footer/>
        </>
    );
}

export default App;
