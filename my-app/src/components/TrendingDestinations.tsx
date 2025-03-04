import Image from 'next/image'
import React from 'react'



const URL_IMAGE_1: string = 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_2: string = 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_3: string = 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_4: string = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHwwfDB8fHwy';
export default function TrendingDestinations() {
  return (
    <main>
        <section className='w-full grid gap-2'>
        <h1 className='font-semibold text-2xl py-8'>
            Trending destinations
        </h1>
            <div className='grid grid-cols-3 gap-2 grid-rows-1'>
                <div className='relative grow min-w-1/3 h-[200px] rounded-lg overflow-hidden'>
                    <Image loading='lazy' src={URL_IMAGE_1} alt='Trending Destinations' fill className='object-cover'/>
                    <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>Marakkech </span>
                </div>
                <div className='relative grow min-w-1/3 h-[200px] rounded-lg overflow-hidden'>
                    <Image loading='lazy' src={URL_IMAGE_2} alt='Trending Destinations' fill className='object-cover'/>
                    <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>Agadir </span>
                </div>
                <div className='relative grow min-w-1/3 h-[200px] rounded-lg overflow-hidden'>
                    <Image loading='lazy' src={URL_IMAGE_3} alt='Trending Destinations' fill className='object-cover'/>
                    <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>Taza </span>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 grid-rows-1'>
            <div className='relative grow min-w-1/3 h-[200px] rounded-lg overflow-hidden'>
                <Image loading='lazy' src={URL_IMAGE_4} alt='Trending Destinations' fill className='object-cover'/>
                <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>Tangier </span>
            </div>
                <div className='relative grow min-w-1/3 h-[200px] rounded-lg overflow-hidden'>
                    <Image loading='lazy' src={URL_IMAGE_4} alt='Trending Destinations' fill className='object-cover'/>
                    <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>Fes </span>
                </div>
            </div>
            
            
        </section>
    </main>
  )
}
