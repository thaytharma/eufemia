import EufemiaProperties from './properties.js';

export interface StylisElement {
  type: string;
  value: string;
  props: Array<string>;
  root: StylisElement | null;
  children: Array<StylisElement>;
  line: number;
  column: number;
  length: number;
  return: string;
}

export type StylisPluginCallback = (
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
) => string | undefined;

export type StylisPlugin = (
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
) => string | undefined;

export type properties = {};
// export const properties = {}<EufemiaProperties>;
// export const properties = EufemiaProperties;

export function withProperties(properties?: properties): StylisPlugin;

export default function stylisPlugin(
  context: number,
  content: StylisElement,
  properties?: properties
): StylisPlugin;
