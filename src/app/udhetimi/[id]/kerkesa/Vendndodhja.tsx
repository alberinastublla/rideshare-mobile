"use client";

import { useState } from "react";

type Statusi =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function Vendndodhja() {
  const [statusi, setStatusi] = useState<Statusi>("idle");
  const [vendndodhja, setVendndodhja] = useState("");
  const [saktesia, setSaktesia] = useState<number | null>(null);
  const [vendtakimi, setVendtakimi] = useState("");
  const [konfirmuar, setKonfirmuar] = useState("");
  const [gabimi, setGabimi] = useState("");

  function perdorVendndodhjen() {
    setVendndodhja("");
    setSaktesia(null);

    if (
      typeof navigator === "undefined" ||
      !navigator.geolocation
    ) {
      setStatusi("unavailable");
      return;
    }

    setStatusi("loading");

    navigator.geolocation.getCurrentPosition(
      (pozita) => {
        setVendndodhja(
          `Gjeresia: ${pozita.coords.latitude.toFixed(4)}, ` +
          `Gjatesia: ${pozita.coords.longitude.toFixed(4)}`
        );
        setSaktesia(pozita.coords.accuracy);
        setStatusi("success");
      },
      (error) => {
        if (error.code === 1) {
          setStatusi("denied");
        } else if (error.code === 3) {
          setStatusi("timeout");
        } else {
          setStatusi("unavailable");
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
      }
    );
  }

  function konfirmoVendtakimin() {
    const teksti = vendtakimi.trim();

    if (!teksti) {
      setGabimi("Shkruaj një vendtakim para konfirmimit.");
      return;
    }

    setKonfirmuar(teksti);
    setGabimi("");
  }

  const mesazhiStatusit: Record<Statusi, string> = {
    idle: "",
    loading: "Duke kërkuar vendndodhjen...",
    success: `Pika e nisjes: ${vendndodhja}`,
    denied: "Leja u refuzua. Mund ta shkruash vendtakimin.",
    timeout: "Koha e kërkimit përfundoi. Shkruaje vendtakimin.",
    unavailable:
      "Vendndodhja nuk është e disponueshme. Shkruaje vendtakimin.",
  };

  return (
    <section aria-label="Vendtakimi">
      <h2>Zgjedh vendtakimin</h2>

      <button
        type="button"
        data-testid="locate-me"
        onClick={perdorVendndodhjen}
      >
        Përdor vendndodhjen time
      </button>

      <p
        data-testid="location-status"
        data-state={statusi}
        role="status"
      >
        {mesazhiStatusit[statusi]}
      </p>

      <p data-testid="location-accuracy">
        {saktesia !== null
          ? `Saktësia: ${Math.round(saktesia)} m`
          : ""}
      </p>

      <div>
        <label htmlFor="vendtakimi">Shkruaj vendtakimin</label>
        <input
          id="vendtakimi"
          data-testid="meeting-input"
          type="text"
          placeholder="P.sh. Biblioteka"
          value={vendtakimi}
          onChange={(e) => {
            setVendtakimi(e.target.value);
            setGabimi("");
          }}
        />

        <button
          type="button"
          data-testid="confirm-meeting"
          onClick={konfirmoVendtakimin}
        >
          Konfirmo vendtakimin
        </button>
      </div>

      <p data-testid="meeting-error" role="alert">
        {gabimi}
      </p>

      <p data-testid="confirmed-meeting" role="status">
        {konfirmuar
          ? `Vendtakimi i konfirmuar: ${konfirmuar}`
          : ""}
      </p>

      <p>
        Ky është simulim. Vendtakimi nuk dërgohet te shoferi.
      </p>
    </section>
  );
}
