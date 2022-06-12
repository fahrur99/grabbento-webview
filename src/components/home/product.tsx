import { IL_Daily, IL_Mystery, IL_Orders, IL_Package } from 'assets'
import AppIcon from 'components/icon'
import { useRouter } from 'next/router'
import React from 'react'

const Product = () => {
  const { push } = useRouter()
  return (
    <div className="bg-white p-4 mb-2">
      <div className="flex items-center gap-3 mb-4">
        <AppIcon name="location" />
        <div>
          <p className="text-mono-normal text-xs">Delivery To</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-base font-[600]">My Home</p>
            <AppIcon name="dropdown" dimension={13} viewBox="0 0 13 6" className="fill-black" />
          </div>
        </div>
      </div>
      <div className="shadow-[0_0_10px_rgba(165,165,165,0.25)] p-4 rounded-2xl flex">
        <div
          className="text-center flex flex-col items-center w-1/4 px-2 cursor-pointer"
          onClick={() => push('/daily')}
        >
          <IL_Daily />
          <p className="mt-2 text-xs">Daily</p>
        </div>
        <div
          className="text-center flex flex-col items-center w-1/4 px-2 cursor-pointer"
          onClick={() => push('/package')}
        >
          <IL_Package />
          <p className="mt-2 text-xs">Package</p>
        </div>
        <div
          className="text-center flex flex-col items-center w-1/4 px-2 cursor-pointer"
          onClick={() => push('/mystery')}
        >
          <IL_Mystery />
          <p className="mt-2 text-xs">Mystery Bento</p>
        </div>
        <div
          className="text-center flex flex-col items-center w-1/4 px-2 cursor-pointer"
          onClick={() => push('/orders')}
        >
          <IL_Orders />
          <p className="mt-2 text-xs">Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Product
