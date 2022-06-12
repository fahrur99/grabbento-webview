import AppIcon from 'components/icon'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  const { push } = useRouter()
  return (
    <div className="bg-primary-dark text-white pt-10 pl-4 pb-3 mb-2 flex items-center gap-4">
      <div onClick={() => push('/')}>
        <AppIcon name="back" dimension={16} viewBox="0 0 10 18" />
      </div>
      <div>
        <p className="text-xs">Daily</p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-base font-[600]">My Home</p>
          <AppIcon name="dropdown" dimension={13} viewBox="0 0 13 6" className="fill-white" />
        </div>
      </div>
    </div>
  )
}

export default Header
