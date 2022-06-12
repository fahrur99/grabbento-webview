import { Skeleton } from 'antd'
import AppIcon from 'components/icon'
import { parseThousand } from 'helpers/formatter'
import Image from 'next/image'
import React from 'react'

interface Props {
  merchants: any
  loading: boolean
}

const Merchant = ({ merchants, loading }: Props) => {
  return (
    <div className="bg-white p-4 mb-2">
      <div className="flex gap-2">
        <h2 className="font-[600] text-base mb-5">Top Merchants</h2>
        <AppIcon name="dropdown" dimension={13} viewBox="0 0 13 6" className="pt-1 fill-black" />
      </div>
      {loading && <Skeleton />}
      <div className="inline-flex overflow-x-auto overflow-y-hidden w-full hide-scrollbar">
        {merchants.map((merchant: any) => (
          <div key={merchant.id} className="w-[160px] mr-4 last:mr-0 relative">
            <div className="w-[160px] h-[160px] rounded-lg overflow-hidden">
              <Image src={merchant.thumbnail} width={160} height={160} alt="" layout="responsive" objectFit="cover" />
            </div>
            <p className="mt-2 text-base">{merchant.name}</p>
            <p className="mt-2 text-xs text-mono-normal">Rp. {parseThousand(merchant.price)}</p>
            <div className="absolute top-2 left-2 text-xs text-white py-1 px-2 bg-primary-dark rounded-md">
              {merchant.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Merchant
