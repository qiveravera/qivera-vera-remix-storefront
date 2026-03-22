import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import globalStyles from "./styles/app.css";

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap",
  },
];

export const meta = () => ([
  { charset: "utf-8" },
  { title: "QIVERA VERA — Mode & Lifestyle" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "description", content: "QIVERA VERA — Marque de mode premium hybride, lifestyle et culture. Pieces exclusives, accessoires et art de vivre." },
]);

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          QIVERA<span>VERA</span>
        </Link>
        <nav className="nav">
          <Link to="/collections/all">Collections</Link>
          <Link to="/collections/nouveautes">Nouveaut&eacute;s</Link>
          <Link to="/pages/about">Notre Histoire</Link>
          <Link to="/cart" className="cart-link">Panier</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo">QIVERA<em>VERA</em></span>
          <p>Marque fran&ccedil;aise hybride mode, lifestyle &amp; culture.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/collections/all">Boutique</Link>
          <Link to="/pages/about">Notre Histoire</Link>
          <Link to="/pages/contact">Contact</Link>
        </div>
        <div className="footer-legal">
          <h4>Informations</h4>
          <Link to="/pages/mentions-legales">Mentions l&eacute;gales</Link>
          <Link to="/pages/cgv">CGV</Link>
          <Link to="/pages/confidentialite">Confidentialit&eacute;</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QIVERA VERA. Tous droits r&eacute;serv&eacute;s. Marque d&eacute;pos&eacute;e INPI.</p>
      </div>
    </footer>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="fr">
      <head>
        <title>Erreur — QIVERA VERA</title>
        <Meta />
        <Links />
      </head>
      <body className="error-page">
        <div className="error-content">
          <h1>Une erreur est survenue</h1>
          <p>{error?.message || "Erreur inconnue"}</p>
          <Link to="/" className="btn-primary">Retour &agrave; l'accueil</Link>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
