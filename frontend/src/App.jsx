import React from 'react'
import HomePage from './Pages/HomePage'
import {House,ChartColumn,Boxes,Paperclip} from 'lucide-react'
function App() {
  return (
    <div className='flex w-screen min-h-screen'>
      <div className="hidden sm:block w-[4%] bg-[#BBA782]">
        <div className='flex flex-col gap-y-5 text-white pt-50 pl-[20%] cursor-pointer '>
        <House/> <Boxes/> <Paperclip/> <ChartColumn/>
        </div>
      </div>
      <div className="w-[96%] "> <HomePage/></div>
    </div>
  )
}

export default App
