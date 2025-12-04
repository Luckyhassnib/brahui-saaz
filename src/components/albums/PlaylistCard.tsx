import Image from 'next/image'
import React from 'react'
import { RiPushpinFill } from 'react-icons/ri'

const PlaylistCard = ({type, title, songs, src}:any) => {
  return (
    <div className='flex cursor-pointer gap-x-4 items-center'>
        <div className=''>
             <Image width={60} height={100} src={src} className={`max-w-5xl ${ type== "artist" ? "rounded-full" : "rounded"}`}  alt='albumname' />
        </div>
        <div className='flex flex-col gap-y-1'>
               <h3 className='font-medium '>{title}</h3>
               <span className='text-xs text-zinc-400 flex items-center  gap-x-2'> {type !=  "album" &&  type != 'artist'  && <RiPushpinFill className='text-white' size={17}  /> } { type == "album" ? `Album • ${title}` : type== 'artist' ? "Artist"  : ` Playlist  • ${songs?.length} songs` }</span>
        </div>
     
    </div>
  )
}

export default PlaylistCard