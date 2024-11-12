import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardHeader, CardTitle, CardContent } from "../Card/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Tabs/Tabs";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

interface DisplayComponent {
  codeSnippets: string;
  description: string;
  component: React.ReactNode;
}

export const DisplayComponent = ({
  codeSnippets,
  description,
  component,
}: DisplayComponent) => {
  return (
    <Tabs defaultValue="component" className="">
      <TabsList className="rounded-t-md flex justify-start items-end">
        <TabsTrigger value="component">Visualizar</TabsTrigger>
        <TabsTrigger value="code">Código</TabsTrigger>
      </TabsList>
      <div className="rounded-b-md">
        <TabsContent className="px-4 py-4 bg-light-accent rounded-md rounded-tl-none" value="component">
          <Card>
            <CardHeader>
              <CardTitle>{description}</CardTitle>
            </CardHeader>
            <CardContent>{component}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="px-4 py-4 bg-light-accent rounded-md rounded-tl-none" value="code">
          <Card>
            <CardHeader className="text-light-background">
              <CardTitle>Exemplo de Botão</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeSnippet title="" code={codeSnippets} />
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
};
