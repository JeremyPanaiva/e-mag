import Image from "next/image";
import { asset } from "@/lib/asset";
import { getImageSize } from "@/lib/imageSize";
import type { ImageRef } from "@/content/types";
import { Reveal } from "../Reveal";

export function ImageBlock({ image, layout = "inline" }: { image: ImageRef; layout?: "full" | "inline" }) {
  const { width, height } = getImageSize(image.src);
  const full = layout === "full";
  const portrait = height > width;
  return (
    <Reveal className={`${full ? "full" : portrait ? "" : "wide"} my-12 md:my-16`}>
      <figure className={full ? "" : "flex flex-col items-center"}>
        <Image
          src={asset(image.src)}
          alt={image.alt}
          width={width}
          height={height}
          sizes={full ? "100vw" : "(min-width:1024px) 960px, 100vw"}
          className={
            full
              ? "max-h-[85svh] w-full object-cover"
              : portrait
                ? "h-auto max-h-[75svh] w-auto max-w-full rounded-xl shadow-md"
                : "h-auto w-full rounded-xl"
          }
        />
        {(image.caption || image.credit) && (
          <figcaption className={`mt-3 w-full text-[0.95rem] leading-snug text-mute ${full ? "mx-auto max-w-[40rem] px-5" : ""}`}>
            {image.caption}
            {image.caption && image.credit && " "}
            {image.credit && <span className="opacity-80">{image.credit}</span>}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
