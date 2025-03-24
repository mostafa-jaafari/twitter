import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import StartButtonCTA from "@/components/StartButtonCTA";
import { Animated_Hero_Cards, Users_Images } from "@/GlobalLinks";
import { Star } from "lucide-react";
import Image from "next/image";



export default async function Home() {
  return (
    <main className="w-full">
      <Header />
      <section className="lg:p-20 w-full h-[90vh] flex items-start gap-2 bg-gradient-to-t from-[#FF990050] to-neutral-100">
        <div className="w-full space-y-8">
          <span className="flex w-max py-1 px-4 rounded-full items-center gap-2 bg-[#6d28d940] primary-color">
            <Star className="fill-[#6d28d9]" size={20}/>
            Premium Print on Demand
          </span>
          <h1 className="text-6xl font-bold">
            Turn Your Creativity 
            into Profitable Merch!
          </h1>
          <p className="text-xl para-color">
            Design. Sell. We Print & Ship for You.
          </p>
          <div>
            <StartButtonCTA PATH="/" LABEL="Start selling now" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-4">
              {Users_Images.map((image, index) => {
                return (
                  <div key={index} className='relative w-8 h-8 rounded-full shadow bg-neutral-300 overflow-hidden'>
                    <Image src={image} alt="" fill className="object-cover"/>
                  </div>
                )
              })}
            </div>
            <span className="flex gap-2">
              <b>+2,000 </b>
              <p className="para-color">Sellers trust us</p>
            </span>
          </div>
        </div>
        <div className="w-full h-full items-center flex justify-between">
          {Animated_Hero_Cards.map((card, index) => {
            const delay = `${index * 4000}ms`;
            return (
              <div key={index} style={{animationDelay: delay}} className="Float-Animation shadow w-44 h-max p-2 overflow-hidden rounded-lg bg-neutral-100">
                <div className={`relative z-20 w-full bg-neutral-200 rounded-lg overflow-hidden ${card.style}`}>
                  <Image src={card.image} alt="" fill className="object-cover"/>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/80 backdrop-blur-md p-2 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{card.title}</p>
                    <p className="text-xs text-gray-600">From {card.price}</p>
                  </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="min-h-[100vh] w-full flex flex-col items-center">
          <SectionHeader 
            TITLE="Start Selling in 3 Simple Steps!" 
            SUBTITLE="Our streamlined process makes it easy to turn your creativity into a profitable business" />
      </section>
    </main>
  );
}
