import { Heart } from "lucide-react";
import Image from "next/image";

type UICardProps = {
    PRODUCT_IMAGE: string;
    NAME: string;
    COUNTRY: string;
    CITY: string;
    PRICE: string;
    REVIEWS_COUNT: number;
}
export default function UICardList({PRODUCT_IMAGE, NAME, COUNTRY, CITY, PRICE, REVIEWS_COUNT}: UICardProps){
    return (
        <main className="w-1/3 min-w-[500px] grow flex border border-neutral-300 rounded-lg shadow overflow-hidden pr-8">
            <div className="relative w-[300px] h-[300px] flex-shrink-0">
                <Image loading="lazy" src={PRODUCT_IMAGE} fill className="object-cover" alt=""/>
            <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
            </div>
            <div className="p-2 space-y-4">
            <b>{NAME}</b>
            <p className='font-semibold text-blue-700 mt-2'>{COUNTRY} • <span className='font-normal text-neutral-600'>{CITY}</span></p>
            <div className="flex items-center">
                <span className="p-1 text-neutral-100 font-semibold rounded bg-blue-900">9.8</span>
                <p className="pl-2 text-neutral-700 font-semibold">Exceptional <span className="font-normal text-neutral-500">{REVIEWS_COUNT ? REVIEWS_COUNT : 0} reviews</span></p>
            </div>
            <ins className='text-green-600 font-semibold border px-2 rounded-full no-underline'>{PRICE}</ins>
        </div>
        </main>
    )
}