import Link from 'next/link'
import React from 'react'

const HeadingBody = ({title, link}:any) => {
  return (
    <div className={`${link?"flex items-center justify-between py-2" : "col-span-4 py-4"}`}>
         <h2 className='font-semibold text-xl'>{title}</h2>
         <p className='text-sm hover:underline cursor-pointer'>{link && <Link href={link}>view All</Link>}</p> 
    </div>
  )
}

export default HeadingBody