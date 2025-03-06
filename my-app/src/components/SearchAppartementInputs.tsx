import { Sofa } from 'lucide-react'
import React from 'react'

export default function SearchAppartementInputs() {
  return (
    <main className='w-full px-20'>
      <section className="flex shadow-lg shadow-neutral-400/50 gap-2 justify-center items-end p-1 rounded-lg bg-white text-blue-700">
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Place">Choose Place</label>
          <div className="w-full flex items-center gap-2 border-1 border-dashed p-3 rounded-lg">
              <Sofa />
              <input className="outline-none placeholder:font-normal font-semibold w-full" id="Place" type="text" placeholder="Where are you going" />
          </div>
        </div> 
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Check-In">Check in</label>
          <input className="w-full outline-none rounded-lg border-1 border-dashed p-3" id="Check-In" type="date" />
        </div>
        <div className="grow flex flex-col items-center">
        <label className="text-xl font-semibold" htmlFor="Check-Out">Check Out</label>
        <input className="w-full outline-none rounded-lg border-1 border-dashed p-3" id="Check-Out" type="date" />
        </div>
        <button className="bg-blue-700 text-white p-3 rounded-lg text-xl font-semibold cursor-pointer">Search</button>
      </section>
    </main>
  )
}
