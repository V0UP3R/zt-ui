import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema Claro
        light: {
          background: '#f3f4f6',   // Cinza claro (Gray 100)
          text: '#374151',         // Cinza escuro (Gray 700)
          primary: '#d1d5db',      // Cinza claro (Gray 400)
          secondary: '#6b7280 ',    // Cinza claro (Gray 500)
          accent: '#1f2937',       // Cinza escuro (Gray 800)
        },
        // Tema escuro
        dark: {
          background: '#111827',   // Preto (Gray 900)
          text: '#D1D5DB',         // Cinza claro (Gray 300)
          primary: '#3b82f6',      // Cinza escuro (Gray 700)
          secondary: '#4B5563',    // Cinza médio (Gray 600)
          accent: '#F9FAFB',       // Branco para detalhes
        },
        default:{
          blue:'#2563eb',
          white:'#f3f4f6',
          black:'#1f2937',
        }
      },
    },
  },
  plugins: [],
};
export default config;
