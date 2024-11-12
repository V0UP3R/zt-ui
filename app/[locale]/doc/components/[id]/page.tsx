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
import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { componentMetadata } from "./metadata/metadata";
import { DisplayComponent } from "@/app/components/DisplayComponent/DisplayComponent";
import { FiCheck, FiCopy } from "react-icons/fi";
import CodeSnippet from "@/app/components/CodeSnippet/CodeSnippet";

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
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs:{[key: string]: React.RefObject<HTMLDivElement>;} = {
    description: useRef<HTMLDivElement>(null),
    installation: useRef<HTMLDivElement>(null),
    importExample: useRef<HTMLDivElement>(null),
    usageExample: useRef<HTMLDivElement>(null),
    disabledUsageExample: useRef<HTMLDivElement>(null),
    availableSizes: useRef<HTMLDivElement>(null),
    borderRadiusOptions: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    loadingStateExample: useRef<HTMLDivElement>(null),
    withIconsExample: useRef<HTMLDivElement>(null),
    iconOnlyExample: useRef<HTMLDivElement>(null),
    customStylesExample: useRef<HTMLDivElement>(null),
    accessibilityExample: useRef<HTMLDivElement>(null),
    properties: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionKey: string) => {
    setActiveSection(sectionKey);
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior: "smooth", block:"center"});
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = Object.keys(sectionRefs).find(
              (key) => sectionRefs[key].current === entry.target
            );
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [componentName]);

  const navigationItems = [
    { key: "description", label: "Descrição do Componente" },
    { key: "installation", label: "Instalação" },
    { key: "importExample", label: "Importação" },
    { key: "usageExample", label: "Uso Básico" },
    { key: "disabledUsageExample", label: "Botão Desabilitado" },
    { key: "availableSizes", label: "Tamanhos Disponíveis" },
    { key: "borderRadiusOptions", label: "Tamanhos de Arredondamento" },
    { key: "colors", label: "Cores" },
    { key: "variants", label: "Variantes de Estilo" },
    { key: "loadingStateExample", label: "Estado de Carregamento" },
    { key: "withIconsExample", label: "Com Ícones" },
    { key: "iconOnlyExample", label: "Apenas com Ícone" },
    { key: "customStylesExample", label: "Estilos Customizados" },
    { key: "accessibilityExample", label: "Acessibilidade" },
    { key: "properties", label: "Propriedades do Componente" },
    { key: "events", label: "Eventos do Componente" },
  ];

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
          <div className="w-9/12 flex flex-col gap-16">
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
              <div className="mb-8" ref={sectionRefs.description}>
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
              <>
                <h2 ref={sectionRefs.installation} className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Instalação
                </h2>
                <CodeSnippet
                  title={"Instalação"}
                  code={metadata.installation.codeSnippets}
                />
              </>
            )}

            {/* Importação */}
            {metadata.importExample && (
              <>
                <h2 ref={sectionRefs.importExample} className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Importação
                </h2>
                <CodeSnippet
                  title={"Importação"}
                  code={metadata.importExample.codeSnippets}
                />
              </>
            )}

            {/* Uso do Componente */}
            {metadata.usageExample && (
              <div ref={sectionRefs.usageExample} className="mb-8">
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
              <div ref={sectionRefs.disabledUsageExample} className="mb-8">
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
              <div ref={sectionRefs.availableSizes} className="mb-8">
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
              <div ref={sectionRefs.borderRadiusOptions} className="mb-8">
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
              <div ref={sectionRefs.colors} className="mb-8">
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
              <div ref={sectionRefs.variants} className="mb-8">
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
              <div ref={sectionRefs.loadingStateExample} className="mb-8">
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
              <div ref={sectionRefs.withIconsExample} className="mb-8">
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
              <div ref={sectionRefs.iconOnlyExample} className="mb-8">
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
              <div ref={sectionRefs.customStylesExample} className="mb-8">
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
              <div ref={sectionRefs.accessibilityExample} className="mb-8">
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
              <div ref={sectionRefs.properties} className="mb-8">
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
              <div ref={sectionRefs.events} className="mb-8">
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
        className="w-3/12 h-screen flex dark:bg-dark-other_section_background bg-fixed sticky top-0"
      >
        <Divider
          className="w-[1px] bg-light-accent/20 dark:bg-dark-accent/40"
          orientation="vertical"
        />
        <ul className="w-full h-full flex flex-col ml-20 mt-20 gap-2 text-left text-light-text font-semibold">
          {navigationItems.map((item) => (
            <li
              key={item.key}
              className={`cursor-pointer transition-colors duration-200 hover:text-blue-400 ${
                activeSection === item.key
                  ? "text-blue-500"
                  : "text-light-text dark:text-dark-text"
              }`}
              onClick={() => scrollToSection(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
