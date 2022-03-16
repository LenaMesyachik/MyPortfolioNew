import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactBanner from "../components/ContactBanner";

function Home(props) {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <ContactBanner/>
        </div>
    );
}

export default Home;