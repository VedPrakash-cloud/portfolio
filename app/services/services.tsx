import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrop, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faAppStore, fab } from '@fortawesome/free-brands-svg-icons';
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(fas, far, fab, faCode);

export default function service(){
    return(
        <div id="service" className="px-10 md:px-30 py-10">
            <div className="container">
                <h1 className="sub-titles text-4xl font-semibold mb-10">My Services</h1>
                <div className="service-list md:flex grid grid-flow-col grid-rows-3 gap-5">
                    <div className="rounded-sm bg-[#262626] p-6 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faCode} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">Web Service</h2>
                        <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repudiandae blanditiis suscipit obcaecati vitae!</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                    <div className="rounded-sm bg-[#262626] p-6 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faCrop} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">UI/UX Design</h2>
                        <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repudiandae blanditiis suscipit obcaecati vitae!</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                    <div className="rounded-sm bg-[#262626] p-6 hover:bg-[#ff004f] duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <FontAwesomeIcon icon={faAppStore} className='text-4xl md:text-3xl mb-5' />
                        <h2 className="text-2xl font-semibold my-2">App Design</h2>
                        <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repudiandae blanditiis suscipit obcaecati vitae!</p>
                        <a href="#" className='text-sm'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}