import { test1, test2 } from "./other";

export function wrappedTest1<T, K extends string>(obj: T, k: K) {
  return test1(obj, k);
}

export function wrappedTest2<T, K extends string>(obj: T, k: K) {
  return test2(obj, k);
}

export type Obj = {
  a: number;
  readonly foo: string;
};

export const processedInternally1 = wrappedTest1({} as Obj, "a");
export const processedInternally2 = wrappedTest2({} as Obj, "a");
