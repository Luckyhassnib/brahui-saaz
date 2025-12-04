import React from "react";
import GenersCard from "../geners/GenersCard";
import { genres } from "@/constant/albums";
import Link from "next/link";
import HeadingBody from "../layout/HeadingBody";
import { Button } from "../ui/button";

const SlideSection4 = ({cols="col-span-4"}:any) => {
  return (
    <div className={`${cols}`}>
    <HeadingBody title={"Geners"} />
      <div className="">
        <div className="flex flex-wrap gap-x-1 gap-y-2 mb-12">
          {genres.map((gener) => (
            <GenersCard
              title={gener.name}
              id={gener.id}
              key={gener.id}
              link={gener.name}
            />
          ))}
        </div>

        <div className="">
          <Button className='w-full rounded-2xl p-6' variant={"secondary"}> All Genres </Button>
        </div>
      </div>
    </div>
  );
};

export default SlideSection4;
