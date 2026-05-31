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
    href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
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
        <div className="announcement-bar">
          <p>💎 Livraison Internationale &mdash; Authenticité Inviolable certifiée par Smart-Contract Web3</p>
        </div>
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
          <Link to="/collections/nouveautes">NOUVEAUTÉS</Link>
          <Link to="/collections/homme">HOMME</Link>
          <Link to="/collections/femme">FEMME</Link>
          <Link to="/collections/leclipse-capsule-ete-2026" className="highlight-link">ÉCLIPSE 2026</Link>
          <Link to="/pages/web3-nft">WEB3</Link>
          <Link to="/pages/about">LE PROJET</Link>
          <Link to="/cart" className="cart-link">
            <span>PANIER</span>
            <span className="cart-badge">0</span>
          </Link>
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
          <p>Maison de couture française éthique fusionnant le luxe streetwear durable et la traçabilité décentralisée sur Ethereum.</p>
          <div className="blockchain-status">
            <span className="dot-active"></span> Ethereum Node Online
          </div>
        </div>
        <div className="footer-links">
          <h4>Collections</h4>
          <Link to="/collections/nouveautes">Nouveautés</Link>
          <Link to="/collections/homme">Homme</Link>
          <Link to="/collections/femme">Femme</Link>
          <Link to="/collections/leclipse-capsule-ete-2026">Capsule Éclipse</Link>
        </div>
        <div className="footer-legal">
          <h4>Maison</h4>
          <Link to="/pages/about">Le Projet</Link>
          <Link to="/pages/tra&ccedil;abilite">Traçabilité Blockchain</Link>
          <Link to="/pages/contact">Contact &amp; Support</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QIVERA VERA. Tous droits réservés. Marque déposée INPI.</p>
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
