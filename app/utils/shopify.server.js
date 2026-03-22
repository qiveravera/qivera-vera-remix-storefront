// Shopify Storefront API integration
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  console.warn(
    "ATTENTION: Variables d'environnement Shopify non configurees. " +
      "Ajoutez SHOPIFY_STORE_DOMAIN et SHOPIFY_STOREFRONT_ACCESS_TOKEN dans votre fichier .env"
  );
}

const SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch({ query, variables = {} }) {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    console.error("Shopify credentials missing");
    return { data: null, errors: [{ message: "Shopify not configured" }] };
  }

  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const json = await response.json();

    if (json.errors) {
      console.error("Shopify GraphQL errors:", json.errors);
    }

    return json;
  } catch (error) {
    console.error("Shopify fetch error:", error);
    return { data: null, errors: [{ message: error.message }] };
  }
}

export async function fetchShopifyProducts(limit = 12) {
  const query = `
    query GetProducts($limit: Int!) {
      products(first: $limit) {
        edges {
          node {
            id
            title
            handle
            description
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const result = await shopifyFetch({ query, variables: { limit } });

  if (result.errors || !result.data) {
    console.error("Error fetching products:", result.errors);
    return [];
  }

  return result.data.products.edges.map((edge) => edge.node);
}

export async function fetchShopifyProduct(handle) {
  const query = `
    query GetProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  `;

  const result = await shopifyFetch({ query, variables: { handle } });

  if (result.errors || !result.data) {
    console.error("Error fetching product:", result.errors);
    return null;
  }

  return result.data.productByHandle;
}
