import { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export function Video() {
  const [videoId, setVideoId] = useState<string | null>(null)

  function handleVideoIdSubmit(id: string | null) {
    setVideoId(id)
  }

  useEffect(() => {
    // const initialVideoId = 'qC0vDKVPCrw'
    const initialVideoId = 'kbGRmBlC3yA'
    setVideoId(initialVideoId)

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    let player: any
    let ambientLight: any

    window.onYouTubeIframeAPIReady = function () {
      player = new window.YT.Player('video', {
        videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })

      ambientLight = new window.YT.Player('ambient-light', {
        videoId,
        events: {
          onReady: onAmbientLightReady,
          onStateChange: onAmbientLightStateChange,
        },
      })
    }

    function onAmbientLightReady(event: any) {
      event.target.mute()
    }

    function onAmbientLightStateChange(event: any) {}

    function onPlayerReady(event: any) {
      event.target.playVideo()
    }

    function onPlayerStateChange(event: any) {
      switch (event.data) {
        case window.YT.PlayerState.PLAYING:
          if (!ambientLight) return
          ambientLight.seekTo(event.target.getCurrentTime())
          ambientLight.playVideo()
          break
        case window.YT.PlayerState.PAUSED:
          if (!ambientLight) return
          ambientLight.seekTo(event.target.getCurrentTime())
          ambientLight.pauseVideo()
          break
      }
    }
  }, [videoId])

  return (
    <div className="flex flex-1 flex-col gap-6">
      <NavBar onVideoIdSubmit={handleVideoIdSubmit} />

      <div className="relative aspect-video h-full w-full max-w-5xl rounded-[32px] bg-white bg-opacity-10 p-[2px] shadow-custom backdrop-blur-lg">
        <div
          id="video"
          className="h-full w-full rounded-[32px] border-inherit"
        ></div>
        <div
          id="ambient-light"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-110 rounded-[32px] border-inherit opacity-50 shadow-box blur-[80px] saturate-[300%]"
        ></div>
      </div>
    </div>
  )
}
