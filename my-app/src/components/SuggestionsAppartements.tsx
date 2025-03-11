'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const URL_IMAGE_1: string = 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_2: string = 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_3: string = 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_IMAGE_4: string = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHwwfDB8fHwy';
export default function SuggestionsAppartements() {
    const Slider_Ref = useRef<HTMLDivElement | null>(null);
    // -------------------- Scroll to Left -------------------- //
    const Handle_Scroll_Left = () => {
        if (Slider_Ref.current) {
            Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft - 200, behavior: "smooth" });
        }
    };
    // -------------------- Scroll to Right -------------------- //
    const Handle_Srcoll_Right = () => {
        if(Slider_Ref.current){
            Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft + 200, behavior: 'smooth' });
        }
    }
    // ------- State to track if the user has scrolled to left ------- //
    const [Is_Scroll_Left, setIs_Scroll_Left] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (Slider_Ref.current) {
        setIs_Scroll_Left(Slider_Ref.current.scrollLeft > 0);
      }
    };
// ------- Add the user tracking ------- //
    const slider = Slider_Ref.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
    // ------- Remove the user tracking ------- //
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <main className='w-full'>
        <h1 className='font-semibold text-2xl py-8'>
            Browse by property type in Casablanca
        </h1>
        <section className='relative w-full mb-4 overflow-hidden flex items-center gap-1'>
            {Is_Scroll_Left && <ChevronLeft onClick={Handle_Scroll_Left} size={30} className='absolute top-20 left-10 shadow-lg shadow-blue-700 border z-50 rounded-full bg-blue-700 text-neutral-100 cursor-pointer'/>}
            <div ref={Slider_Ref} className='w-full flex items-center gap-4 overflow-x-scroll hide-bar'>
                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_1} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Hotels</h2>
                </div>
                {/* ---------------------- */}
                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_2} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Villas</h2>
                </div>
                {/* ---------------------- */}
                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_3} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Apartments</h2>
                </div>
                {/* ---------------------- */}
                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_4} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Resorts</h2>
                </div>
                {/* ---------------------- */}

                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_1} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Cabins</h2>
                </div>
                {/* ---------------------- */}
                <div className='w-1/5 flex-shrink-0'>
                    <div className='relative rounded-lg overflow-hidden w-full h-[200px]'>
                        <Image loading='lazy' src={URL_IMAGE_2} fill alt='Appartement Image' className='object-cover' />
                    </div>
                    <h2 className='text-center font-semibold text-xl'>Cottages</h2>
                </div>
                {/* ---------------------- */}
            </div>
            <ChevronRight onClick={Handle_Srcoll_Right} size={30} className='rounded-full absolute top-20 right-10 border shadow-lg shadow-blue-700 bg-blue-700 text-neutral-100 cursor-pointer'/>
        </section>
    </main>
  )
}
