import { Apartments } from "@/FakeData/Appartments";
import UICardGrid from "@/UI/UICardGrid";



export default function UniqueProperties(){
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
            {Properties_Cards.map((appartment) => {
                const [city, country] = appartment.location.split(", ");
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
        </main>
    )
}