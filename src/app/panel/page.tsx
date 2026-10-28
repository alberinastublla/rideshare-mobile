import Link from "next/link";
import Hyrja from "@/components/Hyrja";
import { profiliIm } from "@/lib/lejet";
import { ruajOren } from "./actions";

export const dynamic = "force-dynamic";

const mesazhet: Record<string, string> = {
  hyr: "Hyr në llogari para se të ndryshosh udhëtimin.",
  ndaluar: "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.",
  fushe: "Shkruaj një orë të vlefshme.",
  ruajtur: "Ora u ruajt me sukses.",
  databaza: "Nuk u lidhëm me databazën. Provo përsëri.",
};

export default async function Panel({
  searchParams,
}: {
  searchParams: Promise<{ m?: string }>;
}) {
  const { m } = await searchParams;

  let p;
  try {
    p = await profiliIm();
  } catch {
    return (
      <main>
        <h1>Paneli im</h1>
        <p role="alert">{mesazhet.databaza}</p>
        <Link href="/panel">Provo përsëri</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Paneli im</h1>

      {m && mesazhet[m] && <p role="status">{mesazhet[m]}</p>}

      {p ? (
        <>
          <p>Përshëndetje, {p.emri}.</p>
          <p>Roli: <strong>{p.roli}</strong></p>
          <p>ID ime GitHub: <code>{p.id}</code></p>
        </>
      ) : (
        <p>Hyr me GitHub për të vazhduar.</p>
      )}

      <Hyrja brenda={Boolean(p)} />

      {p?.roli === "shofer" ? (
        <form action={ruajOren}>
          <h2>Ndrysho orën e udhëtimit tim</h2>
          <input type="hidden" name="id" value="2" />
          <label htmlFor="ora">Ora e re</label>
          <input
            id="ora"
            name="ora"
            type="time"
            defaultValue="08:15"
            required
          />
          <button type="submit">Ruaj orën</button>
        </form>
      ) : p ? (
        <p>Si udhëtar nuk mund të ndryshosh orën.</p>
      ) : null}

      <p><Link href="/">Kthehu te udhëtimet</Link></p>
    </main>
  );
}
