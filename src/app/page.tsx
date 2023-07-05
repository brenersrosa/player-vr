'use client'

import { SideMenu } from '@/components/SideMenu'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[url('https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat">
      <div className=" flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-30">
        <div className="flex w-full max-w-[1048px] flex-col gap-6">
          <div className="flex w-full items-center justify-center gap-6">
            <SideMenu />
            <Video />
          </div>
        </div>
      </div>
    </main>
  )
}
