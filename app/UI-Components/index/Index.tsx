import About from "./About/About"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Appointment from "./Appointment/Appointment"
import Feature from "./Feature/Feature"
import Marquee from "./Marquee/Marquee"
import WhyChoseUs from "./Why-Chose-Us/WhyChoseUs"
import Project from "./Project/Project"
import SpaicalCare from "./Spaical-Care/SpaicalCare"
import Testimonial from "./Testimonial/Testimonial"

export default function Index() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Appointment />
            <Feature />
            <Marquee />
            <WhyChoseUs />
            <Project />
            <SpaicalCare />
            <Testimonial />
        </>
    )
}