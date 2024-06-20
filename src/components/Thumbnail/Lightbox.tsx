import { Eye } from "lucide-react";
import { Gallery, Item } from "react-photoswipe-gallery";

interface LightboxProps {
  image: { src: string; thumbnail: string; width: number; height: number };
}

const Lightbox = ({ image }: LightboxProps) => {
  return (
    <Gallery withDownloadButton options={{ arrowNext: true, arrowPrev: true }}>
      <Item<HTMLImageElement>
        original={image.src}
        thumbnail={image.thumbnail}
        width={image.width}
        height={image.height}
        caption={`Document ${image.src}`}
      >
        {({ ref, open }) => (
          <button
            ref={ref as any}
            onClick={open}
            className="border h-8 w-8 flex items-center justify-center rounded-sm p-2 text-muted-foreground"
          >
            <Eye />
          </button>
        )}
      </Item>
    </Gallery>
  );
};

export default Lightbox;
