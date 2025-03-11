import React from 'react';
import { HeartIcon, StarIcon, ShareIcon, MapPinIcon, BedDoubleIcon, BathIcon, SquareIcon, WifiIcon, TvIcon, UtensilsIcon } from 'lucide-react';

// نفترض أن هذه البيانات تأتي من API أو props
const apartment = {
  id: 1,
  name: "شقة فاخرة بإطلالة على البحر",
  location: "الدار البيضاء، المغرب",
  price: "$1200",
  period: "شهرياً",
  rating: 4.8,
  reviewsCount: 128,
  description: "شقة فاخرة مطلة على المحيط الأطلسي، تتميز بتصميم عصري وإطلالات خلابة. تقع في حي راقي بالدار البيضاء، على بعد خطوات من الشاطئ والمطاعم والمقاهي.",
  hostName: "محمد العلوي",
  hostJoined: "انضم في 2020",
  hostImage: "/api/placeholder/100/100",
  features: [
    { name: "2 غرف نوم", icon: BedDoubleIcon },
    { name: "2 حمام", icon: BathIcon },
    { name: "85 متر مربع", icon: SquareIcon },
  ],
  amenities: [
    { name: "واي فاي عالي السرعة", icon: WifiIcon },
    { name: "تلفزيون مع نتفلكس", icon: TvIcon },
    { name: "مطبخ مجهز بالكامل", icon: UtensilsIcon },
  ],
  images: [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
  ]
};

const SingleApartmentPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* رأس الصفحة وعنوان الشقة */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{apartment.name}</h1>
        <div className="flex flex-wrap items-center justify-between mt-2">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-medium">{apartment.rating}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-500 underline">{apartment.reviewsCount} تقييم</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>{apartment.location}</span>
            </div>
          </div>
          <div className="flex space-x-3 rtl:space-x-reverse mt-2 sm:mt-0">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <ShareIcon className="h-5 w-5 mr-1" />
              <span>مشاركة</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-rose-600">
              <HeartIcon className="h-5 w-5 mr-1" />
              <span>حفظ</span>
            </button>
          </div>
        </div>
      </div>

      {/* صور الشقة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 h-96">
        <div className="relative h-full rounded-lg overflow-hidden">
          <img src={apartment.images[0]} alt="صورة رئيسية للشقة" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-2 h-full">
          {apartment.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <img src={image} alt={`صورة الشقة ${index + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* معلومات الشقة والمضيف */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* تفاصيل المضيف */}
          <div className="flex justify-between items-start border-b pb-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-1">شقة يستضيفها {apartment.hostName}</h2>
              <div className="text-gray-600">{apartment.hostJoined}</div>
            </div>
            <div className="flex-shrink-0">
              <img src={apartment.hostImage} alt={apartment.hostName} className="w-14 h-14 rounded-full" />
            </div>
          </div>

          {/* مميزات الشقة */}
          <div className="mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {apartment.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="h-6 w-6 text-blue-900 mr-2" />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* وصف الشقة */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">حول هذه الشقة</h2>
            <p className="text-gray-700 leading-relaxed">{apartment.description}</p>
          </div>

          {/* وسائل الراحة */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">وسائل الراحة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {apartment.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <amenity.icon className="h-6 w-6 text-blue-900 mr-2" />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* الخريطة */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">الموقع</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <MapPinIcon className="h-8 w-8 text-blue-900 mr-2" />
              <span className="text-gray-500">خريطة الموقع</span>
            </div>
            <p className="mt-3 text-gray-600">{apartment.location}</p>
          </div>
        </div>

        {/* صندوق الحجز */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">{apartment.price}</span>
                <span className="text-gray-600"> / {apartment.period}</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 text-sm font-medium">{apartment.rating}</span>
                <span className="mx-1 text-gray-500">•</span>
                <span className="text-sm text-gray-500">{apartment.reviewsCount} تقييم</span>
              </div>
            </div>

            {/* تقويم الحجز */}
            <div className="mb-4 border rounded-lg p-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="border rounded p-2">
                  <div className="text-xs text-gray-500">تاريخ الوصول</div>
                  <div className="font-medium">اختر تاريخًا</div>
                </div>
                <div className="border rounded p-2">
                  <div className="text-xs text-gray-500">تاريخ المغادرة</div>
                  <div className="font-medium">اختر تاريخًا</div>
                </div>
              </div>
              <div className="border rounded p-2">
                <div className="text-xs text-gray-500">عدد الضيوف</div>
                <div className="font-medium">1 ضيف</div>
              </div>
            </div>

            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors">
              حجز
            </button>

            <div className="mt-4">
              <div className="flex justify-between py-2">
                <span>{apartment.price} × 5 ليالي</span>
                <span>${parseInt(apartment.price.substring(1)) * 5}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>رسوم التنظيف</span>
                <span>$60</span>
              </div>
              <div className="flex justify-between py-2">
                <span>رسوم الخدمة</span>
                <span>$45</span>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <span>المجموع</span>
                <span>${parseInt(apartment.price.substring(1)) * 5 + 60 + 45}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم التقييمات */}
      <div className="mt-12">
        <div className="flex items-center mb-6">
          <StarIcon className="h-6 w-6 text-yellow-500 fill-yellow-500" />
          <span className="ml-2 text-xl font-semibold">{apartment.rating}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-xl font-semibold">{apartment.reviewsCount} تقييم</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* نموذج تقييم */}
          {[1, 2, 3, 4].map((review) => (
            <div key={review} className="border-b pb-6 mb-6 last:border-0">
              <div className="flex items-start">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D" alt="صورة المستخدم" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">أحمد محمود</h3>
                  <div className="text-sm text-gray-500">مارس 2025</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                كانت إقامة رائعة! الشقة نظيفة جدًا ومريحة وموقعها ممتاز. المضيف كان متعاونًا للغاية وسريع الاستجابة. سأعود بالتأكيد مرة أخرى!
              </p>
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 border border-gray-900 rounded-lg font-semibold hover:bg-gray-100">
          عرض جميع التقييمات
        </button>
      </div>
    </div>
  );
};

export default SingleApartmentPage;