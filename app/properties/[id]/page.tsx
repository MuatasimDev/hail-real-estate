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
        <main>
            <h1>{property.title}</h1>
            <p>{property.district}</p>
            <p>{property.price} ريال</p>
            <p>المساحة:{property.area} م²</p>
        </main>
    );
}