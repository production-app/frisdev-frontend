"use client";
import { Banner } from "@prisma/client";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface SliderComponentProps {
  banners: Banner[];
}

const SliderComponent = ({ banners }: SliderComponentProps) => {
  let sliderRef = useRef<Slider | null>(null).current;

  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  useEffect(() => {
    console.log(banners);
  }, [banners]);

  return (
    <div className="group relative w-full rounded-lg overflow-hidden  h-[300px]">
      <button
        onClick={next}
        className="hidden transition-all group-hover:flex hover:scale-110 absolute shadow-2xl inset-y-0 right-2 lg:right-4 my-auto w-8 h-8 z-30 bg-white text-sky-900 rounded-full items-center justify-center"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
      <button
        onClick={previous}
        className="hidden transition-all group-hover:flex hover:scale-110 absolute shadow-2xl inset-y-0 left-2 lg:left-4 my-auto w-8 h-8 z-30 bg-white text-sky-900 rounded-full items-center justify-center "
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      >
        {banners.map((slide) => {
          return (
            <div
              key={slide.title}
              className="bg-sky-900 text-black relative rounded-lg overflow-hidden h-[300px]"
            >
              {slide.image && (
                <Image
                  src={slide.image as string}
                  className="rounded-lg "
                  alt="banner_image"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
              <div
                className={clsx(
                  "absolute inset-x-0 bottom-0 z-20 h-full",
                  slide.image ? "bg-black/60" : "bg-transparent"
                )}
              >
                <div className="h-full w-full flex flex-col items-center leading-3 px-8 justify-center text-white">
                  <h1 className="text-4xl font-bold">{slide.title}</h1>
                  <p className="text-base w-[24rem] lg:w-[30rem] text-center mt-2">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
