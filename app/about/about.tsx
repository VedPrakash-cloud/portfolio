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
        <div className="px-25 py-10 md:flex justify-around flex-wrap">
          <div className="about-col-1 basis-1/4 mb-5">
            <Image
              src="/WhatsApp Image.jpeg"
              alt="About Me"
              width={500}
              height={20}
              className="rounded-2xl brightness-128 duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>
          <div className="about-col-2 basis-2/3">
            <h1 className="text-4xl font-semibold">About Me</h1>
            <p className="text-sm text-gray-400 opacity-70 py-2">
              Results-driven Team Leader and Sales Professional with over 10
              years of experience in the travel and customer service industry,
              specializing in international client handling, sales management,
              and team leadership. Proven expertise in managing operations for
              UK- and US-based clients, handling complex customer issues, and
              driving revenue through travel sales and service excellence
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
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      UI/UX
                    </span>{" "}
                    <br /> Designing Web interfaces
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      Web Development
                    </span>{" "}
                    <br /> Web App Development
                  </li>
                  <li className="mb-2 text-gray-100 opacity-70">
                    <span className="text-xs text-[#b54769] font-semibold">
                      App Development
                    </span>{" "}
                    <br /> Designing App interfaces{" "}
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