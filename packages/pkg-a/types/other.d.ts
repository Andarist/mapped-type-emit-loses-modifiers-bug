type OmitReal<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitUnveiled<T, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
};
export declare function test1<T, K extends string>(obj: T, k: K): OmitReal<T, K>;
export declare function test2<T, K extends string>(obj: T, k: K): OmitUnveiled<T, K>;
export {};
