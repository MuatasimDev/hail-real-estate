
import {districts} from "../properties/districts";
export default function PropertyFilters({
    setStatus,
    setType,
    setDistrict,
}:{
    setStatus: (value: string) => void;
    setType: (value: string) => void;
    setDistrict: (value: string) => void;
}){
    return (
        <div 
        className="w-full max-w-4xl bg-white p-4 rounded-xl shadow-sm flex items-center justify-center gap-8 ">
          <select onChange={(e) => setStatus(e.target.value)}
           className="w-32 border border-gray-300 rounded-lg px-3 py-2 bg-white text-right cursor-pointer">
        <option value="">الحالة</option>
        <option>للبيع</option>
        <option>للإيجار</option>
          </select>

          <select
  onChange={(e) => setType(e.target.value)}
  className="w-32 border border-gray-300 rounded-lg px-3 py-2 bg-white text-right cursor-pointer"
>
            <option value="">نوع العقار</option>
            <option>شقة</option>
            
            <option>فيلا</option>
            <option>أرض</option>
          </select>
          <select
  onChange={(e) => setDistrict(e.target.value)}
  className="w-29 border border-gray-300 rounded-lg px-3 py-2 bg-white text-right cursor-pointer"
>
            <option value="">الحي</option>
            {districts.map((district) =>(
                <option key={district} value={district}>
                        {district}
                </option>
            ))}

          
          </select>
       </div>
  );
}