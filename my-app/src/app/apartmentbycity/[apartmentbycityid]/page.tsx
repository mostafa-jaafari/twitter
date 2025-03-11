import { ApartmentsData, DESTINITIONS } from '@/FakeData/Appartments';
import UICradGrid from '@/UI/UICardGrid';
import { CircleAlert } from 'lucide-react';
import React from 'react'


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
