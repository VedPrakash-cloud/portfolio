import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrop, faLayerGroup, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(fas, far, fab, faCode);

export default function service(){
    return(
        <div id="service" className="px-10 md:px-30 py-10 text-white">
            <div className="container">
                <h1 className="sub-titles text-4xl font-semibold mb-10">My Services</h1>
                <div className="service-list md:flex grid grid-flow-col grid-rows-3 gap-5">
                    <div className="rounded-sm md:bg-[#262626] p-6 bg-[#ff004f] hover:shadow-xl shadow-[#ff004f]/50 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faCode} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">Web Development</h2>
                        <p className='text-sm mb-5'>Building high-performance web applications using <strong>React.js and Next</strong>.js. I focus on writing scalable code and integrating databases like <strong>SQL/MongoDB</strong> to create functional, data-driven websites.</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                    <div className="rounded-sm md:bg-[#262626] p-6 bg-[#ff004f] hover:shadow-xl shadow-[#ff004f]/50 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faCrop} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">UI/UX Design</h2>
                        <p className='text-sm mb-5'>Designing intuitive user interfaces and meaningful experiences. I use Figma to create high-fidelity wireframes and interactive prototypes, keeping user psychology and modern design trends in mind.</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                    <div className="rounded-sm md:bg-[#262626] p-6 bg-[#ff004f] hover:shadow-xl shadow-[#ff004f]/50 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faLayerGroup} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">Frameworks & Styling</h2>
                        <p className='text-sm mb-5'>Expert in creating modern layouts using <strong>Tailwind CSS, Bootstrap, and Material UI (MUI)</strong>. I ensure that every project is fully responsive, delivering a pixel-perfect experience across all screen sizes.</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}