import { Button } from "@/app/components";
import { ComponentMetadata } from "./metadata";

export const ButtonMetadata: ComponentMetadata = {
  title: "Button",
  componentDescription: "Um botão altamente personalizável que dispara ações ao ser clicado. Possui múltiplas variantes, cores, tamanhos e opções de arredondamento, além de funcionalidades como estado de carregamento e exibição de ícones.",
  installation: {
    codeSnippets: `npm install sua-biblioteca`,
    description: "Instale a biblioteca com o comando acima para utilizar o componente Button."
  },

  importExample: {
    codeSnippets: `import { Button } from 'sua-biblioteca'`,
    description: "Exemplos de como importar o componente Button."
  },

  usageExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button color="primary" size="lg" onClick={handleClick}>Clique aqui</Button>`,
    description: "Exemplo de uso básico do botão com uma cor e tamanho definidos."
  },

  disabledUsageExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button color="primary" size="lg" disabled>Clique aqui</Button>`,
    description: "Exemplo de uso do botão desabilitado."
  },

  availableSizes: {
    component: <Button color="primary">Button</Button>,
    codeSnippets:`<Button size="xl">Extra Grande</Button>`,
    description: "Tamanhos disponíveis para o componente."
  },

  borderRadiusOptions: {
    component: <Button color="primary">Button</Button>,
    codeSnippets:`<Button rounded="full">Totalmente arredondado</Button>`,
    description: "Opções de arredondamento de borda para o botão."
  },

  colors: {
    component: <Button color="primary">Button</Button>,
    codeSnippets:`<Button color="danger">Perigo</Button>`,
    description: "Cores disponíveis para o botão."
  },

  variants: {
    component: <Button color="primary">Button</Button>,
    codeSnippets:`<Button variant="carousel">Carrossel</Button>`,
    description: "Variantes de estilo do botão."
  },

  loadingStateExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button loading>Carregando...</Button>`,
    description: "Exemplo do botão exibindo o estado de carregamento."
  },

  withIconsExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button icon={<Icon />} color="primary">Com Ícone</Button>`,
    description: "Exemplo do botão com ícones."
  },

  iconOnlyExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button icon={<Icon />} isIconOnly aria-label="Apenas Ícone" />`,
    description: "Exemplo de uso do botão somente com ícone."
  },

  customStylesExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button style={{ backgroundColor: 'purple', color: 'white' }}>Estilo Customizado</Button>`,
    description: "Exemplo do botão com estilos personalizados aplicados."
  },

  accessibilityExample: {
    component: <Button color="primary">Button</Button>,
    codeSnippets: `<Button aria-label="Botão acessível">Clique aqui</Button>`,
    description: "Exemplo de acessibilidade com aria-label."
  },

  properties: [
    { name: "color", description: "Define a cor do botão (ex.: primary, secondary, etc.)." },
    { name: "size", description: "Define o tamanho do botão (sm, md, lg, xl)." },
    { name: "rounded", description: "Define o tamanho do arredondamento de borda (none, sm, md, lg, full)." },
    { name: "variant", description: "Define a variante do botão (fill, outline, ghost, etc.)." },
    { name: "disabled", description: "Desabilita o botão se definido como true." },
    { name: "isIconOnly", description: "Se true, mostra apenas o ícone." },
    { name: "style", description: "Permite aplicar estilos customizados ao botão." },
    { name: "icon", description: "Ícone exibido junto com o texto do botão." }
  ],

  events: [
    { name: "onClick", description: "Função a ser chamada ao clicar no botão." },
    { name: "onFocus", description: "Função a ser chamada ao focar no botão." }
  ]
};
