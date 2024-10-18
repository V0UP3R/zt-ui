import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const tailwindConfigPath = resolve(process.cwd(), 'tailwind.config.js');
const nextConfigPath = resolve(process.cwd(), 'next.config.js');

const updateTailwindConfig = () => {
  if (existsSync(tailwindConfigPath)) {
    const configContent = readFileSync(tailwindConfigPath, 'utf-8');
    const updatedConfig = configContent.replace(
      /content: \[(.*?)\]/s,
      (match) => match.replace(']', `,\n    "./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}",\n]`)
    );

    writeFileSync(tailwindConfigPath, updatedConfig, 'utf-8');
    console.log('tailwind.config.js atualizado com a configuração da biblioteca.');
  } else {
    console.error('tailwind.config.js não encontrado.');
  }
};

const updateNextConfig = () => {
  if (existsSync(nextConfigPath)) {
    const configContent = readFileSync(nextConfigPath, 'utf-8');
    const updatedConfig = configContent.replace(
      /transpilePackages: \[(.*?)\]/s,
      (match) => match.replace(']', `,\n    '@v0up3r/zt-ui',\n]`)
    );

    writeFileSync(nextConfigPath, updatedConfig, 'utf-8');
    console.log('next.config.js atualizado com a configuração da biblioteca.');
  } else {
    console.error('next.config.js não encontrado.');
  }
};

updateTailwindConfig();
updateNextConfig();
