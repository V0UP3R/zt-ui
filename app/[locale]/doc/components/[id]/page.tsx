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
import { FiCheck, FiCopy } from "react-icons/fi";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = (code:string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta o estado de "copiado" após 2 segundos
  };
  
  useEffect(() => {
    const name = params.id.charAt(0).toUpperCase() + params.id.slice(1);
    setComponentName(name);
  }, [params.id]);

  const metadata =
    componentMetadata[componentName as keyof typeof componentMetadata];

  return (
    <div className="flex justify-between w-full">
      <div className="w-9/12 flex items-center justify-center container bg-light-background dark:bg-dark-other_section_background text-light-accent dark:text-dark-text py-8">
        {metadata && (
          <div className="w-9/12">
            <div className="w-full mb-20 flex flex-col items-center gap-8">
              <h1 className="text-6xl font-bold uppercase text-light-text dark:text-dark-accent">
                {metadata.title}
              </h1>
              <Divider
                className="bg-light-accent/30 dark:bg-dark-accent/50"
                orientation="horizontal"
              />
            </div>

            {/* Descrição */}
            {metadata.componentDescription && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Descrição
                </h2>
                <p className="mt-2 mb-4 text-light-text dark:text-dark-secondary">
                  {metadata.componentDescription}
                </p>
                <DisplayComponent
                  codeSnippets={metadata.usageExample?.codeSnippets!}
                  component={metadata.usageExample?.component}
                  description={metadata.usageExample?.description!}
                />
              </div>
            )}

            {/* Instalação */}
            {metadata.installation && (
              <div className="mb-8 relative">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                Instalação
              </h2>
              <SyntaxHighlighter
                customStyle={{ borderRadius: 8 }}
                language="bash"
                style={vscDarkPlus}
              >
                {metadata.installation.codeSnippet}
              </SyntaxHighlighter>
              <button
                onClick={() => metadata?.installation && handleCopy(metadata.installation.codeSnippet)}
                className="absolute top-12 right-0 flex items-center p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                {copied ? <FiCheck className="mr-1" /> : <FiCopy className="mr-1" />}
              </button>
            </div>
            )}

            {/* Importação */}
            {metadata.importExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
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
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
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
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Tamanhos Disponíveis
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.availableSizes?.codeSnippets!}
                  component={metadata.availableSizes?.component}
                  description={metadata.availableSizes?.description!}
                />
              </div>
            )}

            {/* Tamanhos de Arredondamento */}
            {metadata.borderRadiusOptions && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Tamanhos de Arredondamento
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.borderRadiusOptions?.codeSnippets!}
                  component={metadata.borderRadiusOptions?.component}
                  description={metadata.borderRadiusOptions?.description!}
                />
              </div>
            )}

            {/* Cores */}
            {metadata.colors && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Cores
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.colors?.codeSnippets!}
                  component={metadata.colors?.component}
                  description={metadata.colors?.description!}
                />
              </div>
            )}

            {/* Variantes */}
            {metadata.variants && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Variantes
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.variants?.codeSnippets!}
                  component={metadata.variants?.component}
                  description={metadata.variants?.description!}
                />
              </div>
            )}

            {/* Carregamento */}
            {metadata.loadingStateExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Carregamento
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.variants?.codeSnippets!}
                  component={metadata.variants?.component}
                  description={metadata.variants?.description!}
                />
              </div>
            )}

            {/* Com Ícones */}
            {metadata.withIconsExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Com Ícones
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.withIconsExample?.codeSnippets!}
                  component={metadata.withIconsExample?.component}
                  description={metadata.withIconsExample?.description!}
                />
              </div>
            )}

            {/* Apenas com Ícone */}
            {metadata.iconOnlyExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Apenas com Ícone
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.iconOnlyExample?.codeSnippets!}
                  component={metadata.iconOnlyExample?.component}
                  description={metadata.iconOnlyExample?.description!}
                />
              </div>
            )}

            {/* Estilos Customizados */}
            {metadata.customStylesExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Estilos Customizados
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.customStylesExample?.codeSnippets!}
                  component={metadata.customStylesExample?.component}
                  description={metadata.customStylesExample?.description!}
                />
              </div>
            )}

            {/* Acessibilidade */}
            {metadata.accessibilityExample && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Acessibilidade
                </h2>
                <DisplayComponent
                  codeSnippets={metadata.accessibilityExample?.codeSnippets!}
                  component={metadata.accessibilityExample?.component}
                  description={metadata.accessibilityExample?.description!}
                />
              </div>
            )}

            {/* Propriedades do Componente */}
            {metadata.properties && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
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
        className="w-3/12 h-screen dark:bg-dark-other_section_background bg-fixed sticky top-0"
      >
        <Divider
          className="w-[1px] bg-light-accent/20 dark:bg-dark-accent/40"
          orientation="vertical"
        />
        <ul className="w-full h-full flex items-center justify-center">
          <li>
            <h1 className="text-white font-semibold text-xl">Introdução</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
