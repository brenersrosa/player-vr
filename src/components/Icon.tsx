import { ElementType } from 'react'

interface IconProps {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white hover:bg-opacity-20">
      <Icon className="h-5 text-white opacity-60" />
    </div>
  )
}
