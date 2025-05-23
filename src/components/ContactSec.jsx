import { Instagram, LinkedinIcon, LocateIcon, MailQuestion, PhoneIncoming, SendIcon, TwitterIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { Description } from "@radix-ui/react-toast";
import { useState } from "react";

export const ContactSec = () => {
    const {toast} = useToast();
    const {isSubmit, setIsSubmit} = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmit(true)
        setTimeout(() => {
                toast({
                    title: "Message Sent",
                    description: "Thank you for your message. will get back to you shortly"
                })
                setIsSubmit(false)
        }, 1500)
        
    }
    return(
        <>
            <section id="contact" className="py-24 px-4 relative bg-s">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In 
                        <span className="text-primary">Touch</span>
                        </h2>

                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? feel free to reach out.
                            I'm always open to discussing new opportunities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                    <div className="space-y-6 justify-center">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                <MailQuestion className="h-6 w-6 text-primary"/>
                                                </div>
                                                <div>
                                                    <h4>Email</h4>
                                                    <a href="mailto:iwuchukwuezugo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                                        iwuchukwuezugo@gmail.com
                                                    </a>
                                                </div>
                                            </div>

                                             <div className="flex items-start space-x-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                <PhoneIncoming className="h-6 w-6 text-primary"/>
                                                </div>
                                                <div>
                                                    <h4>Phone</h4>
                                                    <a href="tel:08117205697" className="text-muted-foreground hover:text-primary transition-colors">
                                                       08117205697
                                                    </a>
                                                </div>
                                            </div>

                                             <div className="flex items-start space-x-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                <LocateIcon className="h-6 w-6 text-primary"/>
                                                </div>
                                                <div>
                                                    <h4>Location</h4>
                                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                                       Toyin Street, Ikeja Lagos
                                                    </a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="pt-8">
                                        <h4 className="font-medium mb-4">Connect With Me</h4>
                                        <div className="flex space-x-4 justify-center">
                                            <a href="" target="_blank">
                                                <LinkedinIcon/>
                                            </a>
                                            <a href="" target="_blank">
                                                <TwitterIcon/>
                                            </a>
                                            <a href="" target="_blank">
                                                <Instagram/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card p-8 rounded-lg shadow-x5" onSubmit={(handleSubmit)}>
                                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                                            <form action="" className="space-y-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                                    <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                                                    placeholder="Phantom topic...."
                                                    />
                                                </div>
                                                   <div>
                                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                                                    <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                                                    placeholder="Phantom@gmail.com...."
                                                    />
                                                </div>
                                                    <div>
                                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                                    <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                                    placeholder="Helllo i have a project...."
                                                    />
                                                </div>

                                                <button 
                                                type="submit"
                                                disabled={isSubmit}
                                                className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                                                    
                                                )}>
                                                    {isSubmit ? "Sending..." : "Send Message"}
                                                        <SendIcon size={16}/>
                                                </button>
                                            </form>
                                </div>
                        </div>
                </div>
            </section>
        </>
    )
}