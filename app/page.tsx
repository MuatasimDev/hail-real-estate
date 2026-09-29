
"use client"
import Image from "next/image";
import {useState} from "react";
import PropertyFilters from "./components/FiltersBox";
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
  images,
}: {
  id:string;
  title:string;
  district:string;
  price:string;
  area:string;
  rooms:string;
  bathrooms:string;
  images:string[];

}) {
  return (
    
      
        <Link href={`/properties/${id}`} className="w-full max-w-4xl">
        
          {
            <div  className="bg-white  rounded-xl shadow overflow-hidden flex">
      <div className="relative w-33 sm:w-48 flex-none">
  <Image
    src={images[0]}
    alt={title}
    fill
    className="object-cover"
  />
</div>

    <div className="flex-1 p-4 text-right" dir="rtl">
        <h2 className="text-xl fount-bold mb-2">
           {title}
        </h2>

        <p className="text-gray-700 font-bold mb-2">
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
  
  const [status, setStatus] = useState("");
const [type, setType] = useState("");
const [district, setDistrict] = useState("");

const filteredproperties = properties.filter((property) => {
  const matchStatus =
    status === "" || property.status === status;

  const matchType =
    type === "" || property.type === type;

  const matchDistrict =
    district === "" || property.district.includes(district);

  return matchStatus && matchType && matchDistrict;
});

  return (
    <main className="flex flex-col items-center pt-16  gap-4 bg-gray-100 min-h-screen ">

     <PropertyFilters
  setStatus={setStatus}
  setType={setType}
  setDistrict={setDistrict}
/>

      {filteredproperties.map((property)=> (
        <PropertyCard
        key={property.id}
        id={property.id}
        title={property.title}
        district={property.district}
        price={property.price}
        area={property.area}
        rooms={property.rooms}
        bathrooms={property.bathrooms}
        images={property.images}
        />
      ))}
    
    </main>
  );
}