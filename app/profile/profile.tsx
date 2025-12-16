import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <div>
      <div className="container px-10 md:px-25 py-10">
        <h1 className="text-4xl font-semibold text-white mb-5 md:mb-10">
          My Work
        </h1>
        <div className="work-list rounded-lg">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="work">
              <Image
                src={"/medify.jpg"}
                alt="project-1"
                width={500}
                height={300}
                className="img rounded-lg"
                priority
              />
              <div className="layer">
                <h3>Medify-Healthcare Finder App</h3>
                <p>
                  A web application that helps users find hospitals across U.S. states with slot availability using a clean and user-friendly interface. React.js, JavaScript, HTML, CSS, REST API
                </p>
                <a href="https://medify-eta-hazel.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/QTrip-Dynamic.jpg"}
                alt="project-2"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>QTrip Dynamic</h3>
                <p>
                  QTrip Dynamic is a React-based travel web application that fetches destination and adventure data dynamically from APIs. It allows users to browse locations, apply filters, sort results, and view detailed adventure information with a responsive UI.
                </p>
                <a
                  href="https://qtrip-dynamic-wine-chi.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/Qtify.jpg"}
                alt="project-3"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Qtify-Music Album Explorer</h3>
                <p>
                  Qtify is a responsive music album web application built using React.js. It fetches real-time album data from a REST API and allows users to browse, search, and filter music albums seamlessly.
                </p>
                <a href="https://qtify-omega-ten.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/advice-generator.jpg"}
                alt="project-4"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Advice Generator-Random Advice App</h3>
                <p>
                  A simple web application that fetches and displays random advice from an API with a clean and responsive user interface. HTML, CSS, JavaScript, REST API.
                </p>
                <a href="https://advise-zeta.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/bot-AI.jpg"}
                alt="project-5"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Bot AI-Intelligent Chat Assistant</h3>
                <p>
                  An AI-powered chatbot that responds to user queries in real time, providing smart and interactive conversations through a simple interface. JavaScript, AI API, HTML, CSS
                </p>
                <a href="https://bot-ai-two-steel.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/browser-extension.jpg"}
                alt="project-6"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Browser Extension-Extension Manager UI</h3>
                <p>
                  A browser extension interface that allows users to manage and toggle extensions easily with a clean and responsive UI. HTML, CSS, JavaScript, JSON
                </p>
                <a
                  href="https://browser-extension-mauve-pi.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/expense-tracker.jpg"}
                alt="project-7"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Expense Tracker-Personal Finance App</h3>
                <p>
                  A web application that helps users track income and expenses, manage budgets, and view spending summaries through a simple interface. JavaScript, HTML, CSS, Local Storage.
                </p>
                <a
                  href="https://x-expense-tracker-teal.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/QKart.jpg"}
                alt="project-8"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>QKart-E-Commerce Web Application</h3>
                <p>
                  A full-featured e-commerce web application that allows users to browse products, add items to cart, and place orders with a smooth user experience. React.js, JavaScript, HTML, CSS, REST APIs
                </p>
                <a
                  href="https://rocky007ved-me-qkart-frontend-v2.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/QEvent.jpg"}
                alt="project-9"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>QEvent-Event Management Web App</h3>
                <p>
                  A web application that allows users to browse events, view details, and manage event information through a simple and interactive interface. React.js, JavaScript, HTML, CSS, REST APIs
                </p>
                <a href="https://qvent-project.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="work">
              <Image
                src={"/pricing-slider.jpg"}
                alt="project-10"
                width={500}
                height={300}
                priority
                className="img rounded-lg"
              />
              <div className="layer">
                <h3>Pricing Slider-Interactive UI Component</h3>
                <p>
                  An interactive pricing slider that dynamically updates pricing based on user input, providing a smooth and responsive user experience. HTML, CSS, JavaScript.
                </p>
                <a
                  href="https://pricing-slider-lake.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
