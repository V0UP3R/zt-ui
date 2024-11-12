import { useState, useRef, useEffect } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, title }: { code: string; title: string }) => {
  const [copied, setCopied] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (codeRef.current) {
      setButtonHeight(codeRef.current.clientHeight);
    }
  }, [code]);

  return (
    <div className="mb-8 relative">
      <div ref={codeRef}>
        <SyntaxHighlighter
          customStyle={{ borderRadius: 8, width: '100%', height: '100%' }}
          language="bash"
          style={vscDarkPlus}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={handleCopy}
        style={{ height: buttonHeight }}
        className="absolute top-0 right-0 flex items-center p-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
      >
        {copied ? <FiCheck className="mr-1" /> : <FiCopy className="mr-1" />}
      </button>
    </div>
  );
};

export default CodeSnippet;
