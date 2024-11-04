export default function HomePage() {
  return (
    <div className="min-h-screen min-w-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text p-8">
      <main className="mx-auto bg-light-primary dark:bg-dark-secondary shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">ZT-UI Library - Biblioteca de Componentes Next.js</h1>
        <p className="mb-6">
          Este projeto é uma biblioteca Next.js com componentes reutilizáveis para melhorar sua aplicação com configuração mínima. Siga as instruções abaixo para começar.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-light-secondary dark:text-dark-secondary">Começando</h2>
        <h3 className="text-xl font-semibold mb-2">Pré-requisitos</h3>
        <p className="mb-4">Instale as seguintes dependências:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Node.js &gt;= 16</li>
          <li>npm, yarn, pnpm, ou bun</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Instalação</h3>
        <p className="mb-4">Adicione a biblioteca ao seu projeto Next.js:</p>
        <pre className="bg-light-accent dark:bg-dark-accent p-4 rounded mb-6">
          <code>npm install @v0up3r/zt-ui</code>
          <br />
          <code># ou</code>
          <br />
          <code>yarn add @v0up3r/zt-ui</code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">Configuração</h3>
        <p className="mb-4">Modifique os seguintes arquivos:</p>

        <h4 className="text-lg font-semibold mb-2">Configuração do Tailwind</h4>
        <pre className="bg-light-accent dark:bg-dark-accent p-4 rounded mb-6">
          <code>
            {`import type { Config } from "tailwindcss";\n\n`}
            {`const config: Config = {\n  darkMode: 'class',\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx,mdx}",\n    "./components/**/*.{js,ts,jsx,tsx,mdx}",\n    "./app/**/*.{js,ts,jsx,tsx,mdx}"\n  ],\n  theme: {\n    extend: {\n      colors: {\n        // Cores customizadas\n      }\n    }\n  },\n  plugins: []\n};\nexport default config;`}
          </code>
        </pre>

        <h4 className="text-lg font-semibold mb-2">Configuração do Next.js</h4>
        <pre className="bg-light-accent dark:bg-dark-accent p-4 rounded mb-6">
          <code>
            {`const nextConfig = {\n  transpilePackages: ['@v0up3r/zt-ui'],\n};\n\nexport default nextConfig;`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">Componentes Disponíveis</h3>
        <p className="mb-6">Divisor, Botão, Input, Tabela, NavBar, Avatar, Switcher, Checkbox, Autocomplete, Select, Card</p>

        <h3 className="text-xl font-semibold mb-2">Exemplo de Uso</h3>
        <pre className="bg-light-accent dark:bg-dark-accent p-4 rounded mb-6">
          <code>
            {`import { Button } from '@v0up3r/zt-ui';\n\n`}
            {`export default function HomePage() {\n  return (\n    <div className="p-4">\n      <Button variant="primary" onClick={() => alert('Botão Clicado!')}>\n        Clique Aqui\n      </Button>\n    </div>\n  );\n}`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
        <pre className="bg-light-accent dark:bg-dark-accent p-4 rounded mb-6">
          <code>npm run dev</code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">Licença</h3>
        <p className="mb-6">Este projeto está licenciado sob a Licença MIT.</p>
      </main>
    </div>
  );
}
