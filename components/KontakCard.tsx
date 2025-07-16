export default function KontakCard() {
  const links = [
    {
      name: "Email",
      url: "mailto:dbkotaku@gmail.com?subject=Subjek%20Email&body=Isi%20Email",
    },
    { name: "GitHub", url: "https://github.com/awidyanto" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/agung-widyanto-ab3981274",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=_gX47-IAAAAJ&hl=en&oi=ao",
    },
  ];

  return (
    <div className="mt-8 flex flex-col gap-4 w-full max-w-xs mx-auto">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold text-center hover:scale-105 transition-all"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
