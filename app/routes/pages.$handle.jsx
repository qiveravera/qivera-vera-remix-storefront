import { useParams } from "@remix-run/react";

export default function PageRoute() {
  const { handle } = useParams();
  
  const title = handle ? handle.charAt(0).toUpperCase() + handle.slice(1).replace(/-/g, ' ') : "Page";

  return (
    <div className="page-content">
      <section className="hero">
        <h1>{title}</h1>
        <p>Cette page est en cours de développement. QIVERA VERA prépare une expérience unique.</p>
      </section>
    </div>
  );
}
