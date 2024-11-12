"use client";

import {
  Button,
  Avatar,
  Checkbox,
  Chip,
  Dropdown,
  Input,
  Modal,
  NavBar,
  Spinner,
  Switch,
  Table,
  Divider,
} from "../../../../components";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { componentMetadata } from "./metadata/metadata";
import { DisplayComponent } from "@/app/components/DisplayComponent/DisplayComponent";

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

  const metadata =
    componentMetadata[componentName as keyof typeof componentMetadata];

  return (
    <div className="flex justify-between w-full">
      <div className="w-9/12 flex items-center justify-center container bg-light-background dark:bg-dark-background text-light-accent dark:text-dark-text py-8">
        {metadata && (
          <div className="w-7/12">
            <DisplayComponent
              codeSnippets={metadata.usageExample?.codeSnippets!}
              component={metadata.usageExample?.component}
              description={metadata.usageExample?.description!}
            />
            {/* Descrição */}
            {metadata.componentDescription && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Descrição
                </h2>
                <p className="mt-2 text-light-text dark:text-dark-secondary">
                  {metadata.componentDescription}
                </p>
              </div>
            )}

            {/* Instalação */}
            {metadata.installation && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Instalação
                </h2>
                <SyntaxHighlighter
                  customStyle={{ borderRadius: 8 }}
                  language="bash"
                  style={vscDarkPlus}
                >
                  {metadata.installation.codeSnippet}
                </SyntaxHighlighter>
              </div>
            )}

            {/* Importação */}
            {metadata.importExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Importação
                </h2>
                <SyntaxHighlighter
                  customStyle={{ borderRadius: 8 }}
                  language="javascript"
                  style={vscDarkPlus}
                >
                  {metadata.importExample.codeSnippets}
                </SyntaxHighlighter>
              </div>
            )}

            {/* Uso do Componente */}
            {metadata.usageExample && (
              <div className="mb-8">
                {/* <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">Uso do Componente</h2> */}
                <DisplayComponent
                  codeSnippets={metadata.usageExample?.codeSnippets!}
                  component={metadata.usageExample?.component}
                  description={metadata.usageExample?.description!}
                />
                {/* <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.usageExample.codeSnippets}
              </SyntaxHighlighter> */}
              </div>
            )}

            {/* Uso do Componente Desabilitado */}
            {metadata.disabledUsageExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Uso do Componente Desabilitado
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.disabledUsageExample?.codeSnippets!}
                  component={metadata.disabledUsageExample?.component}
                  description={metadata.disabledUsageExample?.description!}
                />
                {/* <SyntaxHighlighter customStyle={{ borderRadius: 8 }} language="javascript" style={vscDarkPlus}>
                {metadata.disabledUsageExample.codeSnippets}
              </SyntaxHighlighter> */}
              </div>
            )}

            {/* Tamanhos Disponíveis */}
            {metadata.availableSizes && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Tamanhos Disponíveis
                </h2>
                <SyntaxHighlighter
                  customStyle={{ borderRadius: 8 }}
                  language="javascript"
                  style={vscDarkPlus}
                >
                  {metadata.availableSizes.codeSnippets}
                </SyntaxHighlighter>
              </div>
            )}

            {/* Tamanhos de Arredondamento */}
            {metadata.borderRadiusOptions && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Tamanhos de Arredondamento
                </h2>
                <DisplayComponent codeSnippets={metadata.borderRadiusOptions?.codeSnippets!} component={metadata.borderRadiusOptions?.component} description={metadata.borderRadiusOptions?.description!} />
              </div>
            )}

            {/* Cores */}
            {metadata.colors && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Cores
                </h2>
                <DisplayComponent codeSnippets={metadata.colors?.codeSnippets!} component={metadata.colors?.component} description={metadata.colors?.description!} />
              </div>
            )}

            {/* Variantes */}
            {metadata.variants && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Variantes
                </h2>
                <DisplayComponent codeSnippets={metadata.variants?.codeSnippets!} component={metadata.variants?.component} description={metadata.variants?.description!} />
              </div>
            )}

            {/* Carregamento */}
            {metadata.loadingStateExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Carregamento
                </h2>
                <DisplayComponent codeSnippets={metadata.variants?.codeSnippets!} component={metadata.variants?.component} description={metadata.variants?.description!} />
              </div>
            )}

            {/* Com Ícones */}
            {metadata.withIconsExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Com Ícones
                </h2>
                <DisplayComponent codeSnippets={metadata.withIconsExample?.codeSnippets!} component={metadata.withIconsExample?.component} description={metadata.withIconsExample?.description!} />
              </div>
            )}

            {/* Apenas com Ícone */}
            {metadata.iconOnlyExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Apenas com Ícone
                </h2>
                <DisplayComponent codeSnippets={metadata.iconOnlyExample?.codeSnippets!} component={metadata.iconOnlyExample?.component} description={metadata.iconOnlyExample?.description!} />
              </div>
            )}

            {/* Estilos Customizados */}
            {metadata.customStylesExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Estilos Customizados
                </h2>
                <DisplayComponent codeSnippets={metadata.customStylesExample?.codeSnippets!} component={metadata.customStylesExample?.component} description={metadata.customStylesExample?.description!} />
              </div>
            )}

            {/* Acessibilidade */}
            {metadata.accessibilityExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Acessibilidade
                </h2>
                <DisplayComponent codeSnippets={metadata.accessibilityExample?.codeSnippets!} component={metadata.accessibilityExample?.component} description={metadata.accessibilityExample?.description!} />
              </div>
            )}

            {/* Propriedades do Componente */}
            {metadata.properties && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Propriedades do Componente
                </h2>
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
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Eventos do Componente
                </h2>
                <ul className="list-disc list-inside">
                  {metadata.events.map((event) => (
                    <li key={event.name}>
                      <strong>{event.name}:</strong> {event.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        id="glossary"
        className="w-3/12 h-screen bg-fixed bg-gray-500 sticky top-0"
      >
        <ul className="w-full h-full flex items-center justify-center">
          <li>
            <h1 className="text-white font-semibold text-xl">Introdução</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
