'use client';

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
} from '../../../../components'; // Ajuste o caminho conforme necessário
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { componentMetadata } from './metadata/metadata';
import { DisplayComponent } from '@/app/components/DisplayComponent/DisplayComponent';

const componentMap: { [key: string]: React.ComponentType<any> } = {
  Button,
  Avatar,
  Checkbox,
  Chip,
  Divider,
  Dropdown,
  Input,
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
          <ComponentToRender />
        </div>
      </div>

      {metadata && (
        <>
          <DisplayComponent codeSnippets={metadata.usageExample?.codeSnippets!} component={metadata.usageExample?.component} description={metadata.usageExample?.description!} />
          {/* Descrição */}
          {metadata.componentDescription && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Descrição</h2>
              <p className="mt-2 text-light-text dark:text-dark-secondary">{metadata.componentDescription}</p>
            </div>
          )}

           {/* Instalação */}
           {metadata.installation && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Instalação</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="bash" style={vscDarkPlus}>
                {metadata.installation.codeSnippet}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Importação */}
          {metadata.importExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Importação</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.importExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Uso do Componente */}
          {metadata.usageExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Uso do Componente</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.usageExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Uso do Componente Desabilitado */}
          {metadata.disabledUsageExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Uso do Componente Desabilitado</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.disabledUsageExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Tamanhos Disponíveis */}
          {metadata.availableSizes && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Tamanhos Disponíveis</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.availableSizes.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Tamanhos de Arredondamento */}
          {metadata.borderRadiusOptions && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Tamanhos de Arredondamento</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.borderRadiusOptions.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Cores */}
          {metadata.colors && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Cores</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.colors.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Variantes */}
          {metadata.variants && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Variantes</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.variants.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Carregamento */}
          {metadata.loadingStateExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Carregamento</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.loadingStateExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Com Ícones */}
          {metadata.withIconsExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Com Ícones</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.withIconsExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Apenas com Ícone */}
          {metadata.iconOnlyExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Apenas com Ícone</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.iconOnlyExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Estilos Customizados */}
          {metadata.customStylesExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Estilos Customizados</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.customStylesExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Acessibilidade */}
          {metadata.accessibilityExample && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Acessibilidade</h2>
              <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.accessibilityExample.codeSnippets}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Propriedades do Componente */}
          {metadata.properties && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Propriedades do Componente</h2>
              <ul className="list-disc list-inside">
                {metadata.properties.map((prop) => (
                  <li key={prop.name}>
                    <strong>{prop.name}:</strong> {prop.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eventos do Componente */}
          {metadata.events && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Eventos do Componente</h2>
              <ul className="list-disc list-inside">
                {metadata.events.map((event) => (
                  <li key={event.name}>
                    <strong>{event.name}:</strong> {event.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
