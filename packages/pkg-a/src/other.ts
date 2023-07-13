// how Omit from lib is defined
type OmitReal<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// what we see when we hover it
type OmitUnveiled<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export function test1<T, K extends string>(obj: T, k: K): OmitReal<T, K> {
  return {} as any;
}

export function test2<T, K extends string>(obj: T, k: K): OmitUnveiled<T, K> {
  return {} as any;
}
