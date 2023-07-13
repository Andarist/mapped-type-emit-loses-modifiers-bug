import { wrappedTest1, wrappedTest2, Obj } from "pkg-a";

export const processedExternally1 = wrappedTest1({} as Obj, "a");
export const processedExternally2 = wrappedTest2({} as Obj, "a");
