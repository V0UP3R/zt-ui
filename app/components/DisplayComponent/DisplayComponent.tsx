import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardHeader, CardTitle, CardContent } from "../Card/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Tabs/Tabs";

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
    <Tabs defaultValue="component" className="max-w-[700px] mx-auto">
      <TabsList className="rounded-t-md bg-light-primary">
        <TabsTrigger value="component">Visualizar</TabsTrigger>
        <TabsTrigger value="code">Código</TabsTrigger>
      </TabsList>
      <div className="rounded-b-md">
        <TabsContent className="px-4 py-4 bg-light-primary rounded-md rounded-tl-none" value="component">
          <Card>
            <CardHeader>
              <CardTitle>Exemplo de Botão</CardTitle>
            </CardHeader>
            <CardContent>{component}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="px-4 py-4 bg-light-primary rounded-md rounded-tl-none" value="code">
          <Card>
            <CardHeader>
              <CardTitle>Exemplo de Botão</CardTitle>
            </CardHeader>
            <CardContent>
              <SyntaxHighlighter
                customStyle={{ borderRadius: 8 }}
                language="javascript"
                style={vscDarkPlus}
              >
                {codeSnippets}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
};
