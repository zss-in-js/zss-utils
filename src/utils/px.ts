export type Join<T extends readonly string[]> = T extends [infer F extends string, ...infer R extends string[]] ? `${F}${Join<R>}` : '';

const px = <T extends readonly string[]>(...pseudos: T): Join<T> => {
  return pseudos.filter(Boolean).join('') as Join<T>;
};

export { px };
