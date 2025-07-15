import Head from "next/head";
import Image from "next/image";

export default function ProyekPage() {
  const links = [
    { name: "Belajar Proyek-1", url: "https://itdev.biz.id" },
    { name: "Belajar Proyek-2", url: "https://itdev.biz.id/lv/public/" },
    { name: "Belajar Proyek-3", url: "https://itdev.biz.id/wp/" },
    { name: "Belajar Proyek-4", url: "https://gomockup.my.id/ditppip" },
  ];

  return (
    <div className="flex flex-col min-h-screen dark:invert">
      <Head>
        <title>Proyek Saya - Agung Widyanto</title>
        <meta
          name="description"
          content="Halaman proyek portofolio Agung Widyanto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
          Kegiatan Proyek
        </h1>
        <p className="text-center text-lg mb-8 text-gray-700">
          Dalam kurun waktu 1 tahun terakhir, saya telah melakukan pengembangan
          pembelajaran melalui mini proyek. Kegiatan tersebut memperkaya
          pengalaman dalam pengembangan situs web.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-6">
          {links.map((link) => (
            <div key={link.name} className="shadow-xl">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Image
                  width={600}
                  height={400}
                  src="https://placehold.co/600x400"
                  alt="placeholder-image"
                  className="w-full"
                />
                <div className="py-3 px-5">
                  <h4 className="text-center font-bold dark:invert">
                    {link.name}
                  </h4>
                </div>
              </a>
              <div className="mx-auto"></div>
              <p className="text-center text-sm mb-8 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
