import UICardGrid from "@/UI/UICardGrid";
import { ApartmentsData } from "@/FakeData/Appartments";


export default async function UniqueProperties(){
    const Apartments = await ApartmentsData();
    const Properties_Cards = Apartments.slice(0,8);
    return (
        <main className="w-full">
            <h1 className='font-semibold text-2xl pt-8'>
                Stay at our top unique properties
            </h1>
            <p className="text-neutral-400 pb-8">
                From castles and villas to boats and igloos, 
                we have it all
            </p>
            <section className="flex flex-wrap items-center justify-center gap-2">
            {Properties_Cards.map((apartment) => {
                const [city, country] = apartment?.location.split(", ");
                const Filtred_Images = Properties_Cards.find((Apartment) => Apartment.id === apartment.id)
                    return (
                        <UICardGrid 
                            key={apartment?.id}
                            APARTMENT_ID={apartment?.id} 
                            COUNTRY={country}
                            CITY={city}
                            PRICE={apartment?.price}
                            PREVIEW_IMAGES={Filtred_Images?.overviewimages}
                            NAME={apartment?.name}
                            REVIEWS_COUNT={apartment?.reviewscount}
                            />
                    )
                })}
            </section>
        </main>
    )
}