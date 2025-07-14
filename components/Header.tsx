import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-slate-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/proyek" className="hover:text-slate-300">
            Proyek
          </Link>
          <Link href="/kontak" className="hover:text-slate-300">
            Kontak
          </Link>
        </div>
      </nav>
    </header>
  );
}
