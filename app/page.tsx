
import {Bed, Bath, Ruler} from "lucide-react";
import Link from "next/link";
import { properties} from"./properties/data";
function PropertyCard( {
  id,
  title,
  district,
  price,
  area,
  rooms,
  bathrooms,
}: {
  id:string;
  title:string;
  district:string;
  price:string;
  area:string;
  rooms:string;
  bathrooms:string;

}) {
  return (
    
      
        <Link href={`/properties/${id}`} className="w-full max-w-4xl">
        
          {
            <div  className="bg-white  rounded-xl shadow overflow-hidden flex">
      <div className="w-33 sm:w-48 bg-gray-200 flex items-center justify-center flex-none">
        صورة العقار
      </div>

    <div className="flex-1 p-4 text-right" dir="rtl">
        <h2 className="text-xl fount-bold mb-2">
           {title}
        </h2>

        <p className="text-gray-500 mb-2">
           {district}
        </p>
        <p className="font-bold text-lg">
           {price} ريال سنويا
        </p>
        <div className="flex items-center justify-start gap-4 mt-4 text-gray-600">
          <span className="flex items-center gap-1">
            <Ruler size={18} />
              {area} م²
          </span>

          <span className="flex items-center gap-1">
            <Bed size={18} />
            {rooms}
          </span>

          <span className="flex items-center gap-1">
            <Bath size={18} />
            {bathrooms}
          </span>
       </div>
     </div>

    </div>


          }
        
        </Link>
      

    
    
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-16  gap-4 bg-gray-100 min-h-screen ">

      {properties.map((property)=> (
        <PropertyCard
        key={property.id}
        id={property.id}
        title={property.title}
        district={property.district}
        price={property.price}
        area={property.area}
        rooms={property.rooms}
        bathrooms={property.bathrooms}
        />
      ))}
    
    </main>
  );
}