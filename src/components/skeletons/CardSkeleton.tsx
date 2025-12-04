import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CardSkeleton = ({type}:any) => {
  return (
    <div className={`flex flex-col gap-y-4 ${type == "artist" ?  "items-center" : ""}`}>
      <Skeleton className={`w-42 h-42 ${type == 'artist' ? "rounded-full" : ""}`} />
      <div className={`flex flex-col gap-y-2 ${type !== 'artist' ? "items-start" : "items-center"} `}>
        <Skeleton className="rounded-none h-4 w-[120px]" />
        <Skeleton className="h-4 w-24 rounded-none" />
      </div>
    </div>
  )
}

export default CardSkeleton