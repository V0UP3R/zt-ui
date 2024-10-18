Aqui está uma versão multilíngue do seu `README` em **Português**, **Inglês**, e **Espanhol**, utilizando seções dobráveis com `<details>` para alternância clara entre idiomas:

```markdown
- [English](#english)  
- [Português](#português)  
- [Español](#español)  

---

<details>
<summary>🇺🇸 English</summary>

# ZT-UI Library - Next.js Component Library

This project is a **Next.js library** providing a set of reusable UI components designed to enhance your application with minimal setup. To get started, follow the instructions below.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 16  
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

Add the library to your Next.js project:

```bash
npm install @v0up3r/zt-ui
# or
yarn add @v0up3r/zt-ui
```

### Configuration

Modify the following configuration files:  
- **`tailwind.config.ts`**  
- **`next.config.mjs`**

#### Tailwind Configuration

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
```

#### Next.js Configuration

```js
const nextConfig = {
  transpilePackages: ['@v0up3r/zt-ui'],
};

export default nextConfig;
```

## Available Components

- **Divider**, **Button**, **Input**, **Table**, **NavBar**, **Avatar**, **Switcher**, **Checkbox**, **Autocomplete**, **Select**, **Card**

## Usage Example

```tsx
import { Button } from '@v0up3r/zt-ui';

export default function HomePage() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

---

## Development

```bash
npm run dev
```

---

## License

This project is licensed under the MIT License.
</details>

---

<details>
<summary>🇧🇷 Português</summary>

# ZT-UI Library - Biblioteca de Componentes Next.js

Este projeto é uma **biblioteca Next.js** com componentes reutilizáveis para melhorar sua aplicação com configuração mínima. Siga as instruções abaixo para começar.

## Começando

### Pré-requisitos

Instale as seguintes dependências:

- **Node.js** >= 16  
- **npm**, **yarn**, **pnpm**, ou **bun**

### Instalação

Adicione a biblioteca ao seu projeto Next.js:

```bash
npm install @v0up3r/zt-ui
# ou
yarn add @v0up3r/zt-ui
```

### Configuração

Modifique os seguintes arquivos:  
- **`tailwind.config.ts`**  
- **`next.config.mjs`**

#### Configuração do Tailwind

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
```

#### Configuração do Next.js

```js
const nextConfig = {
  transpilePackages: ['@v0up3r/zt-ui'],
};

export default nextConfig;
```

## Componentes Disponíveis

- **Divisor**, **Botão**, **Input**, **Tabela**, **NavBar**, **Avatar**, **Switcher**, **Checkbox**, **Autocomplete**, **Select**, **Card**

## Exemplo de Uso

```tsx
import { Button } from '@v0up3r/zt-ui';

export default function HomePage() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert('Botão Clicado!')}>
        Clique Aqui
      </Button>
    </div>
  );
}
```

---

## Desenvolvimento

```bash
npm run dev
```

---

## Licença

Este projeto está licenciado sob a Licença MIT.
</details>

---

<details>
<summary>🇪🇸 Español</summary>

# ZT-UI Library - Biblioteca de Componentes Next.js

Este proyecto es una **biblioteca de Next.js** con componentes reutilizables que mejoran tu aplicación con una configuración mínima. Sigue las instrucciones a continuación.

## Comenzando

### Prerrequisitos

Asegúrate de tener instaladas las siguientes dependencias:

- **Node.js** >= 16  
- **npm**, **yarn**, **pnpm**, o **bun**

### Instalación

Agrega la biblioteca a tu proyecto Next.js:

```bash
npm install @v0up3r/zt-ui
# o
yarn add @v0up3r/zt-ui
```

### Configuración

Modifica los siguientes archivos:  
- **`tailwind.config.ts`**  
- **`next.config.mjs`**

#### Configuración de Tailwind

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
```

#### Configuración de Next.js

```js
const nextConfig = {
  transpilePackages: ['@v0up3r/zt-ui'],
};

export default nextConfig;
```

## Componentes Disponibles

- **Divisor**, **Botón**, **Input**, **Tabla**, **NavBar**, **Avatar**, **Switcher**, **Checkbox**, **Autocomplete**, **Select**, **Card**

## Ejemplo de Uso

```tsx
import { Button } from '@v0up3r/zt-ui';

export default function HomePage() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert('¡Botón Pulsado!')}>
        Pulsa Aquí
      </Button>
    </div>
  );
}
```

---

## Desarrollo

```bash
npm run dev
```

---

## Licencia

Este proyecto está bajo la Licencia MIT.
</details>
```

---

### Como funciona este `README`

- **Troca de Idiomas:** Cada idioma está dentro de uma seção `<details>` expansível.
- **Facilidade de Leitura:** O usuário pode clicar no idioma desejado e expandir apenas o necessário.
- **Markdown Puro:** Compatível com GitHub e sem necessidade de scripts extras.