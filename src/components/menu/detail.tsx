import { Button, Input, Skeleton } from 'antd'
import AppIcon from 'components/icon'
import { parseThousand } from 'helpers/formatter'
import { useMenuDetail } from 'hooks/menu/detail'
import Image from 'next/image'

const MenuDetail = () => {
  const { data, loading, time, close, quantity, setQuantity, remarks, setRemarks, addToBasket, isOnBasket } =
    useMenuDetail()
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[200px] bg-pepper-light">
        {data.thumbnail && <Image src={data.thumbnail} alt="" layout="fill" objectFit="cover" />}
        <div className="absolute top-8 left-4" onClick={close}>
          <AppIcon name="cancel" dimension={32} viewBox="0 0 32 32" />
        </div>
      </div>
      <div className="p-4 mb-2 bg-white">
        <div className="flex justify-between items-center text-xl mb-2">
          <h2 className="font-[600]">{data.name || 'Menu Name'}</h2>
          <p>Rp{parseThousand(data.price)}</p>
        </div>
        <div className="flex justify-between items-center text-xs text-mono-light">
          {loading && <Skeleton.Input size="small" />}
          <p>{data.merchantName}</p>
          <p>Gratis Ongkir</p>
        </div>
      </div>
      <div className="p-4 mb-2 bg-white">
        <div className="text-base flex items-center gap-2 mb-3">
          <p className="font-[600]">Description</p>
          <div className="bg-black w-1 h-1 rounded" />
          <p className="font-[300] text-mono-normal capitalize">{time}</p>
        </div>
        {loading && <Skeleton />}
        <p className="text-mono-light leading-normal">{data.description}</p>
      </div>
      <div className="p-4 mb-2 bg-white">
        <div className="text-base flex items-center gap-2 mb-3">
          <p className="font-[600]">Note to restaurant</p>
          <p className="text-xs font-[300] text-mono-normal">Optional</p>
        </div>
        <Input
          className="text-xs border-0 outline-none shadow-none px-0 h-12 border-b border-pepper-normal"
          placeholder="Add your request (subject to restaurant’s direction)"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        <div className="mt-4 flex justify-center items-center gap-4">
          <div onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}>
            <AppIcon name="minus" viewBox="0 0 48 48" dimension={32} />
          </div>
          <p className="text-[28px] min-w-[36px] text-center">{quantity}</p>
          <div onClick={() => setQuantity(quantity + 1)}>
            <AppIcon name="plus" viewBox="0 0 48 48" dimension={32} />
          </div>
        </div>
      </div>
      <div className="bg-white flex-grow" />
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <Button
          className={`w-full h-12 rounded-lg border-0 outline-none shadow-none ${
            isOnBasket && quantity === 0 ? 'bg-red-500' : 'bg-primary-dark'
          } text-base text-white font-[600]`}
          onClick={addToBasket}
        >
          {isOnBasket && quantity === 0 ? 'Remove from Basket' : 'Add to Basket'}
        </Button>
      </div>
    </div>
  )
}

export default MenuDetail
