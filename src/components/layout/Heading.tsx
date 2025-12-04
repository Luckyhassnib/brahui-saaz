import React from 'react'

const Heading = ({icon_one, heading,icon_two}:any) => {
  return (
    <div className='flex text-zinc-400 items-center justify-between'>
       <div className='flex items-center gap-x-2'>{ icon_one &&  (icon_one)} <h3 className='font-medium'>{heading}</h3></div>
       <div>{icon_two}</div>
    </div>
  )
}

export default Heading