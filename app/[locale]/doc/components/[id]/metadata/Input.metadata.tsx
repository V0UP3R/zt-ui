import { Input } from "@/app/components";
import { ComponentMetadata } from "./metadata";

export const InputMetadata: ComponentMetadata = {
  componentDescription: "Um campo de entrada flexível com suporte a múltiplas variantes e estilos, perfeito para formulários personalizados.",

  installation: {
    codeSnippet: `npm install sua-biblioteca`,
    description: "Instale a biblioteca com o comando acima para utilizar o componente Input."
  },

  importExample: {
    codeSnippets: [
      `import { Input } from 'sua-biblioteca'`,
      `import Input from 'sua-biblioteca/Input'`
    ],
    description: "Exemplos de como importar o componente Input."
  },

  usageExample: {
    component: <Input placeholder="Digite aqui" variant="default" />,
    codeSnippets: `<Input placeholder="Digite seu nome" variant="default" />`,
    description: "Exemplo de uso básico do Input com um placeholder."
  },

  disabledUsageExample: {
    component: <Input placeholder="Desabilitado" disabled />,
    codeSnippets: `<Input placeholder="Desabilitado" disabled />`,
    description: "Exemplo de uso do campo de entrada desabilitado."
  },

  variants: {
    component: <Input placeholder="Digite aqui" variant="outline" />,
    codeSnippets: [
      `<Input placeholder="Digite aqui" variant="outline" />`,
      `<Input placeholder="Digite aqui" variant="filled" />`
    ],
    description: "Demonstração das variantes do Input (outline, filled, etc.)."
  },

  availableSizes: {
    component: <Input placeholder="Tamanho Padrão"/>,
    codeSnippets: [
      `<Input placeholder="Pequeno" size="small" />`,
      `<Input placeholder="Médio" size="medium" />`,
      `<Input placeholder="Grande" size="large" />`
    ],
    description: "Exemplos de diferentes tamanhos de Input."
  },

  customStylesExample: {
    component: <Input placeholder="Estilo customizado" style={{ borderColor: 'purple', color: 'black' }} />,
    codeSnippets: `<Input placeholder="Customizado" style={{ borderColor: 'purple', color: 'black' }} />`,
    description: "Exemplo do campo de entrada com estilos personalizados aplicados."
  },

  accessibilityExample: {
    component: <Input aria-label="Campo de texto acessível" />,
    codeSnippets: `<Input aria-label="Campo de texto acessível" placeholder="Texto" />`,
    description: "Exemplo de acessibilidade com aria-label."
  },

  properties: [
    { name: "label", description: "Texto exibido como rótulo do campo de entrada." },
    { name: "variant", description: "Define a variante de estilo do campo de entrada (default, outline, filled, line, floating)." },
    { name: "disabled", description: "Desabilita o campo de entrada se definido como true." },
    { name: "inputClassName", description: "Define classes CSS adicionais para o elemento de entrada." },
    { name: "containerClassName", description: "Define classes CSS adicionais para o contêiner do componente." },
    { name: "labelClassName", description: "Define classes CSS adicionais para o rótulo." },
    { name: "style", description: "Permite aplicar estilos customizados ao campo de entrada." },
    { name: "size", description: "Define o tamanho do campo de entrada (small, medium, large)." }
  ],

  events: [
    { name: "onFocus", description: "Função a ser chamada ao focar no campo de entrada." },
    { name: "onBlur", description: "Função a ser chamada ao desfocar o campo de entrada." }
  ]
};
