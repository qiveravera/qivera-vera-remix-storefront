import { useParams } from "@remix-run/react";

export default function CollectionRoute() {
  const { handle } = useParams();
  
  // Convert handle to nice title (e.g. 'nouveautes' -> 'Nouveautes')
  const title = handle ? handle.charAt(0).toUpperCase() + handle.slice(1).replace(/-/g, ' ') : "Collection";

  return (
    <div className="collection-page">
      <section className="hero">
        <h1>{title}</h1>
        <p>Collection en cours de préparation. La traçabilité Web3 est en phase de synchronisation.</p>
      </section>
      <section className="grid-products">
        <div className="no-products">
           <p>Les pièces exclusives de cette collection seront bientôt disponibles.</p>
        </div>
      </section>
    </div>
  );
}
