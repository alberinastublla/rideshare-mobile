import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { sql } from "@/lib/db";

async function perdoruesi() {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  return id && /^\d+$/.test(id) ? id : null;
}

export async function GET(request: Request) {
  const id = await perdoruesi();
  if (!id) return NextResponse.json({ error: "Duhet te kyçesh." }, { status: 401 });

  const udhetimiId = new URL(request.url).searchParams.get("udhetimiId");
  if (!udhetimiId || !/^\d+$/.test(udhetimiId)) {
    return NextResponse.json({ error: "ID e pavlefshme." }, { status: 400 });
  }

  try {
    const rows = await sql`
      SELECT 1 FROM preferuarat
      WHERE perdoruesi_id = ${id} AND udhetimi_id = ${udhetimiId}
      LIMIT 1
    `;
    return NextResponse.json({ preferuar: rows.length > 0 });
  } catch {
    return NextResponse.json({ error: "Gabim ne server." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const id = await perdoruesi();
  if (!id) return NextResponse.json({ error: "Duhet te kyçesh." }, { status: 401 });

  let udhetimiId: unknown;
  try {
    ({ udhetimiId } = await request.json());
  } catch {
    return NextResponse.json({ error: "Te dhena te pavlefshme." }, { status: 400 });
  }

  if (typeof udhetimiId !== "string" || !/^\d+$/.test(udhetimiId)) {
    return NextResponse.json({ error: "ID e pavlefshme." }, { status: 400 });
  }

  try {
    await sql`
      INSERT INTO preferuarat (perdoruesi_id, udhetimi_id)
      VALUES (${id}, ${udhetimiId})
      ON CONFLICT (perdoruesi_id, udhetimi_id) DO NOTHING
    `;
    return NextResponse.json({ preferuar: true });
  } catch {
    return NextResponse.json({ error: "Ruajtja deshtoi." }, { status: 500 });
  }
}
