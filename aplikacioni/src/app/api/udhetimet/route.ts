import { lexoUdhetimet } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

// Vetem te dhenat publike te udhetimit.
export async function GET() {
  try {
    const rows = await lexoUdhetimet();

    const trips = rows.map(
      ({ id, nisja, destinacioni, ora, vendtakimi, vende }) => ({
        id,
        nisja,
        destinacioni,
        ora,
        vendtakimi,
        vende,
      })
    );

    return Response.json(
      { trips },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return Response.json(
      { error: "Lista nuk mund te lexohet tani." },
      { status: 503 }
    );
  }
}
