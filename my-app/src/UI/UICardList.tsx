'use client';
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type UICardProps = {
    PREVIEW_IMAGES: string[];
    NAME: string;
    COUNTRY: string;
    CITY: string;
    PRICE: string;
    REVIEWS_COUNT: number;
    APARTMENT_ID: number;
}
export default function UICardList({ PREVIEW_IMAGES, NAME, APARTMENT_ID,COUNTRY, CITY, PRICE, REVIEWS_COUNT}: UICardProps){
      const [CurrentImage, setCurrentImage] = useState<number>(0);
      const [ShowMore, setShowMore] = useState<boolean>(false);
      const Sliced_Length = PREVIEW_IMAGES?.slice(0,3); 
      const Check_Status: string[] =  ShowMore ? PREVIEW_IMAGES : Sliced_Length;
    return (
        <main className="w-[400px] max-w-1/2 grow flex border border-neutral-300 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-[300px] h-[300px] flex-shrink-0">
                <Link href={`/searchapartment/apartment=${APARTMENT_ID}`}>
                    <Image loading="lazy" src={PREVIEW_IMAGES[CurrentImage]} fill className="object-cover" alt=""/>
                    <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
                </Link>
            </div>
            <div className="min-w-[250px] px-4 py-2 space-y-4">
            <section className='max-w-full flex items-center justify-center flex-wrap gap-1'>
                {Check_Status.map((image, index) => {
                    return (
                        <div onClick={() => setCurrentImage(index)} key={index} className={`relative flex-shrink-0 cursor-pointer w-15 h-15 overflow-hidden rounded-lg ${index === CurrentImage && 'border-2 border-blue-700'}`}>
                            <Image src={image} alt='' fill className='object-cover'/>
                        </div>
                    )
                })}
            </section>
            <div onClick={() => setShowMore(!ShowMore)} className={`w-full flex justify-center items-end pt-2 font-semibold text-sm cursor-pointer ${ShowMore ? 'text-neutral-500' : 'text-blue-700'}`}>
                {PREVIEW_IMAGES.length > 3 && (
                    <>
                        {ShowMore ? "Show Less" : "Show More"} <ChevronDown className={`${ShowMore && 'rotate-180'}`} size={18}/>
                    </>
                )}
            </div>
                        <Link href={`/searchapartment/apartment=${APARTMENT_ID}`}>
                            <b className="hover:underline">{NAME}</b>
                            <p className='font-semibold text-blue-700 mt-2'>{COUNTRY} • <span className='font-normal text-neutral-600'>{CITY}</span></p>
                        </Link>
                        <div className="flex items-center">
                            <span className="p-1 text-neutral-100 font-semibold rounded bg-blue-900">9.8</span>
                            <p className="pl-2 text-neutral-700 font-semibold">Exceptional <span className="font-normal text-neutral-500">{REVIEWS_COUNT ? REVIEWS_COUNT : 0} reviews</span></p>
                        </div>
                        <ins className='text-green-600 font-semibold border px-2 rounded-full no-underline'>{PRICE}</ins>
                    </div>
            </main>
    )
}