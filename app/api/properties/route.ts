
import db from "../../../lib/db";

export async function GET() {
  const properties = db.prepare("SELECT * FROM properties").all();
    return Response.json(properties);
}

export async function POST(request:Request) {
    const newProperty = await request.json();

    db.prepare(`
      INSERT INTO properties (title,price,district)
      VALUES (?, ?, ?)
      `).run(
        newProperty.title,
        newProperty.price,
        newProperty.district
      );

    return Response.json(newProperty);
}