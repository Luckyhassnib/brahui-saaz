"use client";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RiPlayLargeFill, RiPlayMiniFill } from "react-icons/ri";

const CustomCard = ({
  type,
  album,
}: {
  type?: "artist" | "album";
  album: any;
}) => {
  return (
    <Card
      className={`${
        type == "artist" ? "rounded-full" : ""
      } bg-transparent border-0 group`}
    >
      <Link
        href={`/artist/${album.artist.toLowerCase().replaceAll(" ", "-")}`}
        className="flex flex-col gap-y-4  relative"
      >
        <Image
          src={album.cover}
          alt=""
          width={300}
          className={`${
            type == "artist" ? "rounded-full" : "rounded-xl"
          } w-full h-full group-hover:opacity-50   transition-all duration-300 ease-out `}
          height={300}
        />
        <div
          className={` ${type == "artist" ? "text-center" : "text-start"}  `}
        >
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            {type == "artist"
              ? `${
                  album.artist.length > 15
                    ? `${album.artist.slice(0, 12)}`
                    : `${album.artist}`
                }`
              : `${album.title}`}
          </h3>
          <span className="text-sm text-stone-400">
            {type == "artist" ? `${album.plays} Plays` : `${album.artist}`}
          </span>
        </div>
        <div className="absolute -top-12 bottom-0 right-0 left-0 flex items-center justify-center">
          <div
            className="
       transform 
      transition-all duration-300 ease-out
      opacity-0 translate-y-5 invisible
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
    "
          >
            <div className="polygon bg-black text-white flex justify-center items-center">
              <RiPlayLargeFill size={20} />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CustomCard;
