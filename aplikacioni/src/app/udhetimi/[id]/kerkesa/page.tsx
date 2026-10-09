import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Kerkesa({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let udhetim;
  try {
    udhetim = await gjejUdhetimin(id);
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidh�m me databaz�n. Provo p�rs�ri.</p>
        <Link href="/">? Kthehu te lista</Link>
      </main>
    );
  }
  if (!udhetim) notFound();

  return (
    <main>
      <Link href={/udhetimi/\}>? Kthehu te detajet</Link>
      {udhetim.vende > 0 ? (
        <>
          <h1>Simulim: N� pritje</h1>
          <p>K�rkesa p�r {udhetim.nisja} nuk �sht� d�rguar te shoferi.</p>
          <p>Ruajtjen dhe konfirmimin real do t�i shtojm� m� von�.</p>
        </>
      ) : <h1>Nuk ka vende t� lira.</h1>}
    </main>
  );
}
