import "server-only";
import { sql } from "./db";

export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
};

export async function lexoUdhetimet(): Promise<Udhetim[]> {
  const rows = await sql`
    SELECT id::text, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet
    ORDER BY ora ASC
  `;
  return rows as Udhetim[];
}

export async function gjejUdhetimin(id: string): Promise<Udhetim | null> {
  const rows = await sql`
    SELECT id::text, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet
    WHERE id = ${id}
    LIMIT 1
  `;
  return (rows[0] as Udhetim) || null;
}