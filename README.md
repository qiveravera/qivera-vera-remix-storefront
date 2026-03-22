# QIVERA VERA Remix Storefront

**Storefront e-commerce moderne avec Remix + Shopify Storefront API**

Design dark luxury premium conçu pour QIVERA VERA — Marque française hybride mode, lifestyle et tech.

---

## 🚀 Stack Technique

- **Framework** : Remix (React SSR)
- **Styling** : CSS custom (Dark Luxury Theme)
- **E-commerce** : Shopify Storefront API (GraphQL)
- **Déploiement** : Vercel (recommandé)
- **Fonts** : Cormorant Garamond + Montserrat (Google Fonts)

---

## 🛠️ Installation Locale

### 1. Cloner le repo
```bash
git clone https://github.com/qiveravera/qivera-vera-remix-storefront.git
cd qivera-vera-remix-storefront
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine :
```bash
SHOPIFY_STORE_DOMAIN=votre-boutique.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre_token_ici
```

**Comment obtenir vos credentials Shopify :**
1. Connectez-vous à votre admin Shopify
2. Allez dans **Settings → Apps and sales channels**
3. Cliquez sur **Develop apps** → **Create an app**
4. Nommez votre app (ex: "QIVERA VERA Storefront")
5. Activez **Storefront API** et sélectionnez les permissions :
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
6. Copiez votre **Storefront Access Token**

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir votre boutique.

---

## ☁️ Déploiement sur Vercel

### Méthode 1 : Déploiement depuis GitHub (Recommandé)

1. **Connectez-vous à [Vercel](https://vercel.com)**

2. **Importez le projet**
   - Cliquez sur "Add New" → "Project"
   - Sélectionnez votre repo `qivera-vera-remix-storefront`

3. **Configurez les variables d'environnement**
   Ajoutez dans les **Environment Variables** :
   ```
   SHOPIFY_STORE_DOMAIN=votre-boutique.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre_token_ici
   ```

4. **Déployez**
   - Cliquez sur "Deploy"
   - Vercel va automatiquement détecter Remix et configurer le build

### Méthode 2 : Déploiement en CLI

```bash
npm i -g vercel
vercel
```

---

## 🌐 Connecter votre domaine qiveravera.com

### 1. Dans Vercel

1. Allez dans votre projet → **Settings** → **Domains**
2. Ajoutez votre domaine : `qiveravera.com` et `www.qiveravera.com`
3. Vercel vous donnera les enregistrements DNS à configurer

### 2. Dans votre gestionnaire DNS (ex: Cloudflare, OVH, Google Domains)

Ajoutez ces enregistrements :

**Pour le domaine principal :**
```
Type: A
Nom: @
Valeur: 76.76.21.21
```

**Pour www :**
```
Type: CNAME
Nom: www
Valeur: cname.vercel-dns.com
```

**Attendre 24-48h** pour la propagation DNS.

---

## 🎨 Personnalisation du Design

### Modifier les couleurs QIVERA VERA

Dans `app/styles/app.css`, modifiez les variables CSS :

```css
:root {
  --noir: #0a0a0a;
  --or: #d4af37;      /* Or QIVERA VERA */
  --or-clair: #f4e0a8;
  /* ... */
}
```

### Ajouter de nouvelles routes

Créez un fichier dans `app/routes/` :
- `collections.jsx` → `/collections`
- `pages.about.jsx` → `/pages/about`
- `products.$handle.jsx` → `/products/nom-du-produit`

---

## 📚 Structure du Projet

```
qivera-vera-remix-storefront/
├── app/
│   ├── entry.client.jsx        # Hydratation côté client
│   ├── entry.server.jsx        # SSR
│   ├── root.jsx                 # Layout principal
│   ├── routes/
│   │   └── _index.jsx           # Page d'accueil
│   ├── styles/
│   │   └── app.css              # Design QIVERA VERA
│   └── utils/
│       └── shopify.server.js    # API Shopify
├── package.json
├── vite.config.ts
└── .env.example
```

---

## ✅ Checklist de Déploiement

- [ ] Variables d'environnement Shopify configurées
- [ ] Produits ajoutés dans Shopify
- [ ] Projet déployé sur Vercel
- [ ] Domaine qiveravera.com connecté
- [ ] SSL activé (automatique avec Vercel)
- [ ] Tests de navigation
- [ ] Google Analytics configuré (optionnel)

---

## 👨‍💻 Support

Pour toute question : contactez l'équipe QIVERA VERA

**Marque déposée INPI** © 2026 QIVERA VERA. Tous droits réservés.
