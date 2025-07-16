import KontakCard from "@/components/KontakCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 dark:invert">
      <div className="text-center">
        <Image
          src="/image/profil.jpg"
          alt="Description of the image"
          width={300}
          height={300}
          className="mx-auto mb-6 h-32 w-32 rounded-full shadow-md"
        />

        <h1 className="text-4xl font-bold text-blue-600">Agung Widyanto</h1>
        <p className="mt-2 text-slate-500">
          Frontend Developer | Tech Enthusiast | Coffee Lover
        </p>
        <KontakCard />
      </div>
    </main>
  );
}
