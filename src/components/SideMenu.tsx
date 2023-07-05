import { AppWindow, PlayCircle, Rocket, Search } from 'lucide-react'
import { Icon } from './Icon'

export function SideMenu() {
  return (
    <div className="z-10 flex flex-col gap-3 rounded-full bg-white bg-opacity-10 p-3 shadow-custom backdrop-blur-lg">
      <Icon icon={PlayCircle} />
      <Icon icon={Rocket} />
      <Icon icon={AppWindow} />
      <Icon icon={Search} />
    </div>
  )
}
