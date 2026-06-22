import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
    return(
        <Box component="main">
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </Box>
    );
}


