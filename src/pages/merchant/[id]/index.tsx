import { Button, Input, Skeleton } from 'antd'
import AppIcon from 'components/icon'
import { parseThousand } from 'helpers/formatter'
import { useMerchantDetail } from 'hooks/merchant'
import Image from 'next/image'

const MerchantDetail = () => {
  const { data, loading, back, choose, time } = useMerchantDetail()
  console.log(data)
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[200px] bg-pepper-light">
        {data.thumbnail && <Image src={data.thumbnail} alt="" layout="fill" objectFit="cover" />}
        <div
          className="absolute top-8 left-4 w-8 h-8 bg-black opacity-50 flex justify-center items-center rounded-full"
          onClick={back}
        >
          <AppIcon name="back" dimension={16} viewBox="0 0 10 18" className="-ml-1" />
        </div>
      </div>
      <div className="p-4 mb-2 bg-white">
        <div className="p-4 shadow-[0_0_10px_rgba(165,165,165,0.25)] rounded-2xl">
          {loading && <Skeleton.Input size="small" />}
          <h4 className="font-[600] text-xl mb-[10px]">{data.name}</h4>
          <div className="flex justify-between items-center border-y border-b-pepper-normal py-[10px]">
            <div className="flex items-center gap-2">
              <AppIcon name="star" dimension={16} viewBox="0 0 12 11" />
              <p className="text-base">{data.rating}</p>
              <p className="text-xs text-mono-light">({data.reviews})</p>
              <div className="w-1 h-1 rounded bg-black" />
              <p className="text-xs text-mono-normal">Rating and Reviews</p>
            </div>
            <AppIcon name="back" dimension={12} viewBox="0 0 10 18" className="gray-stroke rotate-180" />
          </div>
          <div className="flex justify-between items-center border-b border-b-pepper-normal py-[10px]">
            <div className="flex items-center gap-2">
              <AppIcon name="star" dimension={16} viewBox="0 0 12 11" />
              <p className="text-xs text-mono-normal">Check for Available Offers</p>
            </div>
            <AppIcon name="back" dimension={12} viewBox="0 0 10 18" className="gray-stroke rotate-180" />
          </div>
          <div className="flex items-center gap-2 border-b-pepper-normal py-[10px]">
            <div className="w-3 h-3 rounded-full bg-[#FFEA32]" />
            <div className="bg-primary-dark text-white rounded px-2 py-1">{data.category}</div>
            <div className="w-1 h-1 rounded bg-black" />
            <div className="bg-primary-dark text-white rounded-full px-2 py-1">Gratis Ongkir</div>
          </div>
        </div>
      </div>
      <div className="p-4 mb-2 bg-white">
        <div className="text-base font-[600] mb-5">
          <span className="capitalize">{time}</span> Schedule This Week
        </div>
        {loading && <Skeleton />}
        {(data.meals || []).map((meal: any) => (
          <div key={meal.id} className="pb-4 mb-4 border-b border-pepper-normal last:pb-0 last:mb-0 last:border-0">
            <p className="mb-4 text-base">{meal.date}</p>
            <div className="flex gap-3">
              <div className="w-[120px] h-[120px] rounded-lg overflow-hidden bg-pepper-light">
                <Image src={meal.thumbnail} width={120} height={120} alt="" layout="responsive" objectFit="cover" />
              </div>
              <div>
                <p className="text-xs text-mono-light mb-1 flex items-center gap-2 capitalize">{time}</p>
                <p className="text-base mb-2">{meal.name}</p>
                <p className="text-base font-[600]">Rp{parseThousand(meal.price)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white flex-grow min-h-[96px]" />
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <Button
          className="w-full h-12 rounded-lg border-0 outline-none shadow-none bg-primary-dark text-base text-white font-[600]"
          onClick={choose}
        >
          Choose Package
        </Button>
      </div>
    </div>
  )
}

export default MerchantDetail
