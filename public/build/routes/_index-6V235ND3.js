import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YXPV3SSS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FU7RZBIL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../utils/shopify.server
var require_shopify = __commonJS({
  "empty-module:../utils/shopify.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.jsx
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.jsx"
  );
  import.meta.hot.lastModified = "1776419922247.3694";
}
function Index() {
  _s();
  const {
    products
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "hero", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Bienvenue chez QIVERA VERA" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Marque fran\xE7aise premium hybride mode, lifestyle et culture. D\xE9couvrez nos cr\xE9ations exclusives." }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid-products", children: products && products.length > 0 ? products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "card-product", children: [
      product.featuredImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.featuredImage.url, alt: product.featuredImage.altText || product.title }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 54,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: product.title }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.description ? product.description.substring(0, 120) + "..." : "Aucune description disponible" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 56,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "price", children: [
        product.priceRange?.minVariantPrice?.amount,
        " ",
        product.priceRange?.minVariantPrice?.currencyCode || "EUR"
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.handle}`, className: "btn-primary", children: "D\xE9couvrir l'Oeuvre" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "web3-badge", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { title: "La tra\xE7abilit\xE9 de cette pi\xE8ce est assur\xE9e sur la blockchain via notre protocole n8n", children: [
        "\u{1F517} ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Digital Twin" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 70,
          columnNumber: 22
        }, this),
        " : Certificat NFT Inclus"
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 53,
      columnNumber: 68
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "no-products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Aucun produit disponible pour le moment. Configurez votre boutique Shopify avec des produits pour les voir ici." }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 73,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(Index, "myEvnF20fcYyfWpqSQ3PXWXvEBg=", false, function() {
  return [useLoaderData];
});
_c = Index;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Erreur lors du chargement des produits" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error?.message || "Une erreur inconnue est survenue" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "btn-primary", children: "Retour \xE0 l'accueil" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Index as default
};
//# sourceMappingURL=/build/routes/_index-6V235ND3.js.map
