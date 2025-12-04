import Link from 'next/link'
import React from 'react'

const GenersCard = ({link,title,id}:any) => {
  return (
    <Link className='bg-neutral-900  text-stone-200 hover:bg-neutral-950 transition-all ease duration-300 px-5 py-3 border border-neutral-700 rounded-3xl' href={`/genres/${title.replaceAll(" ", '-').toLowerCase()}/${id}`}>
      {title}
    </Link>
  )
}

export default GenersCard