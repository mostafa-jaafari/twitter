import { ApartmentsData, DESTINITIONS } from '@/FakeData/ApartmentsData';
import UICradGrid from '@/UI/UICardGrid';
import { CircleAlert } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Rentify | Apartments in Rentify',
  description: "Explore a wide range of apartments available for rent on Rentify. Find your dream apartment today!",
};

export default async function page({params}: { params: {apartmentbycityid: string } }) {
  const ApartmentByCityID: string = params?.apartmentbycityid;
  const Apartments_Data = await ApartmentsData();
  const Filtred_Apartments = Apartments_Data?.filter((Apartment) => Apartment?.location?.toLocaleLowerCase().includes(ApartmentByCityID));
  const Destinations = DESTINITIONS;
  const Filtred_Destination = Destinations?.find((destination) => destination?.cityname?.toLowerCase() === ApartmentByCityID)
  return (
      <main className='w-full'>
        <section 
          style={{backgroundImage: `url(${Filtred_Destination?.image})`}} 
          className='w-full h-[60vh] bg-neutral-200 overflow-hidden bg-no-repeat bg-cover bg-bottom bg-fixed'>
        </section>
        <section className='w-full px-20 py-8 flex gap-2 flex-wrap justify-center items-center'>
          {Filtred_Apartments.length > 0 ? Filtred_Apartments?.map((apartment) => {
            const [City, Country] = apartment?.location?.split(',');
            return (
              <UICradGrid
              key={apartment?.id}
                APARTMENT_ID={apartment?.id}
                COUNTRY={Country}
                PREVIEW_IMAGES={apartment?.overviewimages}
                CITY={City}
                PRICE={apartment?.price}
                NAME={apartment?.name}
                REVIEWS_COUNT={apartment?.reviewscount}
              />
            )
          }) : (
            <section className='text-red-700 font-semibold flex flex-col h-140 justify-center items-center'>
              <CircleAlert size={60}/>
                Not Founded
            </section>
          )}
      </section>
    </main>
  )
}
