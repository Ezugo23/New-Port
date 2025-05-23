import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { ProjectPage } from "../components/ProjectPage"
import { ContactSec } from "../components/ContactSec"
import { Footer } from "../components/Footer"

export const Home = () => {
    return(
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle*/}
            <ThemeToggle/>

             {/* Background Effect*/}
             <StarBackground/>

              {/* Navbar*/}
               <NavBar/>
               {/* Main Content*/}
                <main>
                    <HeroSection/>
                    <About/>
                    <Skills/>
                    <ProjectPage/>
                    <ContactSec/>
                </main>
                {/* Footer*/}
                <Footer/>
        </div>
        </>
    )
}