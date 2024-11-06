export const ButtonMetadata = {
  componentDescription: "Um botão altamente personalizável que dispara ações ao ser clicado. Possui múltiplas variantes, cores, tamanhos e opções de arredondamento, além de funcionalidades como estado de carregamento e exibição de ícones.",

  installation: {
    codeSnippet: `npm install sua-biblioteca`,
    description: "Instale a biblioteca com o comando acima para utilizar o componente Button."
  },

  importExample: {
    codeSnippets: [
      `import { Button } from 'sua-biblioteca'`,
      `import Button from 'sua-biblioteca/Button'`
    ],
    description: "Exemplos de como importar o componente Button."
  },

  usage: {
    example: `<Button color="primary" size="lg" onClick={handleClick}>Clique aqui</Button>`,
    description: "Exemplo de uso básico do botão com uma cor e tamanho definidos."
  },

  disabledUsage: {
    example: `<Button color="primary" size="lg" disabled>Clique aqui</Button>`,
    description: "Exemplo de uso do botão desabilitado."
  },

  availableSizes: {
    examples: [
      `<Button size="sm">Pequeno</Button>`,
      `<Button size="md">Médio</Button>`,
      `<Button size="lg">Grande</Button>`,
      `<Button size="xl">Extra Grande</Button>`
    ],
    description: "Tamanhos disponíveis para o componente."
  },

  borderRadiusOptions: {
    examples: [
      `<Button rounded="none">Sem arredondamento</Button>`,
      `<Button rounded="sm">Pequeno</Button>`,
      `<Button rounded="md">Médio</Button>`,
      `<Button rounded="lg">Grande</Button>`,
      `<Button rounded="full">Totalmente arredondado</Button>`
    ],
    description: "Opções de arredondamento de borda para o botão."
  },

  colors: {
    examples: [
      `<Button color="primary">Primária</Button>`,
      `<Button color="secondary">Secundária</Button>`,
      `<Button color="warning">Aviso</Button>`,
      `<Button color="success">Sucesso</Button>`,
      `<Button color="danger">Perigo</Button>`
    ],
    description: "Cores disponíveis para o botão."
  },

  variants: {
    examples: [
      `<Button variant="fill">Preenchido</Button>`,
      `<Button variant="outline">Contornado</Button>`,
      `<Button variant="ghost">Transparente</Button>`,
      `<Button variant="animated">Animado</Button>`,
      `<Button variant="carousel">Carrossel</Button>`
    ],
    description: "Variantes de estilo do botão."
  },

  loadingState: {
    example: `<Button loading>Carregando...</Button>`,
    description: "Exemplo do botão exibindo o estado de carregamento."
  },

  withIcons: {
    example: `<Button icon={<Icon />} color="primary">Com Ícone</Button>`,
    description: "Exemplo do botão com ícones."
  },

  iconOnly: {
    example: `<Button icon={<Icon />} isIconOnly aria-label="Apenas Ícone" />`,
    description: "Exemplo de uso do botão somente com ícone."
  },

  customStyles: {
    example: `<Button style={{ backgroundColor: 'purple', color: 'white' }}>Estilo Customizado</Button>`,
    description: "Exemplo do botão com estilos personalizados aplicados."
  },

  accessibility: {
    example: `<Button aria-label="Botão acessível">Clique aqui</Button>`,
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
