export const scheme = {
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
} as const;

const range = (range: string) => `@media (${range})` as '@media ()';
const max = (str: string) => `@media (max-${str})` as '@media (max-)';
const min = (str: string) => `@media (min-${str})` as '@media (min-)';

export const media = {
  range,
  max,
  min,
  scheme,
};
