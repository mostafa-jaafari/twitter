import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type UICardProps = {
    PRODUCT_IMAGE: string;
    NAME: string;
    COUNTRY: string;
    CITY: string;
    PRICE: string;
    REVIEWS_COUNT: number;
}
export default function UICradGrid({PRODUCT_IMAGE, NAME, COUNTRY, CITY, PRICE, REVIEWS_COUNT}: UICardProps) {
  return (
    <main className="w-[270px] max-w-[300px] grow flex-shrink-0 border border-neutral-300 rounded-lg shadow overflow-hidden pb-4">
        <div className="relative w-full flex-shrink-0 h-[220px]">
            <Image loading="lazy" src={PRODUCT_IMAGE} fill className="object-cover" alt=""/>
        <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
        </div>
        <div className="p-2">
            <b>{NAME}</b>
            <span className='flex flex-wrap items-center justify-between'>
                <p className='font-semibold text-blue-700 uppercase'>{COUNTRY} • <span className='font-normal text-neutral-600 capitalize'>{CITY}</span></p>
                <ins className='text-green-600 font-semibold border px-2 rounded-full no-underline'>{PRICE}</ins>
            </span>
            <div className="flex items-center mt-2">
                <span className="p-1 text-neutral-100 font-semibold rounded bg-blue-900">9.8</span>
                <p className="pl-2 text-neutral-700 font-semibold">Exceptional <span className="font-normal text-neutral-500">{REVIEWS_COUNT ? REVIEWS_COUNT : 0} reviews</span></p>
            </div>
        </div>
    </main>
  )
}
