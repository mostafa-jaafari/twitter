'use client';
import { Sofa } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type InitialPlaceType = {
  InitialPlace: string;
  InitialCheckIn: string;
  InitialCheckOut: string;
}
export default function SearchAppartementInputs({InitialPlace, InitialCheckIn, InitialCheckOut}: InitialPlaceType) {
  const [Inputs, setInputs] = useState({
    place: InitialPlace,
    checkin: InitialCheckIn,
    checkout: InitialCheckOut,
  })
  const Router = useRouter();
  const HandleSubmitSearch = () => {
    const isAllEmpty = Object.values(Inputs).every(value => value === '');
    if (isAllEmpty) {
      Router.push('/searchappartement');
    } else {
      const queryParams = new URLSearchParams();
    
      if (Inputs.place.trim()) queryParams.append('place', Inputs.place);
      if (Inputs.checkin) queryParams.append('checkin', Inputs.checkin);
      if (Inputs.checkout) queryParams.append('checkout', Inputs.checkout);
      const queryString = queryParams.toString();
      Router.push(`/searchappartement${queryString ? '?' + queryString : ''}`);
    }    
  }
  return (
    <main className='w-full px-20'>
      <section className="flex shadow-lg shadow-neutral-400/50 gap-2 justify-center items-end p-1 rounded-lg bg-white text-blue-700">
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Place">Choose Place</label>
          <div className="w-full flex items-center gap-2 border-1 border-dashed p-3 rounded-lg">
              <Sofa />
              <input value={Inputs.place} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({...Inputs, place: e.target.value})} className="outline-none placeholder:font-normal font-semibold w-full" id="Place" type="text" placeholder="Where are you going" />
          </div>
        </div> 
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Check-In">Check in</label>
          <input value={Inputs.checkin} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({...Inputs, checkin: e.target.value})} className="w-full outline-none rounded-lg border-1 border-dashed p-3" id="Check-In" type="date" />
        </div>
        <div className="grow flex flex-col items-center">
        <label className="text-xl font-semibold" htmlFor="Check-Out">Check Out</label>
        <input value={Inputs.checkout} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({...Inputs, checkout: e.target.value})} className="w-full outline-none rounded-lg border-1 border-dashed p-3" id="Check-Out" type="date" />
        </div>
        <button onClick={HandleSubmitSearch} className="bg-blue-700 text-white p-3 rounded-lg text-xl font-semibold cursor-pointer">Search</button>
      </section>
    </main>
  )
}
