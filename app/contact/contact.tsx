import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact(){
    return (
        <div>
            <div className="container">
                <div className="row grid md:flex gap-20 px-10 md:px-25 py-10 text-white">
                    <div className="contact-left">
                        <h1 className="text-4xl font-semibold text-white mb-5 md:mb-8">
                            Contact Me
                            </h1>
                        <div className="flex items-center gap-2 mb-5 text-md">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-[#ff004f]"/>
                            <p>vedprakash_chaubey@yahoo.com</p>
                        </div>
                        <div className="flex items-center gap-2 mb-5 text-md">
                            <FontAwesomeIcon icon={faPhoneVolume} className="text-[#ff004f]"/>
                            <p>+91 9910505104</p>
                        </div>
                        <div className="text-2xl text-[#ababab] mb-10">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="mr-5 hover:text-[#ff004f] duration-600 ease-in-out"/></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="mr-5 hover:text-[#ff004f] duration-600 ease-in-out"/></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub} className="hover:text-[#ff004f] duration-600 ease-in-out"/></a>
                        </div>
                        <a href="/Ved_prakash_1764755435311.pdf" download className="border border-[#ff004f] py-3 px-10 rounded-lg hover:bg-[#ff004f] duration-900 ease-in-out cursor-pointer hover:shadow-lg shadow-[#ff004f]/50">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form className="">
                            <input type="text" placeholder="your name" name="Name" required 
                            className="border border-[#262626] rounded-sm p-2 w-full bg-[#262626] outline-none mb-5" />
                            <input type="email" name="email" placeholder="your email" required
                            className="border border-[#262626] rounded-sm p-2 mb-5 w-full bg-[#262626] outline-none" />
                            <textarea name="message" rows={5} placeholder="your message" required
                            className="border border-[#262626] rounded-sm p-2 mb-5 w-full bg-[#262626] outline-none"></textarea>
                            <button 
                            className="py-2 px-7 font-semibold rounded-lg border border-[#ff004f] hover:bg-[#ff004f] duration-900 ease-in-out cursor-pointer hover:shadow-lg shadow-[#ff004f]/50">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}