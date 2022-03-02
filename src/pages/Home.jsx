
import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";

function Home(props) {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
        </div>
    );
}

export default Home;