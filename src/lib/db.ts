import "server-only";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL nuk është vendosur në mjedis.");
}

export const sql = neon(process.env.DATABASE_URL);