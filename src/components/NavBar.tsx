import {
  CaseSensitive,
  ChevronLeft,
  ChevronRight,
  Copy,
  Lock,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
} from 'lucide-react'
import { Icon } from './Icon'

export function NavBar() {
  return (
    <nav className="flex gap-6 rounded-full bg-white bg-opacity-10 p-3 shadow-custom backdrop-blur-lg">
      <div className="flex gap-4">
        <Icon icon={PanelLeft} />
        <Icon icon={ChevronLeft} />
        <Icon icon={ChevronRight} />
      </div>

      <div className="flex flex-1 items-center justify-between rounded-full bg-black bg-opacity-10 px-3">
        <CaseSensitive className="h-4 text-white opacity-60" />

        <div className="flex items-center gap-1">
          <Lock className="h-4 text-white opacity-60" />

          <input
            type="text"
            name="url"
            id="url"
            className="bg-transparent text-white text-opacity-80 focus:outline-none"
            value="http://localhost"
          />
        </div>
        <Icon icon={RotateCw} />
      </div>

      <div className="flex gap-4">
        <Icon icon={Share} />
        <Icon icon={Plus} />
        <Icon icon={Copy} />
      </div>
    </nav>
  )
}
