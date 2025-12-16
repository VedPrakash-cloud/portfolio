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
        <div className="flex px-10 md:px-10 items-center md:justify-around">
        <div>
          <p className="font-semibold text-white text-xs md:text-sm">UI/UX Designer</p>
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Hi, I&apos;m <span className="text-[#ff004f]">Ved Prakash</span>{" "}
            from India
          </h1>
          <div className="App text-lg md:text-3xl font-semibold text-white">
            <span ref={el} />
          </div>
        </div>
        <Image
          src="/white-background-Photoroom.png"
          alt="hero image"
          width={300}
          height={20}
          className="hero mask-radial-[100%_32%] mask-radial-from-75% mask-radial-at"
          priority
        />
      </div>
    )
}