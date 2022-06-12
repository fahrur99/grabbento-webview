import { IL_GRAB_BENTO, IL_RECTANGLE } from 'assets'
import AppIcon from 'components/icon'
import React from 'react'

const Header = () => {
  return (
    <div className="home-header text-white pt-10 pl-4 pb-7 mb-2 relative z-0">
      <AppIcon name="back" dimension={16} viewBox="0 0 10 18" />
      <h1 className="text-2xl font-[600] text-white pt-4">Grab Bento</h1>
      <p className="pt-2">Easier to schedule your meal with us</p>
      <div className="absolute top-0 right-0 h-full overflow-hidden">
        <IL_GRAB_BENTO />
      </div>
      <div className="absolute bottom-0 left-0 h-full overflow-hidden -z-[1]">
        <IL_RECTANGLE />
      </div>
    </div>
  )
}

export default Header
