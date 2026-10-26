import Image from "next/image";
import { asset } from "@/lib/asset";

// "PÔLES" wordmark from the print logo + "ACTU" recomposed in thin capitals.
export function Logo({ height = 26, light = false }: { height?: number; light?: boolean }) {
  const width = Math.round((height * 2082) / 702);
  return (
    <span className="inline-flex items-end gap-[0.35em]" style={{ fontSize: height }} aria-label="Pôles Actu" role="img">
      <Image
        src={asset("/brand/logo-poles-actu-bandeau.png")}
        alt=""
        width={width}
        height={height}
        className={light ? "brightness-0 invert" : ""}
        style={{ height, width: "auto" }}
        priority
      />
      <span
        aria-hidden
        className={`font-extralight leading-[0.8] tracking-[0.14em] ${light ? "text-white" : "text-ink"}`}
        style={{ fontSize: "0.98em", marginBottom: "0.04em" }}
      >
        ACTU
      </span>
    </span>
  );
}
