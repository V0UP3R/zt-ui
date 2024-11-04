export const componentMetadata = {
  Button: {
    children:"Button",
    documentation: "Um botão básico que dispara ações ao ser clicado.",
    properties: [
      { name: "color", description: "Define a cor do botão (primary, secondary, etc.)." },
      { name: "size", description: "Define o tamanho do botão (small, medium, large)." },
      { name: "disabled", description: "Se true, desabilita o botão." },
      { name: "onClick", description: "Função a ser chamada ao clicar no botão." },
    ],
    usageExample: `<Button color="primary" size="large" onClick={handleClick}>Clique aqui</Button>`,
    codeSnippet: `<Button color="primary" size="large" onClick={() => alert('Button clicked!')}>Clique aqui</Button>`,
  },
  Avatar: {
    children: null,
    documentation: "Componente para exibir uma imagem de avatar do usuário.",
    properties: [
      { name: "src", description: "URL da imagem do avatar." },
      { name: "alt", description: "Texto alternativo para a imagem." },
      { name: "size", description: "Tamanho do avatar (small, medium, large)." },
    ],
    usageExample: `<Avatar src="avatar.jpg" alt="User Avatar" size="medium" />`,
    codeSnippet: `<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" size="medium" />`,
  },
  Checkbox: {
    children: null,
    documentation: "Componente de caixa de seleção para capturar entradas booleanas.",
    properties: [
      { name: "checked", description: "Define se a caixa de seleção está marcada." },
      { name: "onChange", description: "Função chamada ao alterar o estado do checkbox." },
      { name: "disabled", description: "Se true, desabilita o checkbox." },
    ],
    usageExample: `<Checkbox checked={true} onChange={handleCheckboxChange} />`,
    codeSnippet: `<Checkbox checked={true} onChange={(e) => console.log(e.target.checked)} />`,
  },
  Chip: {
    children: null,
    documentation: "Um pequeno bloco de informações usado para exibir tags ou informações condensadas.",
    properties: [
      { name: "label", description: "Texto a ser exibido dentro do chip." },
      { name: "onDelete", description: "Função chamada ao clicar no ícone de deletar (se aplicável)." },
      { name: "color", description: "Cor do chip." },
    ],
    usageExample: `<Chip label="Example" onDelete={() => alert('Chip deleted')} />`,
    codeSnippet: `<Chip label="Tag" onDelete={() => alert('Deleted')} />`,
  },
  Divider: {
    children: null,
    documentation: "Um divisor visual para separar conteúdos em uma interface.",
    properties: [
      { name: "orientation", description: "Orientação do divisor (horizontal ou vertical)." },
      { name: "light", description: "Se true, usa um estilo mais leve." },
    ],
    usageExample: `<Divider orientation="horizontal" />`,
    codeSnippet: `<Divider orientation="horizontal" light />`,
  },
  Dropdown: {
    children: null,
    documentation: "Componente para exibir uma lista suspensa de opções.",
    properties: [
      { name: "options", description: "Array de opções a serem exibidas no dropdown." },
      { name: "onSelect", description: "Função chamada ao selecionar uma opção." },
      { name: "disabled", description: "Se true, desabilita o dropdown." },
    ],
    usageExample: `<Dropdown options={['Option 1', 'Option 2']} onSelect={handleSelect} />`,
    codeSnippet: `<Dropdown options={['Option 1', 'Option 2']} onSelect={(value) => console.log(value)} />`,
  },
  Input: {
    children: null,
    documentation: "Campo de entrada de texto básico.",
    properties: [
      { name: "type", description: "Tipo do campo de entrada (text, password, email, etc.)." },
      { name: "value", description: "Valor atual do campo de entrada." },
      { name: "onChange", description: "Função chamada ao mudar o valor do campo." },
      { name: "placeholder", description: "Texto de sugestão exibido no campo." },
    ],
    usageExample: `<Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Digite algo..." />`,
    codeSnippet: `<Input type="text" value="example" onChange={(e) => console.log(e.target.value)} placeholder="Digite algo..." />`,
  },
  Modal: {
    children: null,
    documentation: "Componente de modal para exibir conteúdos sobrepostos.",
    properties: [
      { name: "isOpen", description: "Define se o modal está aberto." },
      { name: "onClose", description: "Função chamada ao fechar o modal." },
      { name: "title", description: "Título exibido no modal." },
    ],
    usageExample: `<Modal isOpen={true} onClose={handleClose} title="Example Modal" />`,
    codeSnippet: `<Modal isOpen={true} onClose={() => setIsOpen(false)} title="Example Modal">Modal Content</Modal>`,
  },
  NavBar: {
    children: null,
    documentation: "Barra de navegação para guiar o usuário através da aplicação.",
    properties: [
      { name: "links", description: "Array de objetos de links de navegação." },
      { name: "onLinkClick", description: "Função chamada ao clicar em um link." },
    ],
    usageExample: `<NavBar links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />`,
    codeSnippet: `<NavBar links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />`,
  },
  Spinner: {
    children: null,
    documentation: "Componente de carregamento visual.",
    properties: [
      { name: "size", description: "Tamanho do spinner (small, medium, large)." },
      { name: "color", description: "Cor do spinner." },
    ],
    usageExample: `<Spinner size="large" color="primary" />`,
    codeSnippet: `<Spinner size="medium" color="secondary" />`,
  },
  Switch: {
    children: null,
    documentation: "Componente de toggle para alternar entre estados booleanos.",
    properties: [
      { name: "checked", description: "Define se o switch está ligado." },
      { name: "onChange", description: "Função chamada ao alternar o estado do switch." },
    ],
    usageExample: `<Switch checked={true} onChange={handleSwitchChange} />`,
    codeSnippet: `<Switch checked={false} onChange={(e) => console.log(e.target.checked)} />`,
  },
  Table: {
    children: null,
    documentation: "Tabela para exibir dados estruturados.",
    properties: [
      { name: "columns", description: "Array de objetos que definem as colunas da tabela." },
      { name: "data", description: "Array de dados a serem exibidos na tabela." },
    ],
    usageExample: `<Table columns={[{ header: 'Name', accessor: 'name' }, { header: 'Age', accessor: 'age' }]} data={[{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]} />`,
    codeSnippet: `<Table columns={[{ header: 'Name', accessor: 'name' }, { header: 'Age', accessor: 'age' }]} data={[{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]} />`,
  },
};