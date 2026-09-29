"use client";
import { useState } from "react";
import { districts } from "../../properties/districts";
export default function NewPropertyPage() {


  // حالة النشر وعند ارسال الفورم نمنع تحديث الصفحة ونبداء بمعالجة البيانات 

  // متابعة حالة النشر
  const [status, setstatus] = useState("idle");
  // دالة تشغيل نشر اللإعلان 
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    // منع إعادة تحميل الصفحة عند إرسال الفورم
  event.preventDefault();

  // تاكيد الفورم..... أخذ بيانات الفورم

  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);


  // استخراج القيم........سحب البيانات من الفورم

  const title = formData.get("title");
  const price = formData.get("price");
  const district = formData.get("district");


  // أرسال البيانات للباك إند

    setstatus("loading");
    // أرسال البيانات لل API
  const response = await fetch("/api/properties",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price,
      district,
    }),
  });

    // أذا تم نجاح الحفض تكون الرسالة
    if (response.ok) {
      form.reset();
    setstatus("success");

    setTimeout(() => {
      setstatus("idle");
    }, 2500);
   }
}
  return (
    <main dir="rtl" className="p-8">

      {status === "success" && (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
    تم نشر الإعلان بنجاح ✅
  </div>
)}

      <h1 className="text-2xl font-bold">
        إضافة عقار جديد
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block font-bold mb-2">
                عنوان العقار
            </label>

            <input
            type="text"
            name="title"
            placeholder="مثال: شقة للإيجار"
            className="w-rull border rounded-xl p-3"
            required
            />

           
        </div>
        <div>
            <label className="block font-bold mb-2">
                نوع العرض
            </label>

            <select
            name="status"
            className="w-full border rounded-xl p-3"
            required

            >


                <option value="">
      اختر نوع العرض
    </option>

    <option value="للبيع">
      للبيع
    </option>

    <option value="للإيجار">
      للإيجار
    </option>
  </select>
</div>


<div>
  <label className="block font-bold mb-2">
    نوع العقار
  </label>

  <select
    name="type"
    className="w-full border rounded-xl p-3"
    required
  >
    <option value="">
      اختر نوع العقار
    </option>

    <option value="شقة">
      شقة
    </option>

    <option value="فيلا">
      فيلا
    </option>

    <option value="أرض">
      أرض
    </option>

    <option value="دور">
      دور
    </option>
  </select>
</div>
        <div>
  <label className="block font-bold mb-2">
    الحي
  </label>

  <select
    name="district"
    className="w-full border rounded-xl p-3"
    required
  >
    <option value="">
      اختر الحي
    </option>

    {districts.map((district) => (
      <option
        key={district}
        value={`حي ${district} - حائل`}
      >
        {district}
      </option>
    ))}
  </select>
</div>

        <div>
  <label className="block font-bold mb-2">
    السعر
  </label>

  <input
    type="number"
    name="price"
    placeholder="مثال: 24000"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

            <div>
  <label className="block font-bold mb-2">
    المساحة
  </label>

  <input
    type="number"
    name="area"
    placeholder="مثال: 120"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

        <div>
  <label className="block font-bold mb-2">
    عدد الغرف
  </label>

  <input
    type="number"
    name="rooms"
    placeholder="مثال: 3"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

<div>
  <label className="block font-bold mb-2">
    عدد الحمامات
  </label>

  <input
    type="number"
    name="bathrooms"
    placeholder="مثال: 2"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

        <div>
  <label className="block font-bold mb-2">
    وصف العقار
  </label>

  <textarea
    name="description"
    placeholder="اكتب وصف العقار، مثل عمر العقار وحالته والخدمات المتوفرة..."
    className="w-full border rounded-xl p-3"
    rows={4}
    required
  />
</div>

    <div>
  <label className="block font-bold mb-2">
    رابط موقع العقار
  </label>

  <input
    type="text"
    name="location"
    placeholder="الصق رابط الموقع من Google Maps"
    className="w-full border rounded-xl p-3"
    required
  />
</div>

    <div>
  <label className="block font-bold mb-2">
    رقم التواصل
  </label>

  <input
    type="tel"
    name="phone"
    placeholder="مثال: 9665XXXXXXXX"
    className="w-full border rounded-xl p-3"
    required
  />
</div>
<div>
  <label className="block font-bold mb-2">
    صور العقار
  </label>

  <input
    type="file"
    name="images"
    accept="image/*"
    multiple
    className="w-full border rounded-xl p-3"
    required
  />
</div>



     <button
  type="submit"
  
  className="w-full bg-black text-white font-bold rounded-xl p-3 mt-4 cursor-pointer hover:opacity-80 transition"
>
 
  نشر الإعلان
</button>
               
      </form>

 
    </main>
  );
}