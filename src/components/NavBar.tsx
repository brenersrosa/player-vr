'use client'

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
import { FormEvent, useState } from 'react'

import { Icon } from './Icon'

type NavBarProps = {
  onVideoIdSubmit: (videoId: string | null) => void
}

export function NavBar({ onVideoIdSubmit }: NavBarProps) {
  const [url, setUrl] = useState(
    'https://www.youtube.com/watch?v=kbGRmBlC3yA&ab_channel=8KParadise',
  )

  function extractYouTubeVideoId(url: string): string | null {
    const pattern =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})(?:.*)?$/

    const match = url.match(pattern)
    if (match && match.length === 2) {
      return match[1]
    }
    return null
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const videoId = extractYouTubeVideoId(url)
    onVideoIdSubmit(videoId)
  }

  return (
    <nav className="z-10 flex gap-6 rounded-full bg-white bg-opacity-10 p-3 shadow-custom backdrop-blur-lg">
      <div className="flex gap-4">
        <Icon icon={PanelLeft} />
        <Icon icon={ChevronLeft} />
        <Icon icon={ChevronRight} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 items-center justify-between gap-6 rounded-full bg-black bg-opacity-10 px-3"
      >
        <CaseSensitive className="h-4 text-white opacity-60" />

        <div className="flex flex-1 items-center gap-1">
          <Lock className="h-4 text-white opacity-60" />

          <input
            type="text"
            name="url"
            id="url"
            className="flex-1 bg-transparent text-white text-opacity-80 focus:outline-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <Icon icon={RotateCw} />
      </form>

      <div className="flex gap-4">
        <Icon icon={Share} />
        <Icon icon={Plus} />
        <Icon icon={Copy} />
      </div>
    </nav>
  )
}
