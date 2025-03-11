'use client';
import { Sofa } from 'lucide-react'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function SearchAppartementInputs(){
  const [Place, setPlace] = useState<string>('');
  const router = useRouter();
  const q = useSearchParams();
  const Search_Place = q.get('place');
  useEffect(() => {
    if(Search_Place){
      setPlace(Search_Place)
    }
  }, [Search_Place])
  const HandleSearchPlace = () => {
    const queryParams = new URLSearchParams();
    
    if (Place.trim() !== '') {
      queryParams.set('place', Place);
    }
  router.push(`/searchapartment${queryParams.toString() ? '?' + queryParams.toString() : ''}`);
}
  return (
    <main className='w-full px-20'>
      <section className="relative flex shadow-lg shadow-neutral-400/50 gap-2 justify-center items-end p-1 rounded-lg bg-white text-blue-700">
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Place">Choose Place</label>
          <div className="w-full flex items-center gap-2 border-1 border-dashed pl-3 overflow-hidden rounded-lg">
              <Sofa />
              <input value={Place} onChange={(e) => setPlace(e.target.value)}
                className="outline-none placeholder:font-normal font-semibold w-full" id="Place" type="text" placeholder="Where are you going" />
                <button onClick={HandleSearchPlace} className='bg-blue-700 cursor-pointer text-neutral-100 py-3 px-6 font-semibold text-xl'>Search</button>
          </div>
        </div>
        <section className='absolute left-0 -bottom-16 w-1/2 rounded-lg overflow-hidden bg-red-500'>
          <div className='w-full bg-green-500 flex items-center justify-between'>
            <b>Casablanca</b>
            <div className='relative w-14 h-14 rounded-lg overflow-hidden'>
              <Image src='' alt='' fill className='object-cover'/>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
