import React, { useRef } from "react";
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-background py-16 px-4 sm:px-8 lg:pl-2">
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
        <div ref={scrollRef} className="flex overflow-hidden space-x-8">
          {galleryImages.map((image, index) => (
            <div
              key={`gallery_image-${index + 1}`}
              className="group relative min-w-[240px] sm:min-w-[301px] h-[320px] sm:h-[447px]"
            >
              <img
                src={image}
                alt="gallery"
                className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-75"
              />
              <BsInstagram className="absolute inset-0 m-auto text-gray-400 text-3xl cursor-pointer transition-colors duration-300 group-hover:text-white" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 w-full px-4 flex justify-between items-center">
          <BsArrowLeftShort
            className="text-golden text-3xl bg-background p-1 rounded hover:text-white cursor-pointer"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="text-golden text-3xl bg-background p-1 rounded hover:text-white cursor-pointer"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
