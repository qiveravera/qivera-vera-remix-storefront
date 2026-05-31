var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(new Response(stream, { headers: responseHeaders, status: responseStatusCode })), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(new Response(stream, { headers: responseHeaders, status: responseStatusCode })), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

// app/styles/app.css
var app_default = "/build/_assets/app-DM5TVK7D.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: app_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
  }
], meta = () => [
  { charset: "utf-8" },
  { title: "QIVERA VERA \u2014 Mode & Lifestyle" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "description", content: "QIVERA VERA \u2014 Marque de mode premium hybride, lifestyle et culture. Pieces exclusives, accessoires et art de vivre." }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "announcement-bar", children: /* @__PURE__ */ jsxDEV2("p", { children: "\u{1F48E} Livraison Internationale \u2014 Authenticit\xE9 Inviolable certifi\xE9e par Smart-Contract Web3" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Header, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("main", { className: "main-content", children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Footer, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function Header() {
  return /* @__PURE__ */ jsxDEV2("header", { className: "site-header", children: /* @__PURE__ */ jsxDEV2("div", { className: "header-inner", children: [
    /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: "logo", children: [
      "QIVERA",
      /* @__PURE__ */ jsxDEV2("span", { children: "VERA" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("nav", { className: "nav", children: [
      /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/nouveautes", children: "NOUVEAUT\xC9S" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/homme", children: "HOMME" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/femme", children: "FEMME" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/leclipse-capsule-ete-2026", className: "highlight-link", children: "\xC9CLIPSE 2026" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/pages/web3-nft", children: "WEB3" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/pages/about", children: "LE PROJET" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/cart", className: "cart-link", children: [
        /* @__PURE__ */ jsxDEV2("span", { children: "PANIER" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV2("span", { className: "cart-badge", children: "0" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ jsxDEV2("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "footer-inner", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxDEV2("span", { className: "logo", children: [
          "QIVERA",
          /* @__PURE__ */ jsxDEV2("em", { children: "VERA" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 81,
            columnNumber: 40
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { children: "Maison de couture fran\xE7aise \xE9thique fusionnant le luxe streetwear durable et la tra\xE7abilit\xE9 d\xE9centralis\xE9e sur Ethereum." }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "blockchain-status", children: [
          /* @__PURE__ */ jsxDEV2("span", { className: "dot-active" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          " Ethereum Node Online"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "footer-links", children: [
        /* @__PURE__ */ jsxDEV2("h4", { children: "Collections" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/nouveautes", children: "Nouveaut\xE9s" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/homme", children: "Homme" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/femme", children: "Femme" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/collections/leclipse-capsule-ete-2026", children: "Capsule \xC9clipse" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "footer-legal", children: [
        /* @__PURE__ */ jsxDEV2("h4", { children: "Maison" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/pages/about", children: "Le Projet" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/pages/tra\xE7abilite", children: "Tra\xE7abilit\xE9 Blockchain" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/pages/contact", children: "Contact & Support" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: "footer-bottom", children: /* @__PURE__ */ jsxDEV2("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " QIVERA VERA. Tous droits r\xE9serv\xE9s. Marque d\xE9pos\xE9e INPI."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("title", { children: "Erreur \u2014 QIVERA VERA" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "error-page", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "error-content", children: [
        /* @__PURE__ */ jsxDEV2("h1", { children: "Une erreur est survenue" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { children: error?.message || "Erreur inconnue" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: "btn-primary", children: "Retour \xE0 l'accueil" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link as Link2 } from "@remix-run/react";

// app/utils/shopify.server.js
var SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
(!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) && console.warn(
  "ATTENTION: Variables d'environnement Shopify non configurees. Ajoutez SHOPIFY_STORE_DOMAIN et SHOPIFY_STOREFRONT_ACCESS_TOKEN dans votre fichier .env"
);
var SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
async function shopifyFetch({ query, variables = {} }) {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN)
    return console.error("Shopify credentials missing"), { data: null, errors: [{ message: "Shopify not configured" }] };
  try {
    let response = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN
      },
      body: JSON.stringify({ query, variables })
    });
    if (!response.ok)
      throw new Error(`Shopify API error: ${response.statusText}`);
    let json2 = await response.json();
    return json2.errors && console.error("Shopify GraphQL errors:", json2.errors), json2;
  } catch (error) {
    return console.error("Shopify fetch error:", error), { data: null, errors: [{ message: error.message }] };
  }
}
async function fetchShopifyProducts(limit = 12) {
  let result = await shopifyFetch({ query: `
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
  `, variables: { limit } });
  return result.errors || !result.data ? (console.error("Error fetching products:", result.errors), []) : result.data.products.edges.map((edge) => edge.node);
}

// app/routes/_index.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader = async () => {
  try {
    let products = await fetchShopifyProducts();
    return json({ products });
  } catch (error) {
    return console.error("Error fetching products:", error), json({ products: [] });
  }
};
function Index() {
  let { products } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("section", { className: "hero", children: [
      /* @__PURE__ */ jsxDEV3("h1", { children: "Bienvenue chez QIVERA VERA" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: "Marque fran\xE7aise premium hybride mode, lifestyle et culture. D\xE9couvrez nos cr\xE9ations exclusives." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("section", { className: "grid-products", children: products && products.length > 0 ? products.map((product) => /* @__PURE__ */ jsxDEV3("article", { className: "card-product", children: [
      product.featuredImage && /* @__PURE__ */ jsxDEV3(
        "img",
        {
          src: product.featuredImage.url,
          alt: product.featuredImage.altText || product.title
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 33,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3("h2", { children: product.title }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 38,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: product.description ? product.description.substring(0, 120) + "..." : "Aucune description disponible" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "price", children: [
        product.priceRange?.minVariantPrice?.amount,
        " ",
        product.priceRange?.minVariantPrice?.currencyCode || "EUR"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "product-actions", children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          to: `/products/${product.handle}`,
          className: "btn-primary",
          children: "D\xE9couvrir l'Oeuvre"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 49,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 48,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "web3-badge", children: /* @__PURE__ */ jsxDEV3("span", { title: "La tra\xE7abilit\xE9 de cette pi\xE8ce est assur\xE9e sur la blockchain via notre protocole n8n", children: [
        "\u{1F517} ",
        /* @__PURE__ */ jsxDEV3("b", { children: "Digital Twin" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 58,
          columnNumber: 22
        }, this),
        " : Certificat NFT Inclus"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 57,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 56,
        columnNumber: 15
      }, this)
    ] }, product.id, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)) : /* @__PURE__ */ jsxDEV3("div", { className: "no-products", children: /* @__PURE__ */ jsxDEV3("p", { children: "Aucun produit disponible pour le moment. Configurez votre boutique Shopify avec des produits pour les voir ici." }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "error-content", children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "Erreur lors du chargement des produits" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: error?.message || "Une erreur inconnue est survenue" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Link2, { to: "/", className: "btn-primary", children: "Retour \xE0 l'accueil" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EOXENJQH.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-YXPV3SSS.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-FU7RZBIL.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-H76H7V6J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6V235ND3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 } }, version: "db1cef37", hmr: { runtime: "/build/_shared\\chunk-FU7RZBIL.js", timestamp: 1780186135970 }, url: "/build/manifest-DB1CEF37.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
