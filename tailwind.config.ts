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
          background: '#16161a', 
          other_section_background: '#242629', 
          butttonText_HeadLine: '#fffffe',
          button: '#7f5af0',
          paragraph:'#94a1b2',
          borda:'#010101',
          primary: '#fffffe',    
          secondary: '#72757e',  
          tertiary: '#2cb67d',  
          accent: '#F9FAFB',     
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
