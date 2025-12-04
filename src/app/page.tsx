import HeadingBody from "@/components/layout/HeadingBody";
import Slide from "@/components/slides/Slide";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Suspense } from "react";
import MainPage from "@/components/pages/MainPage";


export default function Home() {
  return (
   <ScrollArea  className="h-[76vh]  w-full">
       <MainPage />
   </ScrollArea>
  );
}
