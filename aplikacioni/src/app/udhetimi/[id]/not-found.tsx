import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg p-8">
      <h1 className="text-2xl font-bold">Udhëtimi nuk u gjet</h1>
      <p>ID e kërkuar nuk ekziston. Kontrollo listën e udhëtimeve.</p>
      <Link href="/">← Kthehu te lista</Link>
    </main>
  );
}
