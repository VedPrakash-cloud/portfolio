import Image from "next/image";
import { useState } from "react";

export default function About(){
    const [activeTab, setActiveTab] = useState<
        "skills" | "experience" | "education"
      >("skills");
    
      function openTab(tabName: "skills" | "experience" | "education") {
        setActiveTab(tabName);
      }

    return(
        <div className="px-10 md:px-25 py-10 md:flex justify-around flex-wrap">
          <div className="about-col-1 basis-1/4 mb-5">
            <Image
              src="/WhatsApp Image.jpeg"
              alt="About Me"
              width={500}
              height={20}
              className="rounded-2xl brightness-128 shadow-md shadow-white/30 duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>
          <div className="about-col-2 basis-2/3">
            <h1 className="text-4xl font-semibold text-white">About Me</h1>
            <p className="text-sm text-gray-400 opacity-70 py-2">
              As a developer who designs, I love building products that not only look great but also perform exceptionally. Currently exploring the depths of full-stack development and refining my design sense one pixel at a time.
              <br />
              Sales professional turned UI/UX Designer & Web Developer. I combine 10 years of client handling experience with modern tech stacks like React and Figma.
            </p>
            <div className="tab-titles flex text-gray-100 opacity-70">
              <p
                className={`tab-links mr-5 font-semibold cursor-pointer relative ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                onClick={() => openTab("experience")}
                className={`tab-links mr-5 font-semibold cursor-pointer relative ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
              >
                Experience
              </p>
              <p
                onClick={() => openTab("education")}
                className={`tab-links mr-5 font-semibold cursor-pointer relative ${
                  activeTab === "education" ? "active-link" : ""
                }`}
              >
                Education
              </p>
            </div>

            {activeTab === "skills" && (
              <div className="tab-contents my-5">
                <ul>
                  <li className="mb-2 text-gray-100 opacity-60 text-sm">
                    <span className="text-xs text-[#b54769] font-semibold">
                      UI/UX
                    </span>{" "}
                    <br /> Crafting intuitive interfaces for both Mobile & Web applications.
                    <br /> Strong grasp of Typography, Color Theory, and Visual Hierarchy to create aesthetic designs.
                    <br /> High-fidelity prototyping and user-centric wireframing.
                    <br/> Bridging the gap between design and development through pixel-perfect layouts.
                  </li>
                  <li className="mb-2 text-gray-100 opacity-60 text-sm">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Web Development
                    </span>{" "}
                    <br /> Building modern web apps using React.js, Next.js, and JavaScript (ES6+).
                    <br /> Expert in utility-first CSS with Tailwind CSS, along with Bootstrap and MUI for rapid UI development.
                    <br /> Focused on Responsive Design and Performance Optimization for a seamless user experience.
                    <br /> Familiar with SQL and MongoDB for handling basic data structures and API integrations.
                  </li>
                  <li className="mb-2 text-gray-100 opacity-60 text-sm">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Tools & Technologies
                    </span>{" "}
                    <br /> Figma (Primary), Adobe Photoshop.
                    <br /> VS Code, Git & GitHub for version control.
                    <br /> Vercel for Project Deployment.
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "experience" && (
              <div className="tab-contents my-5">
                <ul>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Experience
                    </span>{" "}
                    <br /> Designing Web interfaces
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Experience
                    </span>{" "}
                    <br /> Web App Development
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Experience
                    </span>{" "}
                    <br /> Designing App interfaces{" "}
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "education" && (
              <div className="tab-contents my-5">
                <ul>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Education
                    </span>{" "}
                    <br /> Designing Web interfaces
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Education
                    </span>{" "}
                    <br /> Web App Development
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Education
                    </span>{" "}
                    <br /> Designing App interfaces{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
    )
}