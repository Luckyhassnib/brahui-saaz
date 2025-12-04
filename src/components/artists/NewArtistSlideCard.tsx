import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiPlayLargeFill } from "react-icons/ri";

const NewArtistSlideCard = ({ album, style }: any) => {
  return (
    <Link
      href={`/artist/${album.artist.replaceAll(" ", "-").toLowerCase()}`}
      className="relative group"
    >
      <Image
        src={album?.cover}
        className={`${style} group-hover:opacity-50 transition-all duration-300 ease-out rounded`}
        alt=""
        width={140}
        height={100}
      />

      <div className="absolute top-2 bottom-0 right-0 left-0 flex items-center justify-center">
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
  );
};

export default NewArtistSlideCard;
