"use client";

import { useEffect, useRef, useState } from "react";

export default function ButoniPreferuar({ udhetimiId }: { udhetimiId: string }) {
  const [preferuar, setPreferuar] = useState(false);
  const [dukeRuajtur, setDukeRuajtur] = useState(false);
  const [dukeNgarkuar, setDukeNgarkuar] = useState(true);
  const [gabim, setGabim] = useState("");
  const dukeKryer = useRef(false);

  useEffect(() => {
    let aktiv = true;

    async function kontrollo() {
      try {
        const res = await fetch(
          `/api/preferuarat?udhetimiId=${encodeURIComponent(udhetimiId)}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Nuk u lexuan te preferuarat.");

        const data = await res.json();
        if (aktiv) setPreferuar(data.preferuar === true);
      } catch {
        if (aktiv) setGabim("Nuk u lexua gjendja. Rifresko faqen.");
      } finally {
        if (aktiv) setDukeNgarkuar(false);
      }
    }

    kontrollo();
    return () => { aktiv = false; };
  }, [udhetimiId]);

  async function ruaj() {
    if (dukeKryer.current || preferuar || dukeNgarkuar) return;

    dukeKryer.current = true;
    setGabim("");
    setPreferuar(true);
    setDukeRuajtur(true);

    try {
      const res = await fetch("/api/preferuarat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ udhetimiId }),
      });

      if (!res.ok) throw new Error("Ruajtja deshtoi.");
      setPreferuar(true);
    } catch {
      setPreferuar(false);
      setGabim("Ruajtja deshtoi. Provo perseri.");
    } finally {
      dukeKryer.current = false;
      setDukeRuajtur(false);
    }
  }

  return (
    <section>
      <button
        className="action"
        type="button"
        onClick={ruaj}
        disabled={dukeNgarkuar || dukeRuajtur || preferuar}
      >
        {dukeNgarkuar
          ? "Duke kontrolluar..."
          : dukeRuajtur
            ? "Duke ruajtur..."
            : preferuar
              ? "U ruajt te te preferuarat"
              : "Ruaj udhetimin te te preferuarat"}
      </button>

      {gabim && (
        <div role="alert">
          <p>{gabim}</p>
          <button type="button" onClick={ruaj} disabled={dukeRuajtur || dukeNgarkuar}>
            Provo perseri
          </button>
        </div>
      )}

      {preferuar && !dukeRuajtur && (
        <p role="status">Udhetimi eshte ruajtur me sukses.</p>
      )}
    </section>
  );
}
