type RangeMediaQuery<S extends string> = `@media (${S})`;
type MediaQueryType = 'max-width' | 'min-width' | 'max-height' | 'min-height';
type MediaQuery<S extends MediaQueryType, N extends number> = `@media (${S}: ${N}px)`;

const dark = '@media (prefers-color-scheme: dark)' as const;
const light = '@media (prefers-color-scheme: light)' as const;
const range = <S extends string>(range: S): RangeMediaQuery<S> => `@media (${range})`;
const maxWidth = <N extends number>(num: N): MediaQuery<'max-width', N> => `@media (max-width: ${num}px)`;
const maxHeight = <N extends number>(num: N): MediaQuery<'max-height', N> => `@media (max-height: ${num}px)`;
const minWidth = <N extends number>(num: N): MediaQuery<'min-width', N> => `@media (min-width: ${num}px)`;
const minHeight = <N extends number>(num: N): MediaQuery<'min-height', N> => `@media (min-height: ${num}px)`;

export const media = {
  dark,
  light,
  range,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
};
