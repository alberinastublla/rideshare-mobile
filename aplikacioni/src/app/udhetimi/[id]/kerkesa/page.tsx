import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "../../../lib/udhetimet";

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
        <p role="alert">Nuk u lidhem me databazen. Provo perseri.</p>
        <Link href="/">Kthehu te lista</Link>
      </main>
    );
  }
  if (!udhetim) notFound();

  return (
    <main>
      <Link href={`/udhetimi/${id}`}>Kthehu te detajet</Link>
      {udhetim.vende > 0 ? (
        <>
          <h1>Simulim: Ne pritje</h1>
          <p>Kerkesa per {udhetim.nisja} nuk eshte derguar te shoferi.</p>
          <p>Ruajtjen dhe konfirmimin real do t'i shtojme me vone.</p>
        </>
      ) : (
        <h1>Nuk ka vende te lira.</h1>
      )}
    </main>
  );
}