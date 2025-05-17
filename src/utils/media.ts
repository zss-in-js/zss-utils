type RangeMediaQuery<S extends string> = `@media (${S})`;
type MediaQueryType = 'max-width' | 'min-width' | 'max-height' | 'min-height';
type MediaQuery<S extends MediaQueryType, N extends string | number> = `@media (${S}: ${N}px)`;

const createMediaQuery = <S extends MediaQueryType>(queryType: S) => {
  return <V extends string | number>(value: V): MediaQuery<S, V> =>
    (typeof value === 'number' ? `@media (${queryType}: ${value}px)` : `@media (${queryType}: ${value})`) as MediaQuery<S, V>;
};

const dark = '@media (prefers-color-scheme: dark)' as const;
const light = '@media (prefers-color-scheme: light)' as const;
const range = <S extends string>(range: S): RangeMediaQuery<S> => `@media (${range})`;
const maxWidth = createMediaQuery('max-width');
const maxHeight = createMediaQuery('max-height');
const minWidth = createMediaQuery('min-width');
const minHeight = createMediaQuery('min-height');

export const media = {
  dark,
  light,
  range,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
};
