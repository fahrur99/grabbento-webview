import AppIcon from 'components/icon'

const MysteryHeader = () => {
  return (
    <div className="bg-primary-dark p-4 pt-10 flex items-center gap-2">
      <AppIcon name="back" dimension={18} viewBox="0 0 10 18" />
      <div className="text-white text-base">Mystery Bento</div>
    </div>
  )
}

export default MysteryHeader
