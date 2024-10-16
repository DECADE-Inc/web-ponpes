import React from "react";
import { Carousel } from "@material-tailwind/react";
import carousel_1 from "/carousel_images/1.png";
import carousel_2 from "/carousel_images/2.png";
import carousel_3 from "/carousel_images/3.png";
export default function Home() {
  return (
    <div className="mb-16">
      <Carousel
        className="border-t-0"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay={true}
        loop={true}
        transition={{ duration: 2.0 }}
        autoplayDelay={10000}
      >
        <img src={carousel_1} className="w-full object-cover" alt="" />
        <img src={carousel_2} className="w-full object-cover" alt="" />
        <img src={carousel_3} className="w-full object-cover" alt="" />
      </Carousel>
    </div>
  );
}
