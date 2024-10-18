const { existsSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const tailwindConfigPath = resolve(process.cwd(), 'tailwind.config.ts');
const nextConfigPath = resolve(process.cwd(), 'next.config.mjs');

const updateTailwindConfig = () => {
  if (existsSync(tailwindConfigPath)) {
    const configContent = readFileSync(tailwindConfigPath, 'utf-8');
    const updatedConfig = configContent.replace(
      /content: \[(.*?)\]/s,
      (match) => match.replace(']', `"./node_modules/@v0up3r/zt-ui/app/components/**/*.{js,ts,jsx,tsx,mdx}"\n]`)
    );

    writeFileSync(tailwindConfigPath, updatedConfig, 'utf-8');
    console.log('tailwind.config.js atualizado com a configuração da biblioteca.');
  } else {
    console.error('tailwind.config.js não encontrado.');
  }
};

const updateNextConfig = () => {
  if (existsSync(nextConfigPath)) {
    let configContent = readFileSync(nextConfigPath, 'utf-8');

    // Verifica se o transpilePackages já existe
    if (/transpilePackages: \[(.*?)\]/s.test(configContent)) {
      // Se já existir, só adiciona '@v0up3r/zt-ui' se não estiver presente
      configContent = configContent.replace(
        /transpilePackages: \[(.*?)\]/s,
        (match, p1) => {
          if (!p1.includes("'@v0up3r/zt-ui'")) {
            return `transpilePackages: [${p1}, '@v0up3r/zt-ui']`;
          }
          return match; // Se já existir, mantém o original
        }
      );
    } else {
      // Se não existir, adiciona `transpilePackages` no final
      configContent += `\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  transpilePackages: ['@v0up3r/zt-ui'],\n};\n\nexport default nextConfig;\n`;
    }

    // Grava o conteúdo de volta ao arquivo, sem sobrescrever o restante
    writeFileSync(nextConfigPath, configContent, 'utf-8');
    console.log('next.config.mjs atualizado com a configuração da biblioteca.');
  } else {
    // Se o arquivo não existir, cria um novo arquivo com a configuração básica
    const newConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@v0up3r/zt-ui']
};

export default nextConfig;
`;

    writeFileSync(nextConfigPath, newConfig, 'utf-8');
    console.log('next.config.mjs criado e configurado com sucesso.');
  }
};


updateTailwindConfig();
updateNextConfig();
