import { lexoUdhetimin } from "../../lib/udhetimet";
import { notFound } from "next/navigation";

export default async function UdhetimiPage({ params }: { params: { id: string } }) {
  const udhetimi = await lexoUdhetimin(params.id);

  if (!udhetimi) {
    notFound();
  }

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {udhetimi.nisja} ➔ {udhetimi.destinacioni}
      </h1>
      <div className="bg-white p-4 rounded-lg shadow border space-y-2">
        <p><strong>Nisja:</strong> {udhetimi.nisja}</p>
        <p><strong>Destinacioni:</strong> {udhetimi.destinacioni}</p>
        <p><strong>Koha:</strong> {udhetimi.koha}</p>
        <p><strong>Çmimi:</strong> {udhetimi.cmimi} €</p>
        <p><strong>Vendet e lira:</strong> {udhetimi.vendet_e_lira}</p>
      </div>
    </main>
  );
}