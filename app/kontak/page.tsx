// contact.tsx

"use client";
import Head from "next/head";
import { useState, ChangeEvent, FormEvent } from "react";
import { ContactFormData } from "../kontak/formData"; // Impor interface typescript

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // mengirim data ke API endpoint Anda (misalnya, melalui Next.js API Routes ... untuk bahan belajar)
      // Contoh: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      console.log("Mengirim data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi delay
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form setelah sukses
    } catch (error) {
      console.error("Gagal mengirim:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="flex flex-col min-h-screen dark:invert">
      <Head>
        <title>Kontak Saya - Agung Widyanto</title>
        <meta
          name="description"
          content="Halaman kontak portofolio Agung Widyanto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-2 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
          Hubungi Saya
        </h1>

        <p className="text-center text-lg mb-8 text-gray-700">
          Silakan gunakan formulir di bawah ini atau temukan saya di media sosial.
        </p>

        <div className="flex flex-col md:flex-row gap-5 bg-white p-3 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nama:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Pesan:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-center text-green-600 font-semibold">
                Pesan Anda berhasil dikirim!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-center text-red-600 font-semibold">
                Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
              </p>
            )}
          </form>

          <div className="flex-1 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
              Informasi Lainnya
            </h2>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg font-semibold text-center hover:bg-slate-600 hover:scale-105 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
