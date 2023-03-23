import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">
        Halo nama ku Verga, aku adalah seorang web developer yang baru saja
        lulus dari harvard!
      </p>
    </section>
  );
}
