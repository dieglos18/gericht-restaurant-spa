import React, { useEffect, useRef, useState } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading.component";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  useEffect(() => {
    updateScrollButtons();

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:flex-row bg-background py-16 px-4 sm:px-8 lg:pl-2">
      <div className="flex-1 flex flex-col justify-center items-start px-8 min-w-[100%] sm:min-w-[500px]">
        <SubHeading title="Instagram" />
        <h1 className="text-7xl font-base capitalize text-golden mt-4">
          Photo gallery
        </h1>
        <p className="text-gray-400 text-base font-sans mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button
          type="button"
          className="mt-8 bg-golden text-background px-6 py-3 rounded-md text-base font-semibold font-base"
        >
          View More
        </button>
      </div>

      <div className="relative flex-1 w-full max-w-full mt-12 lg:mt-0 overflow-hidden ml-auto">
        <div ref={scrollRef} className="flex overflow-hidden space-x-8 px-1">
          {galleryImages.map((image, index) => (
            <div
              key={`gallery_image-${index + 1}`}
              className="group relative min-w-[240px] sm:min-w-[301px] h-[320px] sm:h-[447px] border border-grey rounded-md"
            >
              <img
                src={image}
                alt="gallery"
                className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-45"
              />
              <BsInstagram className="absolute inset-0 m-auto text-gray-400 text-3xl cursor-pointer transition-colors duration-300 group-hover:text-white" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 w-full px-4 flex justify-between items-center z-10">
          <BsArrowLeftShort
            className={`text-background text-4xl shadow-md bg-golden p-2 rounded transition-opacity duration-200 ${
              canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-30 cursor-default"
            }`}
            onClick={() => canScrollLeft && scroll("left")}
          />

          <BsArrowRightShort
            className={`text-background text-4xl shadow-md bg-golden p-2 rounded transition-opacity duration-200 ${
              canScrollRight ? "opacity-100 cursor-pointer" : "opacity-30 cursor-default"
            }`}
            onClick={() => canScrollRight && scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
