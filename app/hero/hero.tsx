import Image from "next/image";
import React from "react";
import Typed from "typed.js";

export default function Hero(){

    const el = React.useRef(null);
    
      React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [
            "<i>UI/UX</i> Designer",
            "&amp; Web Developer",
            "&amp; React Next js",
          ],
          typeSpeed: 90,
          backSpeed:30,
          loop:true,
          backDelay: 1500,
          smartBackspace: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
      
    return(
        <div id="hero" className="grid md:flex mx-10 md:px-25 py-10 justify-between items-center">
        <div>
          <p className="font-semibold text-white text-sm">UI/UX Designer</p>
          <h1 className="text-4xl font-semibold text-white">
            Hi, I&apos;m <span className="text-[#ff004f]">Ved Prakash</span>{" "}
            from India
          </h1>
          <div className="App text-3xl font-semibold text-white">
            <span ref={el} />
          </div>
        </div>
        <div className="relative w-full md:w-sm aspect-square">
          <Image
          src="/Hero2.jpeg"
          alt="hero image"
          fill
          className="hero object-cover rounded-4xl mask-radial-[50%_52%] mask-radial-from-45%"
          priority
        />
        </div>
      </div>
    )
}