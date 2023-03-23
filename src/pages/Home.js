import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website</h1>
      <p className="section-description">
        Halo semua, ini website baru ku. Kamu bsa mendapatkan informasi seputar
        profileku di sini, salam kenal ya.
      </p>
    </section>
  );
}
