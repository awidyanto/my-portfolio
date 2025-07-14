import Image from "next/image";

export default function ProyekPage() {
const links = [
  { name: "Belajar Proyek-1", url: "https://itdev.biz.id" },
  { name: "Belajar Proyek-2", url: "https://itdev.biz.id/lv/public/" },
  { name: "Belajar Proyek-3", url: "https://itdev.biz.id/wp/" },
  { name: "Belajar Proyek-4", url: "https://gomockup.my.id/ditppip" },
];

  return (
    <main id="portofolio" className="py-20 bg-white">
      <h3 className="text-5xl font-bold text-center mb-5">Kegiatan Proyek</h3>
      <p className="text-gray-500 mb-5 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, iure.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-6">

        {links.map((link) => (
          <div key={link.name} className="shadow-xl">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Image width={600} height={400} src="https://placehold.co/600x400" alt="placeholder-image" className="w-full" />
              <div className="py-3 px-5">
                <h4 className="text-center font-bold">{link.name}</h4>
              </div>
            </a>
            <div className="mx-auto"></div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
