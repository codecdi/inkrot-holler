# Inkrot Holler — Official Gallery & Macabre Portfolio

> **Artist:** August L. Soloman  
> **Aesthetic:** Outré, macabre, eerie, dark-mode with fine stipple ink texture styling  
> **Target Inquiry Contact:** `Iamthekeytothegates@gmail.com`  
> **Official Digital Inking Partner:** [Clip Studio Paint](https://www.clipstudio.net/)

---

## ✒️ Overview

**Inkrot Holler** is the official web archive and gallery repository for artist **August L. Soloman**. The platform presents an immersive digital experience showcasing intricate micro-pointillist ink masterworks, outré macabre entities, abyssal landscapes, and anatomical studies.

Every artwork in the gallery is rendered through hundreds of thousands of meticulously placed ink stipple dots. The digital inking workflow is powered by **Clip Studio Paint EX**, bridging analog pen-on-paper precision with advanced digital brush dynamics.

---

## 🎨 Core Architectural Features

1. **Outré Macabre Dark Aesthetic**:
   - Palette composed of obsidian blacks (`#050507`), deep blood crimson (`#8b0000`), bone gold (`#d4af37`), and velvet charcoal.
   - SVG fine stipple noise filter overlays and interactive real-time particle background canvas.

2. **SVG Visual Branding**:
   - High-precision vector logo featuring an ornate occult sigil skull, ink drip motif, and fine stipple accents (`assets/images/branding/logo.svg`).

3. **Clip Studio Paint Acknowledgement**:
   - Official attribution banner acknowledging Clip Studio Paint EX as the primary software engine for digital inking and stipple brush creation, hyperlinked to [https://www.clipstudio.net/](https://www.clipstudio.net/).

4. **"About Stippling" Technique Section**:
   - Deep-dive into micro-dot density, ink pressure, and pointillist shading dynamics.
   - Includes an **Interactive Dot Density Simulator** where visitors can adjust stipple point counts in real time.

5. **Filterable Lightbox Modal Gallery**:
   - Tag filters for *All Visions*, *Macabre Entities*, *Obsidian Landscapes*, *Anatomy & Skulls*, and *Stipple Portraits*.
   - Fullscreen lightbox modal with high-res zoom, medium metadata, dimensions, price estimate, keyboard navigation (`Esc`, `←`, `→`), and direct commission inquiry integration.

6. **Price Quote & Commission Interface**:
   - Interactive quote inquiry form pre-configured to compile detailed project requests directly targeting **`Iamthekeytothegates@gmail.com`**.

---

## 📂 Repository File Structure

```
inkrot-holler/
├── index.html                    # Main HTML5 web portal
├── README.md                     # Project documentation & architecture
└── assets/
    ├── css/
    │   └── styles.css            # Dark macabre fine-stipple design system & responsive layout
    ├── js/
    │   └── script.js             # ES6 background canvas, gallery filter, modal & quote logic
    └── images/
        ├── branding/
        │   ├── logo.svg          # SVG visual logo
        │   └── favicon.svg       # SVG browser favicon
        └── gallery/
            ├── macabre_entity_1.jpg
            ├── macabre_entity_2.jpg
            ├── obsidian_landscape_1.jpg
            ├── stipple_skull_1.jpg
            ├── anatomy_bone_2.jpg
            ├── void_portrait_1.jpg
            ├── chitin_sanctum_1.jpg
            └── sigil_nocturne_1.jpg
```

---

## 🚀 Local Server Launch

To launch and preview the gallery locally on Windows:

### Option 1: Python HTTP Server (Recommended)
First, navigate into the project directory:
```powershell
cd inkrot-holler
```

Then run either `python` or `py`:
```powershell
python -m http.server 8000
# OR if 'python' alias is missing, use the Windows Python launcher:
py -m http.server 8000
```
If port 8000 is occupied, use an alternative port like `8080`:
```powershell
python -m http.server 8080
```
Then open [http://localhost:8000](http://localhost:8000) (or [http://localhost:8080](http://localhost:8080)) in your browser.

### Option 2: Direct File Open
Open `index.html` directly in your default browser:
```powershell
Start-Process index.html
```

---

## 📜 Copyright & License

&copy; 2026 **Inkrot Holler — August L. Soloman**. All Rights Reserved.  
Digital inking & stippling powered by [Clip Studio Paint](https://www.clipstudio.net/).
