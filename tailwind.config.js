/** @type {import('tailwindcss').Config} */
export default {
  important: '',
  prefix: '',
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Claro
        light: {
          background: '#FFFFFF',   // Branco
          text: '#1F2937',         // Cinza escuro (Gray 800)
          primary: '#F3F4F6',      // Cinza claro (Gray 100)
          secondary: '#E5E7EB',    // Cinza claro (Gray 200)
          accent: '#111827',       // Preto para detalhes
        },
        // Tema escuro
        dark: {
          background: '#111827',   // Preto (Gray 900)
          text: '#D1D5DB',         // Cinza claro (Gray 300)
          primary: '#374151',      // Cinza escuro (Gray 700)
          secondary: '#4B5563',    // Cinza médio (Gray 600)
          accent: '#F9FAFB',       // Branco para detalhes
        },
      },
    },
  },
  plugins: [],
}