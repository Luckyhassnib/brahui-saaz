import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const MainLoader = () => {
  return (
    <div className='w-full col-span-4  h-64 flex justify-center items-center '>
      <Spinner />
    </div>
  )
}

export default MainLoader