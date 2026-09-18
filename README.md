# philipp-boehm.com

Dies ist der öffentliche Frontend-Teil des **Personal Ecosystems**.
Es handelt sich um ein statisches One-Page-Portfolio ohne externe Abhängigkeiten.

> **Projekt-Kontext:**
> Dieses Repository ist das Frontend. Das zugehörige Backend liegt unter:
> **[Personal Dashboard (Backend)](https://github.com/philipp-boehm/personal.philipp-boehm.com)**

**Live URL:** [philipp-boehm.com](https://philipp-boehm.com)

## Systemarchitektur & Tech Stack

Das Projekt wurde auf maximale Langlebigkeit und Wartungsarmut optimiert (Zero-Dependency-Architektur). Build-Prozesse, Paketmanager (NPM) und Frameworks (Astro, Tailwind) entfallen vollständig.

* **Frontend:** HTML5, CSS3 (Vanilla)
* **Architektur:** Single-File-Ansatz pro Route (CSS ist nativ im `<head>` eingebettet)
* **Hosting:** IONOS Webspace
* **Deployment:** GitHub Actions (via SCP)

## Verzeichnisstruktur

```text
[philipp-boehm.com/](https://philipp-boehm.com/)
├── .github/workflows/
│   └── deploy.yml       # CI/CD Pipeline
├── index.html           # Startseite inkl. Styling & Content
├── favicon.svg          # Vektor-Logo (Master)
├── favicon.ico          # Fallback Favicon
└── apple-touch-icon.png # iOS Homescreen Icon
```

## Entwicklung (Lokal)

1. Repository klonen.
2. `index.html` direkt in einem Webbrowser öffnen.
3. Alternativ eine lokale Live-Server-Erweiterung (z. B. in VS Code) nutzen.

Es sind keine Installationen (`npm install`) oder Build-Schritte (`npm run build`) erforderlich.

## Sicherheits- und Entwicklungsrichtlinien

Da das Projekt ohne abstrahierende Frameworks arbeitet, sind bei der Weiterentwicklung folgende Regeln zwingend einzuhalten:

1. **Strikte Zero-Dependency-Regel:** Es dürfen keine externen Skripte, Stylesheets oder Fonts über externe CDNs (Content Delivery Networks) eingebunden werden.
2. **XSS-Prävention:** Falls zukünftig Vanilla JavaScript hinzugefügt wird, dürfen dynamische Inhalte niemals ungeprüft ins DOM (z. B. via `innerHTML`) injiziert werden. Stattdessen ist `textContent` zu verwenden.
3. **Kontext-Maximierung (KI-Fokus):** CSS und JavaScript sind direkt in die jeweilige HTML-Datei zu schreiben. Die Aufteilung in separate `.css`- oder `.js`-Dateien ist untersagt, um den Kontext für KI-Code-Generatoren in einer einzigen Datei zu halten.
4. **Deployment-Filterung:** Dateien wie `.git`, `.github` oder `README.md` werden durch die CI/CD-Pipeline automatisch vor dem Upload entfernt und dürfen nicht manuell auf den Server kopiert werden.

## Deployment

Der Upload erfolgt vollautomatisch via GitHub Actions bei jedem Push auf den `main`-Branch.
Die Pipeline nutzt SCP (Secure Copy), um die Dateien sicher auf den IONOS-Server (`www/philipp-boehm.com`) zu übertragen.

---
**Autor:** Philipp Böhm  
**Stand:** 2026