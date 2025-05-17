type RangeContainerQuery<S extends string> = `@container (${S})`;
type ContainerQueryType = 'max-width' | 'min-width' | 'max-height' | 'min-height';
type ContainerQuery<S extends ContainerQueryType, N extends number> = `@container (${S}: ${N}px)`;

const range = <S extends string>(range: S): RangeContainerQuery<S> => `@container (${range})`;
const maxWidth = <N extends number>(num: N): ContainerQuery<'max-width', N> => `@container (max-width: ${num}px)`;
const maxHeight = <N extends number>(num: N): ContainerQuery<'max-height', N> => `@container (max-height: ${num}px)`;
const minWidth = <N extends number>(num: N): ContainerQuery<'min-width', N> => `@container (min-width: ${num}px)`;
const minHeight = <N extends number>(num: N): ContainerQuery<'min-height', N> => `@container (min-height: ${num}px)`;

export const container = {
  range,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
};
