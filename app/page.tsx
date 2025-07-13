// app/page.tsx. rewrite by Agung.

export default function HomePage() {
  const links = [
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
    <main>
      <div>
        <h1>Agung Widyanto</h1>
        <p>Frontend Developer | Tech Enthusiast | Coffee Lover</p>
        <div>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
