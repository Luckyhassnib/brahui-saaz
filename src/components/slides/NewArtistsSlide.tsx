import { albums } from '@/constant/albums'
import React from 'react'
import NewArtistSlideCard from '../artists/NewArtistSlideCard'
import HeadingBody from '../layout/HeadingBody'
import { Button } from '../ui/button'

const NewArtistsSlide = ({cols}:any) => {

  let styles = ['rounded-tl-xl', 'rounded-tr-xl', 'rounded-bl-xl','rounded-br-xl']

  return (
    <div className={`${cols}`}>
    <HeadingBody title={"Recent Artists"} />
     <div className='flex flex-wrap gap-2 h-fit my-3 mb-4'>
         {albums.slice(0,4).map((album, index)=> {
           let style = styles[index]
           console.log(style)
           return (<NewArtistSlideCard style={style} album={album} key={album.id} />)
         })}
      </div>
      <Button className='w-full rounded-2xl p-6 ' variant={"secondary"}>More..</Button>
    </div>
  )
}

export default NewArtistsSlide