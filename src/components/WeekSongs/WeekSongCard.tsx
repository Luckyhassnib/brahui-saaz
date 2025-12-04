import React from 'react'
import { TableCell } from '../ui/table'
import { RiHeart2Fill, RiHeart3Fill, RiHeart3Line, RiHeartPulseFill, RiMusicAiFill, RiPlayFill } from 'react-icons/ri'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaHeart } from 'react-icons/fa6'

const WeekSongCard = ({album}:any) => {
  return (
    <li className='flex bg-neutral-900 rounded-full justify-between items-center'>
     <TableCell className="flex gap-x-4">
            <Image src={album?.cover} alt='' className='w-12 h-12 rounded-full' width={50} height={50}  />
            <div className='flex flex-col'>
                <span className='text-sm truncate text-neutral-500'>{album?.artist}</span>
                <h2 className='font-semibold text-md truncate'>{album?.title}</h2>
            </div>
      </TableCell>
     <TableCell className="flex gap-x-3 items-center justify-end ">
            <button className='flex items-center gap-x-2'>
               <RiMusicAiFill /> <p>{album.plays}</p>
            </button> 
            <div className='cursor-pointer flex items-center  border rounded-full'>
               <div className='pl-4 pr-2 flex justify-center items-center'>
                    <FaHeart  className='text-neutral-400' size={20}   />
               </div>
                <button className='p-4 bg-neutral-400 rounded-full'>
                  <RiPlayFill size={20} />
                </button>
            </div>
      </TableCell>
    </li>
  )
}

export default WeekSongCard