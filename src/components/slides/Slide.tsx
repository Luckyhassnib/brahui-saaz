"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { albums } from "@/constant/albums";

import CustomCard from "../layout/CustomCard";
import { Magnetic } from "../ui/shadcn-io/magnetic";

function Slide({ type }: { type?: "album" | "artist" }) {
  return (
    <div className={`w-full  max-w-7xl mx-auto`}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {albums.map((album, index) => (
            <CarouselItem key={index} className="md:basis-1/7 lg:basis-1/7">
              {/* <Magnetic strength={0.1} onlyOnHover={false} disableOnTouch={false}> */}
                <CustomCard type={type} album={album} />
              {/* </Magnetic> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={` ml-10`} variant={"ghost"} />
        <CarouselNext className="mr-10" variant={"ghost"} />
      </Carousel>
    </div>
  );
}

export default Slide;
