import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import PropertyGallery from "../../components/PropertyGallery";
import {notFound} from "next/navigation";
import {properties} from "../data";

export default async function PropertyDetails({
    params,
}:{
    params: Promise<{ id: string}>;
}) {
    const { id } = await params;
    const property = properties.find(
        (property) => property.id ===id
    );
    if (!property) {
        notFound();
    }

    return (
        <main dir="rtl"
         className="w-11/12 max-w-2xl mx-auto my-8 border border-gray-300 rounded-xl bg-white p-6 shadow-sm space-y-4">
             <PropertyGallery
  images={property.images ?? []}
  title={property.title}
/>
            <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
          
            <p className="text-gray-700 font-bold">{property.district}</p>
            <p className="text-2xl font-bold text-gray-900">{property.price} ريال</p>
            <p className=" font-bold border-t border-gray-200 pt-4 text-gray-700">المساحة:{property.area} م²</p>

            {property.type !=="أرض" &&(
                <>
                <p className="font-bold">الـــغــرف:      {property.rooms}</p>
                <p className="font-bold">الحمامات:   {property.bathrooms}</p>
                </>
            )}
            

             <a
                href={property.location}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  gap-2 font-bold text-blue-600 underline"
                >
                <FaMapMarkerAlt  size={20} />
                عرض موقع العقار على الخريطة
             </a>

            <div className="broder border-gray-200 rounded-xl p-4 mt-4">
                <h2 className="text-xl font-bold mb-2">
                    وصف العقار
                </h2>

                <p className="text-gray-700 leading-8">
                    {property.description}
                </p>
            </div>
            <a
                href={`https://wa.me/${property.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded-xl p-3 mt-4"
                >
                <FaWhatsapp size={24} />
                تواصل عبر واتساب
                </a>

                <a
                    href={`tel:+${property.phone}`}
                    className="block text-center font-bold border rounded-xl p-3 mt-3"
                    >
                    اتصال
               </a>


        </main>
    );
}