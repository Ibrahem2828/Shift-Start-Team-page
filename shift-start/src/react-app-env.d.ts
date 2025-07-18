/// <reference types="react-scripts" />

declare module '*.svg' {
  import React from 'react';
  const SVGComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.webp';

// Styled components theme type
declare module 'styled-components' {
  import { Theme } from './styles/theme';
  export interface DefaultTheme extends Theme {}
}
