import MapComponent from '@/components/MapComponent';
import { ApartmentsData } from '@/FakeData/Appartments';
import { BathIcon, BedDoubleIcon, ConciergeBell, MapPinIcon, Star, TvIcon, UtensilsIcon, WifiIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CallToAction from './CallToAction';
import ClientReviews from './ClientReviews';
import ImageGallery from './ImageGallery';

type PathnameID = {
    params: {
        singleappartement: string;
    }
}

export default async function page({params}: PathnameID) {
    const ApartmentID = params?.singleappartement?.split('%3D')?.pop();
    const Apartments = await ApartmentsData();
    const SelectedApartment = Apartments.find((apartment) => apartment.id.toString() === ApartmentID);
    return (
    <main className='w-full px-8 lg:px-20 py-6'>
      <main className='w-full flex mb-3 gap-2 items-start justify-center lg:justify-between'>
        <ImageGallery SelectedApartment={SelectedApartment}/>
        <section className='px-4 py-2 flex flex-col space-y-2 w-2/5 bg-red-00 rounded-lg'>
          <b className='text-2xl capitalize'>{SelectedApartment?.name}</b>
          <span className='flex gap-2 pb-2'>
            <p className='text-neutral-600 flex items-center gap-1'>{SelectedApartment?.location} <MapPinIcon size={18}/> </p>
            <ins className='text-neutral-400'>Reviews ({SelectedApartment?.reviewscount})</ins>
            •
            <div className='flex items-center gap-1'>
              <b>4.8</b>
              <Star size={18} className='text-yellow-500 fill-yellow-500'/>
            </div>
          </span>
          <hr className='border-neutral-300'/>
          <section className='w-full flex gap-2 items-center py-2'>
            <div className='relative bg-neutral-200 flex-shrink-0 w-14 h-14 rounded-full overflow-hidden'>
              <Image src={SelectedApartment?.hostImage} fill className='object-cover' alt=''></Image>
            </div>
            <div className='w-full'>
              <h1 className='font-semibold '>{SelectedApartment?.hostName}</h1>
              <p className='text-neutral-500 text-sm'>Joined with us in : {SelectedApartment?.hostJoined}</p>
            </div>
          </section>
          <hr className='border-neutral-300'/>
          <h1 className='text-xl font-semibold uppercase pt-2 text-blue-900'>About this Apartment :</h1>
          <div className='w-full flex items-start justify-between'>
            <span className='w-1/4 text-center flex flex-col items-center'>
              <BedDoubleIcon className='text-blue-700' />
              <h2 className='text-neutral-600'>2 Bedrooms</h2>
            </span>
            <span className='w-1/4 text-center flex flex-col items-center'>
              <BathIcon className='text-blue-700' />
              <h2 className='text-neutral-600'>2 bathrooms</h2>
            </span>
            <span className='w-1/4 text-center flex flex-col items-center'>
              <ConciergeBell className='text-blue-700' />
              <h2 className='text-neutral-600'>2 Kitchen</h2>
            </span>
          </div>
          <hr className='border-neutral-300 mt-2'/>
          <p className='text-neutral-600 text-sm py-2'>
            Luxury apartment overlooking the Atlantic Ocean, 
            featuring modern design and stunning views. 
            Located in an upscale neighborhood of Casablanca, 
            steps away from the beach, restaurants and cafes.
          </p>
          <hr className='border-neutral-300 mb-2'/>
          <h1 className='text-xl font-semibold uppercase pt-2 text-green-900'>Amenities :</h1>
          <div className='w-full flex items-start mt-2 justify-between'>
            <span className='w-2/5 text-center flex flex-col items-center'>
              <WifiIcon className='text-green-700' />
              <h2 className='text-neutral-600'>High-speed Wi-Fi</h2>
            </span>
            <span className='w-2/5 text-center flex flex-col items-center'>
              <TvIcon className='text-green-700' />
              <h2 className='text-neutral-600'>TV with Netflix</h2>
            </span>
            <span className='w-2/5 text-center flex flex-col items-center'>
              <UtensilsIcon className='text-green-700' />
              <h2 className='text-neutral-600'>2 Fully equipped kitchen</h2>
            </span>
          </div>
        </section>
      </main>
      <main className='w-full flex justify-between gap-6 py-8'>
        <section className='lg:w-2/3'>
          <h1 className='text-2xl font-semibold'>Location</h1>
          <div className='w-full bg-neutral-200 my-2 h-[350px] rounded-lg overflow-hidden'>
            <MapComponent latitude={SelectedApartment?.map?.latitude || 0} longitude={SelectedApartment?.map?.longitude || 0}/>
          </div>
          <p className='text-neutral-500 flex items-center gap-1'>{SelectedApartment?.location} <MapPinIcon size={16}/></p>
          <Link target='_blank' 
            href={`https://www.openstreetmap.org/export/embed.html?bbox=${SelectedApartment?.map?.longitude},${SelectedApartment?.map?.latitude},${SelectedApartment?.map?.longitude},${SelectedApartment?.map?.latitude}&layer=mapnik&marker=${SelectedApartment?.map?.latitude},${SelectedApartment?.map?.longitude}`} 
            className='text-blue-700 underline font-semibold'>
            Visit Map
            </Link>
      <main className='w-full mt-8'>
        <h1 className='text-2xl font-semibold'>Reviews</h1>
          <section className='space-y-4 mt-2'>
            <ClientReviews 
              COMMENT_REVIEW='ugué hé ejtu çe erçuerç'
              DATE='Mars 2020'
              OWNER_NAME='Mostafa Jaafari'
              PROFIL_IMAGE='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D'
              />
              <ClientReviews 
              COMMENT_REVIEW='ugué hé ejtu çe erçuerç'
              DATE='Mars 2020'
              OWNER_NAME='Mostafa Jaafari'
              PROFIL_IMAGE='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D'
              />
              <ClientReviews 
              COMMENT_REVIEW='ugué hé ejtu çe erçuerç'
              DATE='Mars 2020'
              OWNER_NAME='Mostafa Jaafari'
              PROFIL_IMAGE='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D'
              />
              <ClientReviews 
              COMMENT_REVIEW='ugué hé ejtu çe erçuerç'
              DATE='Mars 2020'
              OWNER_NAME='Mostafa Jaafari'
              PROFIL_IMAGE='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D'
              />
              <ClientReviews 
              COMMENT_REVIEW='ugué hé ejtu çe erçuerç'
              DATE='Mars 2020'
              OWNER_NAME='Mostafa Jaafari'
              PROFIL_IMAGE='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D'
              />
          </section>
      </main>
        </section>

        <CallToAction />

      </main>
    </main>
  )
}
