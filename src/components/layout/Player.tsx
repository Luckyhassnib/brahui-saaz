"use client"
import Image from 'next/image'
import { TiArrowSync } from "react-icons/ti";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { TbArrowsDiagonal2 } from "react-icons/tb";


import React from 'react'
import { FaBackward, FaForward, FaPause } from 'react-icons/fa'
import { RiCheckboxCircleFill, RiCheckboxCircleLine, RiHeart2Line, RiHeartLine, RiPauseCircleFill, RiPlayFill, RiRepeatFill, RiVolumeDownLine } from 'react-icons/ri'
import { TbWindowMaximize } from 'react-icons/tb'
import { Progress } from '../ui/progress'
import { Repeat2 } from 'lucide-react';

const Player = () => {
  return (
    <div className='grid grid-cols-12 p-6 w-full fixed bottom-0 bg-black left-0 right-0'>
       <div className='col-span-3 flex items-center gap-x-6'>
             <div className='flex gap-x-4 items-center'>
                  <div>
                     <Image src={"/singers/01.jpg"} width={60} height={60} alt={"album"} className='rounded-md'/>
                  </div>
                  <div>
                      <h3 className='font-medium'>Love Story</h3>
                      <div className='flex items-center gap-x-2'>
                       <span className='text-sm text-stone-400'>John Lenon</span>
                       <RiCheckboxCircleFill className='text-stone-400' size={20} />
                      </div>  
                  </div>
             </div>
             <div className='flex gap-x-4 text-stone-400'>
                    <RiHeartLine  size={24} />
                    <TbWindowMaximize   size={24} />
             </div>
       </div>
       <div className='col-span-6 flex flex-col items-center gap-y-4'>
             <div className='flex gap-x-6'>
                  <FaBackward size={20} />
                  <FaPause size={20} />
                  <FaForward  size={20} />
             </div>
             <div className='flex items-center text-stone-500 w-[70%] gap-x-3 justify-between'>
                <span>0:10</span>
                <Progress value={50} className="w-[90%] h-1 cursor-pointer" />
                <span>-3:10</span>
             </div>
       
       </div>
       <div className='col-span-3 flex items-center gap-x-4 justify-end '>
            <TiArrowSync  className='-rotate-6' size={20}   />
            <RiVolumeDownLine  className='' size={20}   />
            <Progress value={50} className="w-[20%] h-1 cursor-pointer" />
            <TbArrowsDiagonal2  className='rotate-90' size={20}   />
       </div>
    </div>
  )
}

export default Player