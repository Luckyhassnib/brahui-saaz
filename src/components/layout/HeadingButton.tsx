import React from 'react'
const HeadingButton = ({label}:any) => {
  return (
    <button  className='rounded-full hover:text-stone-100 hover:bg-stone-700 transition-all ease duration-300 bg-stone-800 text-stone-300 py-1 cursor-pointer px-3 text-sm font-medium'>{label}</button>
  )
}

export default HeadingButton    