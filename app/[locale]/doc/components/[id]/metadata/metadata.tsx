export interface ComponentMetadata {
  componentDescription?: string;
  installation?: {
    codeSnippet: string;
    description: string;
  };
  importExample?: {
    codeSnippets: string[];
    description: string;
  };
  usageExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  disabledUsageExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  availableSizes?: {
    component: React.ReactNode;
    codeSnippets: string[];
    description: string;
  };
  borderRadiusOptions?: {
    component: React.ReactNode;
    codeSnippets: string[];
    description: string;
  };
  colors?: {
    component: React.ReactNode;
    codeSnippets: string[];
    description: string;
  };
  variants?: {
    component: React.ReactNode;
    codeSnippets: string[];
    description: string;
  };
  loadingStateExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  withIconsExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  iconOnlyExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  customStylesExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  accessibilityExample?: {
    component: React.ReactNode;
    codeSnippets: string;
    description: string;
  };
  properties?: Array<{
    name: string;
    description: string;
  }>;
  events?: Array<{
    name: string;
    description: string;
  }>;
  children?: React.ReactNode;
}

import { ButtonMetadata } from "./Button.metadata";

export const componentMetadata: { [key: string]: ComponentMetadata } = {
  Button: ButtonMetadata,
};