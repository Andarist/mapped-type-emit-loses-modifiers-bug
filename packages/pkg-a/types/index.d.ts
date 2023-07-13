export declare function wrappedTest1<T, K extends string>(obj: T, k: K): { [P in Exclude<keyof T, K>]: T[P]; };
export declare function wrappedTest2<T, K extends string>(obj: T, k: K): { [P in Exclude<keyof T, K>]: T[P]; };
export type Obj = {
    a: number;
    readonly foo: string;
};
export declare const processedInternally1: {
    readonly foo: string;
};
export declare const processedInternally2: {
    foo: string;
};
