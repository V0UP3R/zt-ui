
# ZT-UI Library - Next.js Component Library

This project is a **Next.js library** providing a set of reusable UI components designed to enhance your application with minimal setup. To get started, follow the instructions below.

---

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

To integrate the library properly, you'll need to modify two configuration files:  
- **`tailwind.config.ts`**  
- **`next.config.mjs`**

#### 1. Tailwind Configuration (`tailwind.config.ts`)

Add the following content to your `tailwind.config.ts` file to ensure that the library components are included in the build.

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}" // Include the library components
  ],
  theme: {
    extend: {},
    },
  },
  plugins: [],
};
export default config;
```

#### 2. Next.js Configuration (`next.config.mjs`)

Make sure the library is transpiled by adding it to the `next.config.mjs` file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@v0up3r/zt-ui'], // Include the library here
};

export default nextConfig;
```

---

## Available Components

Here is a list of the available components in the `@v0up3r/zt-ui` library:

- **Divider**  
  Used to separate sections or content visually.
  
- **Button**  
  A versatile button with various styling options.

- **Input**  
  A customizable input field for user data.

- **Table**  
  Display tabular data with built-in styling.

- **NavBar**  
  Navigation bar for header menus and links.

- **Avatar**  
  A component to display user avatars or profile pictures.

- **Switcher**  
  Toggle switch component for dark/light mode or other on/off states.

- **Checkbox**  
  Customizable checkbox for forms and selections.

- **Autocomplete**  
  Input with autocomplete functionality for better user experience.

- **Select**  
  Dropdown component for selecting from multiple options.

- **Card**  
  A card layout component to display grouped content elegantly.

---

## Usage Example

Below is a basic example of how to import and use components from the library.

### Button Component Example

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

### NavBar Component Example

```tsx
import { NavBar } from '@v0up3r/zt-ui';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return <NavBar links={links} />;
}
```

---

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will automatically update as you edit the code.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style your project with Tailwind CSS.

---

## Deploy on Vercel

Deploy your app with the [Vercel Platform](https://vercel.com) in a few clicks. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Contributing

Contributions are welcome! If you encounter any bugs or have feature requests, please open an issue or submit a pull request on the [GitHub repository](https://github.com/v0up3r/zt-ui).

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
