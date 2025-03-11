'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const URL_Image_1: string = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_2: string = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_3: string = 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_4: string = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_5: string = 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
export default function GetInspiration() {
        const Slider_Ref = useRef<HTMLDivElement | null>(null);
        const Handle_Scroll_Left = () => {
            if (Slider_Ref.current) {
                Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft - 350, behavior: "smooth" });
            }
        };
        const Handle_Srcoll_Right = () => {
            if(Slider_Ref.current){
                Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft + 350, behavior: 'smooth' });
            }
        }
        const [Is_Scrolled_To_Left, setIs_Scrolled_To_Left] = useState(false);
useEffect(() => {
    const HandleScroll = () => {
        if(Slider_Ref.current){
            setIs_Scrolled_To_Left(Slider_Ref.current.scrollLeft > 0);
        }
    }
    // --------- Add The user scroll tracking --------- //
    const slider = Slider_Ref.current;
    if(slider){
        slider.addEventListener('scroll', HandleScroll);
    }
    // --------- Remove the user Scroll tracking --------- //
    return () => {
        if(slider){
            slider.removeEventListener('scroll', HandleScroll);
        }
    }
},[])
  return (
    <main className='w-full'>
      <span className='w-full flex justify-between items-center'>
        <h1 className='font-semibold text-2xl py-8'>
            Get inspiration for your next trip
        </h1>
        <Link href='/' className='font-semibold text-blue-700'>More</Link>
      </span>
      {/* -------------------------- */}
      <section className='relative w-full overflow-hidden'>
        {Is_Scrolled_To_Left && <ChevronLeft onClick={Handle_Scroll_Left} size={30} className='absolute top-40 left-10 z-50 rounded-full shadow-lg border shadow-blue-500 bg-blue-700 text-neutral-100 cursor-pointer'/>}
        <section ref={Slider_Ref} className='w-full flex gap-2 items-start overflow-x-scroll hide-bar'>
            <div className='relative flex-shrink-0 w-2/6 h-[350px] overflow-hidden rounded-lg'>
                <Image loading='lazy' src={URL_Image_1} fill alt='' className='object-cover hover:scale-120 transition-transform duration-500'/>
            </div>
            {/* -------------------- */}
            <section className='w-2/6 flex-shrink-0'>
                <div className='relative w-full h-[250px] overflow-hidden rounded-lg'>
                    <Image loading='lazy' src={URL_Image_2} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                </div>
                <b className='px-2 text-xl'>5 best ski towns around the world</b>
                <p className='px-2 text-neutral-600 pl-2 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam repellendus ipsa fugit!
                </p>
            </section>
            {/* -------------------- */}
            <section className=' w-2/6 flex-shrink-0'>
                <div className='relative w-full h-[250px] overflow-hidden rounded-lg'>
                    <Image loading='lazy' src={URL_Image_3} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                </div>
                <b className='px-2 text-xl'>The 6 best Orlando hotels for families</b>
                <p className='px-2 text-neutral-600 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam repellendus ipsa fugit!
                </p>
            </section>
            {/* -------------------- */}
            <section className=' w-2/6 flex-shrink-0'>
                <div className='relative w-full h-[250px] overflow-hidden rounded-lg'>
                    <Image loading='lazy' src={URL_Image_4} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                </div>
                <b className='px-2 text-xl'>The 6 best Orlando hotels for families</b>
                <p className='px-2 text-neutral-600 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam repellendus ipsa fugit!
                </p>
            </section>
            {/* -------------------- */}
            <section className=' w-2/6 flex-shrink-0'>
                <div className='relative w-full h-[250px] overflow-hidden rounded-lg'>
                    <Image loading='lazy' src={URL_Image_5} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                </div>
                <b className='px-2 text-xl'>The 6 best Orlando hotels for families</b>
                <p className='px-2 text-neutral-600 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam repellendus ipsa fugit!
                </p>
            </section>
            {/* -------------------- */}
            <section className=' w-2/6 flex-shrink-0'>
                <div className='relative w-full h-[250px] overflow-hidden rounded-lg'>
                    <Image loading='lazy' src={URL_Image_1} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                </div>
                <b className='px-2 text-xl'>The 6 best Orlando hotels for families</b>
                <p className='px-2 text-neutral-600 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam repellendus ipsa fugit!
                </p>
            </section>
        </section>
            <ChevronRight onClick={Handle_Srcoll_Right} size={30} className='absolute top-40 right-10 z-50 rounded-full bg-blue-700 shadow-lg shadow-blue-500 border text-neutral-100 cursor-pointer'/>
      </section>
    </main>
  )
}
