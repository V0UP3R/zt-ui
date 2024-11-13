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
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

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

  const socialmediaIconClass = "w-6 h-6 hover:text-default-blue dark:hover:text-dark-button duration-600 transition-colors";

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    componentDescription: useRef<HTMLDivElement>(null),
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
    sectionRefs[sectionKey].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
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
    { key: "componentDescription", label: "Descrição do Componente" },
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
    { key: "properties", label: "Propriedades e Eventos" },
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
          <div className="w-9/12 flex flex-col gap-8">
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
              <div className="mb-8" ref={sectionRefs.componentDescription}>
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
              <div className="mb-8">
                <h2
                  ref={sectionRefs.installation}
                  className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4"
                >
                  Instalação
                </h2>
                <CodeSnippet
                  title={"Instalação"}
                  code={metadata.installation.codeSnippets}
                />
              </div>
            )}

            {/* Importação */}
            {metadata.importExample && (
              <div className="mb-8">
                <h2
                  ref={sectionRefs.importExample}
                  className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4"
                >
                  Importação
                </h2>
                <CodeSnippet
                  title={"Importação"}
                  code={metadata.importExample.codeSnippets}
                />
              </div>
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
              <div ref={sectionRefs.properties} className="mb-6">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary mb-4">
                  Propriedades do Componente
                </h2>
                <ul className="list-disc list-inside dark:text-dark-primary">
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
              <div ref={sectionRefs.events} className="h-[35vh]">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-primary">
                  Eventos do Componente
                </h2>
                <ul className="list-disc list-inside dark:text-dark-primary">
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
          className="w-[1px] bg-light-accent/20 dark:bg-dark-accent/10"
          orientation="vertical"
        />
        <div className="w-full h-full flex flex-col justify-between pt-14 gap-2 text-left text-light-text dark: font-semibold">
          <div className="w-full flex flex-col items-center">
            <h1 className="w-1/2 text-3xl mb-4 font-bold dark:text-dark-butttonText_HeadLine">
              Tópicos
            </h1>
            <ul className="w-1/2 h-full flex flex-col gap-2 text-left text-light-text font-semibold">
              {navigationItems.map(
                (item) =>
                  metadata &&
                  Object.keys(metadata).includes(item.key) && (
                    <li
                      key={item.key}
                      className={`cursor-pointer transition-colors duration-200 hover:text-blue-400 dark:hover:text-dark-button ${
                        activeSection === item.key
                          ? "text-blue-500 dark:text-dark-button"
                          : "text-light-text dark:text-dark-text"
                      }`}
                      onClick={() => scrollToSection(item.key)}
                    >
                      {item.label}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="flex gap-6 h-20 w-full bg-light-accent text-light-primary dark:bg-dark-background justify-center items-center">
            <Link href={"#"}>
              <BsTwitterX className={socialmediaIconClass} />
            </Link>
            <Link href={"#"}>
            <FaDiscord className={socialmediaIconClass} />
            </Link>
            <Link href={"#"}>
              <FaGithub className={socialmediaIconClass} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
