/**
 * Tailwind CSS v4 Configuration
 *
 * IMPORTANT: This project uses Tailwind CSS v4, which uses CSS-based configuration
 * via the @theme directive in app/globals.css rather than this config file.
 *
 * In Tailwind v4, this file is NOT automatically loaded. To use this config file,
 * add the following to app/globals.css:
 *
 *   @config "../tailwind.config.ts";
 *
 * Alternatively, the preferred v4 approach is to define custom values directly in
 * app/globals.css using @theme directives:
 *
 *   @import "tailwindcss";
 *
 *   @theme {
 *     --color-primary-green: #28583F;
 *     --color-secondary-green: #517A51;
 *     --color-ochre: #B8741A;
 *     --color-body-charcoal: #2D302E;
 *     --color-muted-gray: #676C68;
 *     --color-pale-green: #E6EEE8;
 *     --color-sage-panel: #CAD6CD;
 *     --color-light-sage: #D9E5DC;
 *     --color-soft-neutral: #EFF1EF;
 *     --color-white: #FFFFFF;
 *     --color-thin-blue-accent: #5A8FD8;
 *
 *     --spacing-18: 72px;
 *     --spacing-88: 88px;
 *     --spacing-128: 128px;
 *
 *     --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
 *   }
 *
 * This file is maintained as a reference and can be activated via @config if needed.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#28583F",
        "secondary-green": "#517A51",
        ochre: "#B8741A",
        "body-charcoal": "#2D302E",
        "muted-gray": "#676C68",
        "pale-green": "#E6EEE8",
        "sage-panel": "#CAD6CD",
        "light-sage": "#D9E5DC",
        "soft-neutral": "#EFF1EF",
        white: "#FFFFFF",
        "thin-blue-accent": "#5A8FD8",
      },
      spacing: {
        "18": "72px",
        "88": "88px",
        "128": "128px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
