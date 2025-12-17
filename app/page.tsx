"use client";
import Service from "./services/services";
import About from "./about/about";
import Image from "next/image";
import Hero from "./hero/hero";
import Profile from "./profile/profile";
import Contact from "./contact/contact";
import { faBars, faCode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

library.add(faCode);

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    const handleTouch = (e:TouchEvent) =>{
      if(isActive){
        e.preventDefault();
      }
    }
    if(isActive){
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleTouch, {passive:false});
    } else{
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", handleTouch)
    }

    return()=>{
      document.removeEventListener("touchmove",handleTouch);
    }
  },[isActive])

  return (
    <div className="bg-black">
      <nav className="flex justify-between md:justify-around items-center bg-black p-4">
        <Image src="/logo.svg" alt="logo" width={300} height={20} priority />
        <ul className="hidden md:flex gap-15 cursor-pointer">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div
          className="ham md:hidden text-2xl text-white"
        >
          {!isActive && (
            <FontAwesomeIcon icon={faBars} onClick={() => setIsActive(true)}/>
          )}
          {isActive && (
            <ul 
            className="md:hidden cursor-pointer text-white relative z-[9990]">

              <FontAwesomeIcon 
              icon={faXmark} 
              onClick={()=>setIsActive(false)} 
              className="fixed top-6 right-6 text-3xl z-[99999] cursor-pointer" 
              />
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Hero />
      <About />
      <Service />
      <Profile />
      <Contact />
    </div>
  );
}
