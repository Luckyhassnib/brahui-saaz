import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center  bg-[#0C0C0C]'>
      <Spinner />
    </div>
  )
}

export default Loading