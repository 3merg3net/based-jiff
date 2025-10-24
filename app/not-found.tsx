import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-tight py-24 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-3 text-white/70">Looks like this doggo ran off with the page.</p>
      <div className="mt-6">
        <Link href="/" className="btn-base">Back to home</Link>
      </div>
    </main>
  );
}
