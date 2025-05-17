type RangeContainerQuery<S extends string> = `@container (${S})`;
type ContainerQueryType = 'max-width' | 'min-width' | 'max-height' | 'min-height';
type ContainerQuery<S extends ContainerQueryType, V extends string | number> = V extends number ? `@container (${S}: ${V}px)` : `@container (${S}: ${V})`;

const createContainerQuery = <S extends ContainerQueryType>(queryType: S) => {
  return <V extends string | number>(value: V): ContainerQuery<S, V> =>
    (typeof value === 'number' ? `@container (${queryType}: ${value}px)` : `@container (${queryType}: ${value})`) as ContainerQuery<S, V>;
};

const range = <S extends string>(range: S): RangeContainerQuery<S> => `@container (${range})`;
const maxWidth = createContainerQuery('max-width');
const maxHeight = createContainerQuery('max-height');
const minWidth = createContainerQuery('min-width');
const minHeight = createContainerQuery('min-height');

export const container = {
  range,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
};
