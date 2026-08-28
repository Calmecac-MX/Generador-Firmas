# Generador de Firmas de Correo — Calmécac

<p align="center">
  <img src="./src/assets/favicon-blanco.ico" alt="Calmécac Logo" width="80" height="80" />
</p>

Un generador de firmas para correo electrónico moderno, potente y de alto rendimiento desarrollado para **Calmécac** ([calmecac.lat](https://calmecac.lat)).

Construido sobre **Next.js 16+ (App Router)**, **TypeScript 7**, **React 19** y **Tailwind CSS 4**, genera código HTML bulletproof a prueba de fallos basado en tablas puras e inline styles, garantizando el **100% de compatibilidad visual** en **Gmail**, **Outlook (Desktop & Web)**, **SpaceMail**, **Apple Mail** y principales clientes de correo.

---

## 🌟 Características Destacadas

- **Estética Calmécac (Esmeralda Tech & High Contrast)**:
  - Diseño en tema oscuro de obsidiana (`#08080a`), contenedores elevados (`#111318`) y acentos en **Esmeralda Tech** (`#10b981`).
  - Paleta de colores armónica y seleccionable (*Esmeralda Tech*, *Dorado Ámbar*, *Azul Cían*, *Fuego Carmesí*, *Púrpura Místico*, *Obsidiana Minimal*).
  - Insignias de estatus entre corchetes tipo terminal (`[ÁGUILA QUE DESCIENDE]`, `[ARQUITECTO MONUMENTAL]`, `[CONSEJERO SUPREMO]`).

- **Datos Dummy de la Cultura Mexica**:
  - Incluye datos por defecto y presets inspirados en héroes y estrategas mexicas: **Cuauhtémoc** (*Hueyi Tlatoani*), **Nezahualcóyotl** (*Señor de Texcoco*) y **Tlacaelel** (*Cihuacóatl*).

- **Íconos Vectoriales Integrados (SVG Data URIs)**:
  - Íconos inline en alta resolución para Correo (sobre), Teléfono (auricular), Sitio Web (globo) y Ubicación (marcador).
  - Íconos de marca para redes sociales: **LinkedIn**, **Twitter/X**, **Instagram**, **WhatsApp** y **GitHub**.

- **Renderizado Condicional Estricto**:
  - Cualquier campo que dejes en blanco o sin foto (avatar, correo, teléfono, web, ubicación, badge, redes, botón CTA o banner) se **oculta automáticamente** de la firma sin generar recuadros rotos ni espacios vacíos.

- **Favicon Adaptativo Invertido (Alto Contraste)**:
  - **Modo Oscuro del Sistema (`prefers-color-scheme: dark`)**: Muestra el logotipo blanco (`favicon-blanco.ico`) para destacar en pestañas oscuras.
  - **Modo Claro del Sistema (`prefers-color-scheme: light`)**: Muestra el logotipo negro (`favicon-negro.ico`) para destacar en pestañas claras.

- **Motor de Exportación Multi-Formato**:
  - **Copiar Firma para Correo (Rich Text)**: Permite pegar en 1-Click (`Ctrl + V` / `Cmd + V`) directamente dentro de las configuraciones de Gmail, Outlook o Apple Mail.
  - **Copiar Código HTML**: Genera la cadena HTML pura procesada para SpaceMail, Roundcube o plataformas CRM.
  - **Descargar PNG**: Exportación de imagen en alta resolución PNG (2x retina).
  - **Descargar JPG**: Exportación de imagen JPG.
  - **Descargar PDF**: Convierte y descarga la firma en un documento PDF.

---

## 🛠️ Stack Tecnológico (Últimas Versiones)

- **Framework**: [Next.js 16+](https://nextjs.org/) (Turbopack, App Router, Server & Client Components)
- **Librería UI**: [React 19](https://react.dev/) & [React DOM 19](https://react.dev/)
- **Lenguaje**: [TypeScript 7](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/) + CSS Variables
- **Tipografía**: Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Íconos**: [Lucide React 1.34+](https://lucide.dev/) & SVGs embebidos
- **Exportación**: `html-to-image 1.11+`, `jspdf 4.2+`, `canvas-confetti 1.9+`

---

## 🚀 Inicio Rápido & Instalación Local

### Requisitos Previos
- Node.js 18.0 o superior
- npm / yarn / pnpm

### Pasos de Instalación

1. **Clonar el repositorio / navegar a la carpeta del proyecto**:
   ```bash
   cd sign-generator
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en vivo.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

5. **Iniciar en entorno de producción**:
   ```bash
   npm start
   ```

---

## ▲ Despliegue en Vercel

El proyecto incluye la configuración predeterminada en [`vercel.json`](./vercel.json) y [`.vercelignore`](./.vercelignore) optimizada para despliegues en **Vercel**:

### Despliegue en 1-Click con Vercel CLI
```bash
npx vercel
```

### Despliegue vía GitHub / Git Integration
1. Conecta tu repositorio de GitHub a tu panel de [Vercel](https://vercel.com).
2. Vercel detectará automáticamente la configuración de Next.js (`framework: nextjs`, `buildCommand: npm run build`).
3. Haz clic en **Deploy**.

---

## 📁 Estructura del Proyecto

```text
sign-generator/
├── public/                     # Archivos estáticos y favicons
│   ├── favicon-blanco.ico      # Favicon para modo oscuro (logotipo blanco)
│   └── favicon-negro.ico       # Favicon para modo claro (logotipo negro)
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globales y Google Fonts
│   │   ├── layout.tsx          # Layout principal con favicons y fuentes
│   │   └── page.tsx            # Página principal que integra Editor y Preview
│   ├── assets/                 # Favicons originales
│   ├── components/
│   │   ├── Header.tsx          # Navbar con marca Calmécac y presets
│   │   ├── InstallationGuide.tsx # Guía de instalación por cliente de correo
│   │   ├── SignatureEditor.tsx  # Panel de control por pestañas
│   │   └── SignaturePreview.tsx # Vista previa y toolbar de exportación
│   ├── types/
│   │   └── signature.ts        # Modelo de datos, presets y tipos
│   └── utils/
│       ├── emailHtmlGenerator.ts # Generador de HTML bulletproof con íconos SVG
│       └── exportSignature.ts    # Motor de exportación Rich Text, HTML, PNG, JPG, PDF
├── .vercelignore               # Exclusión de archivos para despliegue Vercel
├── vercel.json                 # Configuración de despliegue y cabeceras de seguridad
├── LICENSE                     # Licencia AGPL-3.0
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📜 Licencia

Este proyecto está liberado bajo la licencia **GNU Affero General Public License v3.0 (AGPL-3.0)**. Consulta el archivo [`LICENSE`](./LICENSE) para más detalles.

```text
Calmécac — No te falta tiempo. Te falta sistema.
https://calmecac.lat
```
