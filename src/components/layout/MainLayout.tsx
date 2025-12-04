"use client"
import React from 'react'
import {Menus} from "@/constant/menu"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Heading from './Heading'
import { RiAddFill, RiBuilding3Line, RiFileCheckFill, RiPulseLine, RiSearchLine, RiSpeakerFill } from 'react-icons/ri'
import HeadingButton from './HeadingButton'
import PlaylistCard from '../albums/PlaylistCard'
import { Button } from '../ui/button'
import Header from './Header'
import Player from './Player'
import { Suspense } from 'react'
import MainLoader from './MainLoader'
import Footer from './Footer'
const MainLayout = ({children}:{children:React.ReactNode}) => {


  const pathname = usePathname()
  return (
       <div className='flex flex-col gap-y-2'>
       <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg flex gap-x-2 bg-black  "
    >
      <ResizablePanel defaultSize={19} className='h-[calc(88vh)]'>
        <div className="flex flex-col gap-y-2 h-full">
             <div className='bg-[rgb(12,12,12)] flex p-4 items-center rounded-lg h-44 inset-shadow-sm inset-shadow-zinc-950'>
                <nav>
                   <ul className='flex flex-col gap-y-4'>
                        {Menus.map(({id, icon,link,label})=> {
                        
                        let active = pathname === link && pathname.startsWith(link) ? "text-white" : "text-zinc-400"
                        
                        return (
                           <li key={id} className={`shadow font-medium ${active}`}>
                           <Link className='flex items-center gap-x-4' href={`${link}`}>{icon} {label} </Link>
                           </li>
                        )
                        })}
                   </ul>
                </nav>
             </div>
             <div className='bg-[#0c0c0c] flex flex-col gap-y-4 p-4 rounded-lg h-full inset-shadow-sm inset-shadow-zinc-950'>
             
                  <Heading icon_one={<RiSpeakerFill   size={20}  />} icon_two={<RiSearchLine size={20} />} heading={" Your Library"} />
             
                   <div className='playlist-container flex  gap-2 '>
                  
                         <HeadingButton label={"Playlist"} />
                         <HeadingButton label={"Albums"} />
                         <HeadingButton label={"Podcasts"} />
                   </div>
                   
                   <div className='flex flex-col gap-y-6 justify-between h-full '>
                       <div className='flex flex-col gap-y-6'>
                       <PlaylistCard songs={[]} src={"/singers/01.jpg"} type={"album"} title={"Liked Songs"} />
                       <PlaylistCard songs={[{},{}]}  src={"/singers/02.jpg"} type={"playlist"} title={"TopSongs - Global"} />
                       <PlaylistCard songs={[{},{}]}  src={"/singers/06.jpg"} type={"artist"} title={"Khumari a khano na"} />
                       <PlaylistCard songs={[{},{}]}  src={"/singers/03.jpg"} type={"album"} title={"Brahui Fusion Reloaded"} />
                       <PlaylistCard songs={[{},{}]}  src={"/singers/04.jpg"} type={"playlist"} title={"TopSongs - Global"} />
                       <PlaylistCard songs={[{},{}]}  src={"/singers/05.jpg"} type={"artist"} title={"TopSongs - Global"} />
                       </div>
                       <div>
                         <Button className='w-full cursor-pointer  text-white rounded-full p-6 bg-stone-900 hover:bg-stone-800 '><RiAddFill size={20} />New playlist</Button>
                       </div>
                   </div>

             </div>
        </div>
      </ResizablePanel>
      <ResizablePanel defaultSize={100}>
        <ResizablePanelGroup direction="horizontal" className='flex gap-2'>
          <ResizablePanel defaultSize={75} className='bg-[#0c0c0c] rounded-lg inset-shadow-sm inset-shadow-zinc-950'>
            <div className="main-body flex flex-col gap-y-6">
                   <Header />
                     {children}    
                     <Footer />
            </div>
          </ResizablePanel>
          <ResizablePanel defaultSize={15} className='bg-[#0c0c0c] rounded-lg inset-shadow-sm inset-shadow-zinc-950'>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    
    <ResizablePanelGroup direction="horizontal" className='bg-black'>
          <ResizablePanel defaultSize={75}>
          <div className="h-20 flex fixed bottom-0 items-center justify-center">
           <Player />
          </div>
          </ResizablePanel>
      </ResizablePanelGroup>
       </div>
  )
}

export default MainLayout