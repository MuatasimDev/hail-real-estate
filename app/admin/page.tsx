




import Link from "next/link";
export default function AddminPage() {
    return (
        <main dir="rtl" className="p-8">
            <h1 className="text-2xl font-bold">
                لوحة التحكم
            </h1>
            
            <Link 
            href="/admin/new"
            className="inline-block mt-6 border rounded-xl px-4 py-2 font-bold"
            >
                إضافة عقار جديد
            </Link>
        </main>
    );
}