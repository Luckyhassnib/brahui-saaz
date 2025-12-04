import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WeekSongCard from "../WeekSongs/WeekSongCard";
import { albums } from "@/constant/albums";
import HeadingBody from "../layout/HeadingBody";

const WeekSongsSlice = ({cols}:any) => {
  return (
    <div className={`${cols}`}>
     <HeadingBody title={"Tracks of the Week"} />
      <Table>
        <TableHeader></TableHeader>
        <TableBody>
          <TableRow className="flex hover:bg-transparent flex-col gap-y-2">
            
           {
           albums.slice(0,5).map((album)=> (
           <WeekSongCard key={album.id} album={album} />
           ))
           }
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default WeekSongsSlice;
