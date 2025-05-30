import { ArrowBigRight, ArrowBigRightDash, ArrowBigRightDashIcon, ArrowBigRightIcon, ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects = [
    {
       id: 1,
       title: "Downloadable Wallpaper WebApp",
       description: "A web app that allows users to download wallpapers. using Html, Css and JavaScript",
       image: "../Project/project-1.png",
       tags: ["Html", "Css", "JavaScript"],
       demoUrl: "https://ezugo23.github.io/wall/",
       githubUrl: "https://github.com/Ezugo23/wall",
    },
      {
       id: 2,
       title: "A Food Delivery Webapp for a company",
       description: "A web app that allows restaurant to accept food order from the users app. using react, tailwindcss, node.js, express.js, MongoDB",
       image: "../Project/projec-2.png",
       tags: ["React", "TailwindCss", "Node.Js"],
       demoUrl: "https://www.swifdrop.ng/",
       githubUrl: "#",
    },
     {
       id: 3,
       title: "A Banking App",
       description: "A Fintech app used for money transfers loan requirement, redeeming of gift cards and other banking services. using react, tailwindcss, Php",
       image: "../Project/project-3.png",
       tags: ["React", "TailwindCss", "PHP"],
       demoUrl: "https://getclear.ng/",
       githubUrl: "#",
    },
]
export const ProjectPage = () => {
    return(
        <>
        <section id="projects" className="py-24 px-4 relative">
           <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">
                    Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                        Here are some of my featured projects. I have worked on a lot of projects, 
                        but these are some of the most that are live crafted with attention to detail and user experience/performance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => {
                            return(
                                <div key={key}
                                     className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                        <div className="h-48 overflow-hidden">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                        </div>

                                        <div className="p-6">
                                          <div  className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tags) => (
                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                                   {tags} 
                                                </span>
                                            ))}
                                            </div>  
                                      

                                        <h3 className="text-x1 font-semibold mb-1">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                        <div className="flex justify-between item-center">
                                            <div className="flex space-x-3">
                                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <ExternalLinkIcon size={20}/>
                                                </a>
                                                <a href={project.githubUrl} 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                                >
                                                    <GithubIcon size={20}/>
                                                </a>
                                            </div>
                                        </div>
                                          </div>
                                     </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <a href="https://github.com/Ezugo23" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My GitHub <ArrowRight size={16}/>
                        </a>
                    </div>
           </div>
        </section>
        </>
    )
}