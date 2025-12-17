import Image from "next/image";
import { useState, useEffect } from "react";
import "./styles.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  
  type AlbumItem = {
    id:number;
    image:string;
    title:string;
    discription:string;
    url:string;
  }
  const [album, setAlbum] = useState<AlbumItem[]>([]);

  const imageToRender = isOpen ? album : album.slice(0,3);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAlbum(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="container px-10 md:px-25 py-10">
        <h1 className="text-4xl font-semibold text-white mb-5 md:mb-10">
          My Work
        </h1>
          <div className="work flex gap-10 justify-center flex-wrap">
          {imageToRender.map((item) => (
              <div key={item.id} className="relative w-2xs aspect-square rounded-xl hover:shadow-lg hover:shadow-[#ff004f]/50 overflow-hidden">
                <Image src={`/${item.image}`} alt="projects" fill priority className="object-cover" />
                <div className="layer">
                  <h3>{item.title}</h3>
                  <p>{item.discription}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="cursor-pointer py-2 px-5 my-5 border border-[#ff004f] justify-center hover:bg-[#ff004f] hover:shadow-lg hover:shadow-[#ff004f]/50 duration-900 ease-in-out rounded-lg font-semibold" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? "View Less" : "View More"}
        </button>
        </div>
      </div>
    </div>
  );
}
