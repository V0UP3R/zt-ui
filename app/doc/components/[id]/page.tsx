'use client'

import {
  Button,
  Avatar,
  Checkbox,
  Chip,
  Divider,
  Dropdown,
  Input,
  Modal,
  NavBar,
  Spinner,
  Switch,
  Table,
} from '../../../components'; // Ajuste o caminho conforme necessário
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const componentMap: { [key: string]: React.ComponentType<any> } = {
  Button,
  Avatar,
  Checkbox,
  Chip,
  Divider,
  Dropdown,
  Input,
  Modal,
  NavBar,
  Spinner,
  Switch,
  Table,
};

export default function Page({ params }: { params: { id: string } }) {
  const [componentName, setComponentName] = useState<string | null>(null);
  const [componentCode, setComponentCode] = useState<string>('');

  useEffect(() => {
    const name = params.id.charAt(0).toUpperCase() + params.id.slice(1);
    setComponentName(name);
  }, [params.id]);

  const ComponentToRender = componentMap[componentName as keyof typeof componentMap];

  if (!ComponentToRender) {
    return <div className="text-light-text dark:text-dark-text">Componente não encontrado.</div>;
  }

  return (
    <div className="container mx-auto bg-light-background dark:bg-dark-background text-light-accent dark:text-dark-text p-8">
      <h1 className="text-3xl font-bold mb-4">Componente: {componentName}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Visualização</h2>
        <div className="p-4 border rounded bg-light-accent dark:bg-dark-accent">
          <ComponentToRender color="primary"/>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Documentação</h2>
        <p className="mt-2 text-light-text dark:text-dark-secondary">
          Aqui você encontrará detalhes sobre como utilizar o componente <strong>{componentName}</strong>.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Propriedade 1:</strong> Descrição da propriedade 1.</li>
          <li><strong>Propriedade 2:</strong> Descrição da propriedade 2.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Exemplo de Uso</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
{`<${componentName} prop1="value1" prop2="value2" />`}
        </SyntaxHighlighter>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Código do Componente</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {componentCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
