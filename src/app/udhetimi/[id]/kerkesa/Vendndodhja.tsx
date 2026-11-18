"use client";

import { useState } from "react";

type Statusi = "fillestar" | "duke-kerkuar" | "sukses" | "refuzuar" | "gabim";

export default function Vendndodhja() {
  const [statusi, setStatusi] = useState<Statusi>("fillestar");
  const [vendndodhja, setVendndodhja] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");

  function perdorVendndodhjen() {
    if (!navigator.geolocation) {
      setStatusi("gabim");
      return;
    }

    setStatusi("duke-kerkuar");

    navigator.geolocation.getCurrentPosition(
      (pozita) => {
        setVendndodhja(
          `Gjeresia: ${pozita.coords.latitude.toFixed(4)}, ` +
          `Gjatesia: ${pozita.coords.longitude.toFixed(4)}`
        );
        setStatusi("sukses");
      },
      (gabimi) => {
        setStatusi(gabimi.code === 1 ? "refuzuar" : "gabim");
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }

  return (
    <section aria-label="Vendtakimi">
      <h2>Zgjedh vendtakimin</h2>

      <button type="button" onClick={perdorVendndodhjen}>
        Përdor vendndodhjen time
      </button>

      {statusi === "duke-kerkuar" && (
        <p role="status">Duke kërkuar vendndodhjen...</p>
      )}

      {statusi === "sukses" && (
        <p role="status">Pika e nisjes: {vendndodhja}</p>
      )}

      {statusi === "refuzuar" && (
        <p role="alert">Leja u refuzua. Mund ta shkruash vendtakimin.</p>
      )}

      {statusi === "gabim" && (
        <p role="alert">
          Vendndodhja nuk është e disponueshme. Shkruaje vendtakimin.
        </p>
      )}

      <div>
        <label htmlFor="vendtakimi">Shkruaj vendtakimin</label>
        <input
          id="vendtakimi"
          type="text"
          placeholder="P.sh. Hyrja kryesore e AAB"
          value={vendtakimi}
          onChange={(e) => setVendtakimi(e.target.value)}
        />
      </div>

      {vendtakimi.trim() && (
        <p role="status">Vendtakimi i shkruar: {vendtakimi}</p>
      )}

      <p>Ky është simulim. Vendtakimi nuk dërgohet te shoferi.</p>
    </section>
  );
}
