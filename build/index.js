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
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
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
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
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
var app_default = "/build/_assets/app-PYLG3KKH.css";

// app/root.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2("div", { className: "announcement-bar", children: /* @__PURE__ */ jsx2("p", { children: "\u{1F48E} Livraison Internationale \u2014 Authenticit\xE9 Inviolable certifi\xE9e par Smart-Contract Web3" }) }),
      /* @__PURE__ */ jsx2(Header, {}),
      /* @__PURE__ */ jsx2("main", { className: "main-content", children: /* @__PURE__ */ jsx2(Outlet, {}) }),
      /* @__PURE__ */ jsx2(Footer, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx2("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "header-inner", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "logo", children: [
      "QIVERA",
      /* @__PURE__ */ jsx2("span", { children: "VERA" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
      /* @__PURE__ */ jsx2(Link, { to: "/collections/nouveautes", children: "NOUVEAUT\xC9S" }),
      /* @__PURE__ */ jsx2(Link, { to: "/collections/homme", children: "HOMME" }),
      /* @__PURE__ */ jsx2(Link, { to: "/collections/femme", children: "FEMME" }),
      /* @__PURE__ */ jsx2(Link, { to: "/collections/leclipse-capsule-ete-2026", className: "highlight-link", children: "\xC9CLIPSE 2026" }),
      /* @__PURE__ */ jsx2(Link, { to: "/pages/web3-nft", children: "WEB3" }),
      /* @__PURE__ */ jsx2(Link, { to: "/pages/about", children: "LE PROJET" }),
      /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "cart-link", children: [
        /* @__PURE__ */ jsx2("span", { children: "PANIER" }),
        /* @__PURE__ */ jsx2("span", { className: "cart-badge", children: "0" })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxs("span", { className: "logo", children: [
          "QIVERA",
          /* @__PURE__ */ jsx2("em", { children: "VERA" })
        ] }),
        /* @__PURE__ */ jsx2("p", { children: "Maison de couture fran\xE7aise \xE9thique fusionnant le luxe streetwear durable et la tra\xE7abilit\xE9 d\xE9centralis\xE9e sur Ethereum." }),
        /* @__PURE__ */ jsxs("div", { className: "blockchain-status", children: [
          /* @__PURE__ */ jsx2("span", { className: "dot-active" }),
          " Ethereum Node Online"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ jsx2("h4", { children: "Collections" }),
        /* @__PURE__ */ jsx2(Link, { to: "/collections/nouveautes", children: "Nouveaut\xE9s" }),
        /* @__PURE__ */ jsx2(Link, { to: "/collections/homme", children: "Homme" }),
        /* @__PURE__ */ jsx2(Link, { to: "/collections/femme", children: "Femme" }),
        /* @__PURE__ */ jsx2(Link, { to: "/collections/leclipse-capsule-ete-2026", children: "Capsule \xC9clipse" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-legal", children: [
        /* @__PURE__ */ jsx2("h4", { children: "Maison" }),
        /* @__PURE__ */ jsx2(Link, { to: "/pages/about", children: "Le Projet" }),
        /* @__PURE__ */ jsx2(Link, { to: "/pages/tra\xE7abilite", children: "Tra\xE7abilit\xE9 Blockchain" }),
        /* @__PURE__ */ jsx2(Link, { to: "/pages/contact", children: "Contact & Support" })
      ] })
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "footer-bottom", children: /* @__PURE__ */ jsxs("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " QIVERA VERA. Tous droits r\xE9serv\xE9s. Marque d\xE9pos\xE9e INPI."
    ] }) })
  ] });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("title", { children: "Erreur \u2014 QIVERA VERA" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "error-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "error-content", children: [
        /* @__PURE__ */ jsx2("h1", { children: "Une erreur est survenue" }),
        /* @__PURE__ */ jsx2("p", { children: error?.message || "Erreur inconnue" }),
        /* @__PURE__ */ jsx2(Link, { to: "/", className: "btn-primary", children: "Retour \xE0 l'accueil" })
      ] }),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsxs2("section", { className: "hero", children: [
      /* @__PURE__ */ jsx3("h1", { children: "Bienvenue chez QIVERA VERA" }),
      /* @__PURE__ */ jsx3("p", { children: "Marque fran\xE7aise premium hybride mode, lifestyle et culture. D\xE9couvrez nos cr\xE9ations exclusives." })
    ] }),
    /* @__PURE__ */ jsx3("section", { className: "grid-products", children: products && products.length > 0 ? products.map((product) => /* @__PURE__ */ jsxs2("article", { className: "card-product", children: [
      product.featuredImage && /* @__PURE__ */ jsx3(
        "img",
        {
          src: product.featuredImage.url,
          alt: product.featuredImage.altText || product.title
        }
      ),
      /* @__PURE__ */ jsx3("h2", { children: product.title }),
      /* @__PURE__ */ jsx3("p", { children: product.description ? product.description.substring(0, 120) + "..." : "Aucune description disponible" }),
      /* @__PURE__ */ jsxs2("p", { className: "price", children: [
        product.priceRange?.minVariantPrice?.amount,
        " ",
        product.priceRange?.minVariantPrice?.currencyCode || "EUR"
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "product-actions", children: /* @__PURE__ */ jsx3(
        Link2,
        {
          to: `/products/${product.handle}`,
          className: "btn-primary",
          children: "D\xE9couvrir l'Oeuvre"
        }
      ) }),
      /* @__PURE__ */ jsx3("div", { className: "web3-badge", children: /* @__PURE__ */ jsxs2("span", { title: "La tra\xE7abilit\xE9 de cette pi\xE8ce est assur\xE9e sur la blockchain via notre protocole n8n", children: [
        "\u{1F517} ",
        /* @__PURE__ */ jsx3("b", { children: "Digital Twin" }),
        " : Certificat NFT Inclus"
      ] }) })
    ] }, product.id)) : /* @__PURE__ */ jsx3("div", { className: "no-products", children: /* @__PURE__ */ jsx3("p", { children: "Aucun produit disponible pour le moment. Configurez votre boutique Shopify avec des produits pour les voir ici." }) }) })
  ] });
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ jsxs2("div", { className: "error-content", children: [
    /* @__PURE__ */ jsx3("h1", { children: "Erreur lors du chargement des produits" }),
    /* @__PURE__ */ jsx3("p", { children: error?.message || "Une erreur inconnue est survenue" }),
    /* @__PURE__ */ jsx3(Link2, { to: "/", className: "btn-primary", children: "Retour \xE0 l'accueil" })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RTKAEGLD.js", imports: ["/build/_shared/chunk-QKQRSHVA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E4N73AW2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-CLGFCFQ7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 } }, version: "d237f4d5", hmr: void 0, url: "/build/manifest-D237F4D5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
