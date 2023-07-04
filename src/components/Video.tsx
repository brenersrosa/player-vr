import { NavBar } from './NavBar'

export function Video() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <NavBar />

      <div className="aspect-video h-full max-h-[60vh] w-full max-w-5xl rounded-[32px] bg-white bg-opacity-10 p-3 shadow-custom backdrop-blur-lg"></div>
    </div>
  )
}
