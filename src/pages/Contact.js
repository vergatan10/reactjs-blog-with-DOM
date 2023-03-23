import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">
        Kamu dapat menghubungiku di bawah ini :
      </p>
      <ul>
        <li>WA : 081928615478</li>
        <li>Email : verga.tandika@gmail.com</li>
      </ul>
      <p className="section-description">
        Atau kamu dapat melihatku pansos di sosmed
      </p>
      <ul>
        <li>
          <a href="https://instagram.com/tandika10">Instagram</a>
        </li>
        <li>
          <a href="https://facebook.com/verga.tan">Facebook</a>
        </li>
      </ul>
    </section>
  );
}
