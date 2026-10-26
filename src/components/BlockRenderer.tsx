import type { Block } from "@/content/types";
import { getImageSize } from "@/lib/imageSize";
import { AgendaBlock } from "./blocks/AgendaBlock";
import { DirectoryBlock } from "./blocks/DirectoryBlock";
import { GalleryBlock } from "./blocks/GalleryBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { PartnerBlock } from "./blocks/PartnerBlock";
import { StatsBlock } from "./blocks/StatsBlock";
import { Callout, Heading, List, Paragraph, Qa, Quote } from "./blocks/TextBlocks";
import { VideoBlock } from "./blocks/VideoBlock";

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  const firstParagraph = blocks.findIndex((b) => b.type === "paragraph");
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "paragraph":
            return <Paragraph key={i} text={b.text} dropcap={i === firstParagraph} />;
          case "heading":
            return <Heading key={i} text={b.text} />;
          case "quote":
            return <Quote key={i} text={b.text} author={b.author} />;
          case "image":
            return <ImageBlock key={i} image={b} layout={b.layout} />;
          case "gallery":
            return <GalleryBlock key={i} images={b.images.map((im) => ({ ...im, ...getImageSize(im.src) }))} />;
          case "stats":
            return <StatsBlock key={i} items={b.items} />;
          case "qa":
            return <Qa key={i} question={b.question} answer={b.answer} />;
          case "callout":
            return <Callout key={i} title={b.title} text={b.text} />;
          case "list":
            return <List key={i} items={b.items} />;
          case "video":
            return <VideoBlock key={i} title={b.title} poster={b.poster} />;
          case "partner":
            return <PartnerBlock key={i} partnerId={b.partnerId} />;
          case "agenda":
            return <AgendaBlock key={i} events={b.events} />;
          case "directory":
            return <DirectoryBlock key={i} groups={b.groups} />;
        }
      })}
    </>
  );
}
