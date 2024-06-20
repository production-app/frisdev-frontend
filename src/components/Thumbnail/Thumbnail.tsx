/* eslint-disable @next/next/no-img-element */
"use client";
import useDocumentStore from "@/zustand/store/store";
import { ImagePlay } from "lucide-react";
import type { DataSourceArray } from "photoswipe";
import "photoswipe/dist/photoswipe.css";
import { useMemo } from "react";
import { Gallery, GalleryProps, Item } from "react-photoswipe-gallery";

const uiElements: GalleryProps["uiElements"] = [
  {
    name: "bulletsIndicator",
    order: 9,
    isButton: false,
    appendTo: "wrapper",
    onInit: (el, pswpInstance) => {
      let prevIndex = -1;
      const thumbnails: HTMLElement[] = [];

      /* eslint-disable no-param-reassign */
      el.style.position = "absolute";
      el.style.bottom = "20px";
      el.style.left = "10px";
      el.style.right = "0";
      el.style.display = "grid";
      el.style.gridGap = "10px";
      el.style.gridTemplateColumns = "repeat(auto-fit, 40px)";
      el.style.gridTemplateRows = "repeat(auto-fit, 40px)";
      el.style.justifyContent = "center";
      /* eslint-enable no-param-reassign */

      const dataSource = pswpInstance.options.dataSource as DataSourceArray;

      for (let i = 0; i < dataSource.length; i++) {
        const slideData = dataSource[i];

        const thumbnail = document.createElement("div");
        thumbnail.style.transition = "transform 0.15s ease-in";
        thumbnail.style.opacity = "0.6";
        thumbnail.style.cursor = "pointer";
        thumbnail.onclick = (e: MouseEvent) => {
          const target = e.target as HTMLImageElement | HTMLDivElement;
          const thumbnailEl =
            target.tagName === "IMG"
              ? target.parentElement
              : (e.target as HTMLImageElement | HTMLDivElement);
          if (thumbnailEl) {
            pswpInstance.goTo(thumbnails.indexOf(thumbnailEl));
          }
        };

        const thumbnailImage = document.createElement("img");
        thumbnailImage.setAttribute("src", slideData.msrc || "");
        thumbnailImage.style.width = "100%";
        thumbnailImage.style.height = "100%";
        thumbnailImage.style.objectFit = "cover";

        thumbnail.appendChild(thumbnailImage);

        el.appendChild(thumbnail);

        thumbnails.push(thumbnail);
      }

      pswpInstance.on("change", () => {
        if (prevIndex >= 0) {
          const prevThumbnail = thumbnails[prevIndex];
          prevThumbnail.style.opacity = "0.6";
          prevThumbnail.style.cursor = "pointer";
          prevThumbnail.style.transform = "scale(1)";
        }

        const currentThumbnail = thumbnails[pswpInstance.currIndex];
        currentThumbnail.style.opacity = "1";
        currentThumbnail.style.cursor = "unset";
        currentThumbnail.style.transform = "scale(1.2)";

        prevIndex = pswpInstance.currIndex;
      });
    },
  },
];

const Thumbnail = () => {
  const documents = useDocumentStore((state) => state.documents);

  /**const images = documents.map(img => {
    return {
      src: img.path,
      thumbnail: img.path,
      width: 
    }
  }) */
  const images = useMemo(
    () => [
      { src: "/pt.png", thumbnail: "/pt.png", width: 310, height: 428 },
      {
        src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        thumbnail:
          "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        width: 1600,
        height: 1069,
      },
      { src: "/pt.png", thumbnail: "/pt.png", width: 310, height: 428 },
      {
        src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        thumbnail:
          "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        width: 1600,
        height: 1069,
      },
      {
        src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        thumbnail:
          "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        width: 1600,
        height: 1069,
      },
      {
        src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        thumbnail:
          "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        width: 1600,
        height: 1069,
      },
      {
        src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        thumbnail:
          "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
        width: 1600,
        height: 1069,
      },
    ],
    []
  );

  return (
    <Gallery
      withDownloadButton
      uiElements={uiElements}
      options={{ arrowNext: true, arrowPrev: true }}
    >
      <div className="scrollbar-hide grid grid-cols-1 justify-items-center overflow-auto items-center h-[100vh] space-y-4 p-4">
        {images.map((image, index) => (
          <Item<HTMLImageElement>
            key={index}
            original={image.src}
            thumbnail={image.thumbnail}
            width={image.width}
            height={image.height}
            caption={`Document ${index + 1}`}
          >
            {({ ref, open }) => (
              <div
                className="thumbnail group p-2 relative overflow-hidden group-hover:border group-hover:border-sky-900 border border-stone-200 rounded-md"
                ref={ref}
                onClick={open}
              >
                <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
                <div className="hidden animate-in animate-out group-hover:flex  absolute inset-0 z-10 bg-black/20 items-center justify-center">
                  <button className="bg-none w-8 h-8 p-2">
                    <ImagePlay />
                  </button>
                </div>
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};
export default Thumbnail;
