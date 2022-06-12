import { IL_Healthy, IL_Nusantara, IL_Western } from 'assets'
import React from 'react'

const Explore = () => {
  return (
    <div className="bg-white p-4 mb-2">
      <h2 className="font-[600] text-base mb-5">Explore your taste</h2>
      <div className="flex">
        <div className="text-center flex flex-col items-center w-1/4 px-2">
          <IL_Healthy />
          <p className="mt-2 text-xs">Healthy Food</p>
        </div>
        <div className="text-center flex flex-col items-center w-1/4 px-2">
          <IL_Nusantara />
          <p className="mt-2 text-xs">Nusantara</p>
        </div>
        <div className="text-center flex flex-col items-center w-1/4 px-2">
          <IL_Western />
          <p className="mt-2 text-xs">Western</p>
        </div>
        <div className="text-center flex flex-col items-center w-1/4 px-2">
          <IL_Western />
          <p className="mt-2 text-xs">Oriental</p>
        </div>
      </div>
    </div>
  )
}

export default Explore
