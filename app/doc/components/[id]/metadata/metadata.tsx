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
    example: string;
    description: string;
  };
  disabledUsageExample?: {
    example: string;
    description: string;
  };
  availableSizes?: {
    examples: string[];
    description: string;
  };
  borderRadiusOptions?: {
    examples: string[];
    description: string;
  };
  colors?: {
    examples: string[];
    description: string;
  };
  variants?: {
    examples: string[];
    description: string;
  };
  loadingStateExample?: {
    example: string;
    description: string;
  };
  withIconsExample?: {
    example: string;
    description: string;
  };
  iconOnlyExample?: {
    example: string;
    description: string;
  };
  customStylesExample?: {
    example: string;
    description: string;
  };
  accessibilityExample?: {
    example: string;
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