import UICard from "@/UI/UICard";



const URL_Image_1: string = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_2: string = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_3: string = 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_4: string = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
const URL_Image_5: string = 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D';
export default function UniqueProperties(){
    return (
        <main className="w-full">
            <h1 className='font-semibold text-2xl pt-8'>
                Stay at our top unique properties
            </h1>
            <p className="text-neutral-400 pb-8">
                From castles and villas to boats and igloos, 
                we have it all
            </p>
            <section className="grid grid-cols-4 grid-rows-2 gap-2">
                <UICard PRODUCT_IMAGE={URL_Image_1} />
                <UICard PRODUCT_IMAGE={URL_Image_2} />
                <UICard PRODUCT_IMAGE={URL_Image_3} />
                <UICard PRODUCT_IMAGE={URL_Image_4} />
                <UICard PRODUCT_IMAGE={URL_Image_5} />
                <UICard PRODUCT_IMAGE={URL_Image_1} />
                <UICard PRODUCT_IMAGE={URL_Image_2} />
                <UICard PRODUCT_IMAGE={URL_Image_3} />
            </section>
        </main>
    )
}