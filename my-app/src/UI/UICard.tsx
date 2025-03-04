import { Heart } from "lucide-react";
import Image from "next/image";

type UICardProps = {
    PRODUCT_IMAGE: string;
}
export default function UICard({PRODUCT_IMAGE}: UICardProps){
    return (
        <main className="border border-neutral-300 rounded-lg shadow overflow-hidden pb-4">
            <div className="relative w-full h-[250px] flex-shrink-0">
                <Image loading="lazy" src={PRODUCT_IMAGE} fill className="object-cover" alt=""/>
            <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
            </div>
            <div className="p-2">
                <b>Domki Wierszyki Shelters</b>
                <p>Poland, <span>Zakopane</span></p>
                <div className="flex items-center">
                    <span className="p-1 text-neutral-100 font-semibold rounded bg-blue-900">9.8</span>
                    <p className="pl-2 text-neutral-700 font-semibold">Exceptional <span className="font-normal text-neutral-500">88 reviews</span></p>
                </div>
            </div>
        </main>
    )
}