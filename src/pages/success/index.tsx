import { Button } from 'antd'
import { IL_SUCCESS } from 'assets'
import { useRouter } from 'next/router'

const Success = () => {
  const { push } = useRouter()
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col w-screen h-screen pb-[120px] justify-center items-center">
        <IL_SUCCESS />
        <p className="text-2xl font-[600] mt-8">Order success</p>
        <p className="text-mono-light mt-1">Hang tight, your meals are already scheduled</p>
      </div>
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <Button className="w-full h-12 rounded-lg border-0 outline-none shadow-none bg-primary-dark text-base text-white font-[600]" onClick={() => push('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default Success
