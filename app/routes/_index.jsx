import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { fetchShopifyProducts } from "../utils/shopify.server";

export const loader = async () => {
  try {
    const products = await fetchShopifyProducts();
    return json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return json({ products: [] });
  }
};

export default function Index() {
  const { products } = useLoaderData();

  return (
    <div>
      <section className="hero">
        <h1>Bienvenue chez QIVERA VERA</h1>
        <p>
          Marque fran&ccedil;aise premium hybride mode, lifestyle et culture.
          D&eacute;couvrez nos cr&eacute;ations exclusives.
        </p>
      </section>

      <section className="grid-products">
        {products && products.length > 0 ? (
          products.map((product) => (
            <article key={product.id} className="card-product">
              {product.featuredImage && (
                <img
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || product.title}
                />
              )}
              <h2>{product.title}</h2>
              <p>
                {product.description
                  ? product.description.substring(0, 120) + "..."
                  : "Aucune description disponible"}
              </p>
              <p className="price">
                {product.priceRange?.minVariantPrice?.amount}{" "}
                {product.priceRange?.minVariantPrice?.currencyCode || "EUR"}
              </p>
              <Link
                to={`/products/${product.handle}`}
                className="btn-primary"
              >
                Voir le produit
              </Link>
            </article>
          ))
        ) : (
          <div className="no-products">
            <p>
              Aucun produit disponible pour le moment. Configurez votre boutique
              Shopify avec des produits pour les voir ici.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div className="error-content">
      <h1>Erreur lors du chargement des produits</h1>
      <p>{error?.message || "Une erreur inconnue est survenue"}</p>
      <Link to="/" className="btn-primary">
        Retour &agrave; l'accueil
      </Link>
    </div>
  );
}
