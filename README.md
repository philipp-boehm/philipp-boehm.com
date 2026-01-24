# Personal Portfolio (Frontend)

Dies ist der öffentliche Frontend-Teil des "Personal Ecosystems". Es handelt sich um eine statische, hochperformante Webseite, die als digitale Visitenkarte und Einstiegspunkt dient.

**Live URL:** [philipp-boehm.com](https://philipp-boehm.com)

## 🏗 Systemarchitektur

Das Portfolio ist **Projekt A** in einer Zwei-Komponenten-Architektur:
1.  **Portfolio (Dieses Repo):** Public Static Site (Astro).
2.  **Dashboard (Anderes Repo):** Private Backend Hub (Laravel).

Die Verbindung erfolgt über den "Privat"-Button im Header (`src/components/Header.astro`), der auf die Subdomain `personal.philipp-boehm.com` verweist.

## ⚡ Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Sprache:** TypeScript / HTML / CSS
- **Hosting:** IONOS Webspace (Static Hosting)
- **Deployment:** GitHub Actions (via SSH/Rsync)

## 📂 Verzeichnisstruktur

Die wichtigsten Orte für die Weiterentwicklung:

```text
portfolio/
├── public/                 # Statische Assets
│   ├── favicon.svg         # Vektor-Logo (Wichtig für Branding)
│   ├── robots.txt          # SEO Konfiguration
│   └── ...                 # RealFaviconGenerator Dateien
├── src/
│   ├── components/
│   │   └── Header.astro    # Enthält Logo & "Privat"-Link zum Dashboard
│   ├── layouts/
│   │   └── Layout.astro    # Globales HTML-Gerüst (<head>, SEO, Favicons)
│   ├── pages/
│   │   ├── index.astro     # Die Startseite (Landing Page Content)
│   │   └── impressum.astro # Rechtliche Seiten
│   └── styles/
│       └── global.css      # Globale Tailwind Direktiven & Font-Settings
├── astro.config.mjs        # Astro Konfiguration
└── tailwind.config.mjs     # Tailwind Konfiguration (Farben, Fonts)
```

## 🚀 Entwicklung (Lokal)

Voraussetzung: Node.js installiert.

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

2.  **Dev-Server starten:**
    ```bash
    npm run dev
    ```
    Der Server läuft meist unter `http://localhost:4321`.

3.  **Build testen (Produktions-Vorschau):**
    ```bash
    npm run build
    npm run preview
    ```

## 🛠 Konfiguration & Anpassung

### 1. Link zum Dashboard ändern
Sollte sich die URL des Dashboards ändern, muss der Link im Header angepasst werden:
* **Datei:** `src/components/Header.astro`
* Suche nach dem `<a>` Tag mit dem Schloss-Icon.

### 2. Branding & Favicons
Das Projekt nutzt ein einheitliches Favicon-Set (generiert via RealFaviconGenerator).
* **Source:** `public/favicon.svg` (Das Master-Logo).
* **Implementierung:** `<head>` Bereich in `src/layouts/Layout.astro`.

### 3. SEO & Robots
* Standardmäßig ist die Seite indexierbar.
* Die `Layout.astro` akzeptiert eine Prop `noIndex={true}`, um spezifische Seiten (z.B. Impressum) aus dem Index zu halten.

## 📦 Deployment

Das Deployment erfolgt vollautomatisch via **GitHub Actions**.

* **Trigger:** Push auf `main`.
* **Prozess:**
    1.  Astro baut die Seite (`npm run build`) in den Ordner `dist/`.
    2.  Der Inhalt von `dist/` wird per `rsync` auf den IONOS Server übertragen.
* **Secrets:** Benötigt `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY` in den GitHub Repository Settings.

---

**Autor:** Philipp Böhm
**Stand:** 2026