"use client";
import { Button, Dropdown, Input } from "@/app/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/Card/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/Tabs/Tabs";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { Locale } from "@/i18n/config";
import { FaChevronDown, FaGithub, FaTerminal } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Intro({ params }: { params: { locale: Locale } }) {
  const { dictionary } = getDictionaryUseClient(params.locale);

  const Intro = dictionary.Intro;

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }

  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 introbg bg-cover bg-no-repeat">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl shadow-md font-bold tracking-tighter text-default-white dark:text-default-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {Intro.title}
                </h1>
                <p className="mx-auto max-w-[700px] shadow-md text-default-white md:text-xl dark:text-dark-accent">
                  {Intro.subtitle}
                </p>
              </div>
              <div className="space-x-4 flex">
                <Button
                  onClick={() => scrollToSection("install-section")}
                  className="bg-transparent hover:bg-transparent text-default-white duration-500 dark:text-default-white dark:hover:text-opacity-80 dark:duration-500"
                  variant="light"
                >
                  <FaChevronDown className="h-8 w-8 animate-pulse" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="install-section"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-light-text dark:text-dark-text font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              {Intro.Install.title}
            </h2>
            <div className="max-w-[700px] mx-auto">
              <p className="mb-4 text-light-text dark:text-dark-text">
                {Intro.Install.description}
              </p>
              <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto">
                <code>npm install @v0up3r/zt-ui</code>
              </pre>
              <p className="mt-4 text-light-text dark:text-dark-text">
                {Intro.Install.commandYarn}
              </p>
              <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto">
                <code>yarn add @v0up3r/zt-ui</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              {Intro.Examples.title}
            </h2>
            <Tabs defaultValue="button" className="max-w-[700px] mx-auto">
              <TabsList>
                <TabsTrigger value="button">
                  {Intro.Examples.tabs.button}
                </TabsTrigger>
                <TabsTrigger value="card">
                  {Intro.Examples.tabs.card}
                </TabsTrigger>
                <TabsTrigger value="form">
                  {Intro.Examples.tabs.form}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="button">
                <Card>
                  <CardHeader>
                    <CardTitle>{Intro.Examples.button.default}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SyntaxHighlighter
                      customStyle={{ borderRadius: 8 }}
                      language="javascript"
                      style={vscDarkPlus}
                    >
                      {`import { Button } from '@v0up3r/zt-ui'

export default function MinhaPage() {
  return (
    <Button>Clique Aqui</Button>
  )
}`}
                    </SyntaxHighlighter>
                    <div className="mt-4">
                      <Button>{Intro.Examples.button.default}</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="card">
                <Card>
                  <CardHeader>
                    <CardTitle>{Intro.Examples.card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SyntaxHighlighter
                      customStyle={{ borderRadius: 8 }}
                      language="javascript"
                      style={vscDarkPlus}
                    >
                      {`import { Card, CardHeader, CardTitle, CardContent } from '@v0up3r/zt-ui'

export default function MinhaPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
      </CardHeader>
      <CardContent>
        Conteúdo do card aqui...
      </CardContent>
    </Card>
  )
}`}
                    </SyntaxHighlighter>
                    <div className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>{Intro.Examples.card.cardTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {Intro.Examples.card.description}
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="form">
                <Card>
                  <CardHeader>
                    <CardTitle>{Intro.Examples.form.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SyntaxHighlighter
                      customStyle={{ borderRadius: 8 }}
                      language="javascript"
                      style={vscDarkPlus}
                    >
                      {`import { Input, Button } from '@v0up3r/zt-ui'

export default function MinhaPage() {
  return (
    <form>
      <Input type="email" placeholder="seu@email.com" />
      <Input type="password" placeholder="*********" />
      <Button type="submit">Enviar</Button>
    </form>
  )
}`}
                    </SyntaxHighlighter>
                    <div className="mt-4">
                      <Input type="email" placeholder="xxxxxxx@email.com" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              {Intro.ComponentsAvailable.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {Intro.ComponentsAvailable.button.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{Intro.ComponentsAvailable.button.description}</p>
                  <Button className="mt-2">
                    {Intro.Examples.button.default}
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{Intro.ComponentsAvailable.card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{Intro.ComponentsAvailable.card.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{Intro.ComponentsAvailable.input.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{Intro.ComponentsAvailable.input.description}</p>
                  <Input
                    className="mt-2"
                    placeholder={Intro.Examples.form.placeholder}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{Intro.ComponentsAvailable.tabs.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{Intro.ComponentsAvailable.tabs.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{Intro.ComponentsAvailable.more.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{Intro.ComponentsAvailable.more.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {Intro.ReadyToStart.title}
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {Intro.ReadyToStart.description}
                </p>
              </div>
              <div className="space-x-4 flex">
                <Button className="bg-light-accent text-light-primary dark:bg-dark-accent dark:text-dark-accent">
                  {Intro.ReadyToStart.install}
                  <FaTerminal className="ml-2 h-4 w-4" />
                </Button>
                <Button className="flex gap-1" variant="flat">{Intro.ReadyToStart.github} <FaGithub /></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {Intro.Footer.copyright}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            {Intro.Footer.terms}
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            {Intro.Footer.privacy}
          </a>
        </nav>
      </footer>
    </div>
  );
}
