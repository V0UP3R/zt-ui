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
import { componentMetadata } from './metadata';

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

  useEffect(() => {
    const name = params.id.charAt(0).toUpperCase() + params.id.slice(1);
    setComponentName(name);
  }, [params.id]);

  const ComponentToRender = componentMap[componentName as keyof typeof componentMap];
  const metadata = componentMetadata[componentName as keyof typeof componentMetadata];

  if (!ComponentToRender) {
    return <div className="text-light-text dark:text-dark-text">Componente não encontrado.</div>;
  }

  return (
    <div className="container mx-auto bg-light-background dark:bg-dark-background text-light-accent dark:text-dark-text p-8">
      <h1 className="text-3xl font-bold mb-4">Componente: {componentName}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Visualização</h2>
        <div className="p-4 border rounded bg-light-accent dark:bg-dark-accent">
          <ComponentToRender color={'primary'}>{metadata.children}</ComponentToRender>
        </div>
      </div>

      {metadata && (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Documentação</h2>
            <p className="mt-2 text-light-text dark:text-dark-secondary">{metadata.documentation}</p>
            <ul className="list-disc list-inside">
              {metadata.properties.map((prop) => (
                <li key={prop.name}>
                  <strong>{prop.name}:</strong> {prop.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Exemplo de Uso</h2>
            <SyntaxHighlighter customStyle={{borderRadius:8}} language="javascript" style={vscDarkPlus}>
              {metadata.usageExample}
            </SyntaxHighlighter>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Código do Componente</h2>
            <SyntaxHighlighter customStyle={{borderRadius:8}} language="javascript" style={vscDarkPlus}>
              {metadata.codeSnippet}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
}
