import SearchAppartementInputs from '@/components/SearchAppartementInputs'
import React from 'react'
import SearchAppartementsHeader from './SearchAppartementsHeader'
import UICardList from '@/UI/UICardList'
import UICardGrid from '@/UI/UICardGrid'
import { Apartments } from '@/FakeData/Appartments'

type searchParamsType = {
  searchParams: {
    view: string;
    place: string;
    checkin: string;
    checkout: string;
  }
}
export default async function page({searchParams}: searchParamsType) {
  const templateStyleView = searchParams.view || 'grid';
  const templateStylePlace = searchParams.place || '';
  const templateStyleCheckIn = searchParams.checkin || '';
  const templateStyleCheckOut = searchParams.checkout || '';
  const Filtred_Search = Apartments.filter((apartment) => apartment.location.toLowerCase().includes(templateStylePlace.toLowerCase()));
  const DATA = templateStylePlace === '' ? Apartments : Filtred_Search;
  return (
    <main className='w-full'>
        <div className='py-2 bg-gradient-to-b from-blue-900 from-50% to-transparent/50 to-50%'>
            <SearchAppartementInputs 
              InitialPlace={templateStylePlace}
              InitialCheckIn={templateStyleCheckIn}
              InitialCheckOut={templateStyleCheckOut}
            />
        </div>
        <section className='w-full px-20 py-4'>
        <SearchAppartementsHeader SEARCHED_PLACE={templateStylePlace} ResultCount={DATA.length} InitialStyle={templateStyleView} />
        {templateStyleView === 'grid' ? 
        (
          <section className='w-full my-4 flex flex-wrap justify-center items-center gap-2'>
          {DATA.map((appartment) => {
          const [city, country] = appartment?.location.split(", ");
            return (
            <UICardGrid 
              key={appartment?.id} 
              COUNTRY={country}
              CITY={city}
              PRICE={appartment?.price}
              NAME={appartment?.name}
              REVIEWS_COUNT={appartment?.reviewscount}
              PRODUCT_IMAGE={appartment?.image}/>
            )
          })}
        </section>
      )
        : (
          <section className='w-full my-4 flex flex-wrap justify-center items-center gap-2'>
            {DATA.map((appartment) => {
            const [city, country] = appartment?.location.split(", ");
            return (
            <UICardList 
              key={appartment?.id} 
              COUNTRY={country}
              CITY={city}
              PRICE={appartment?.price}
              NAME={appartment?.name}
              REVIEWS_COUNT={appartment?.reviewscount}
              PRODUCT_IMAGE={appartment?.image}/>
            )
          })}
        </section>
        )}
        </section>
    </main>
  )
}
