export interface ITransformer {
    transform(rule: any): any;
}
export interface ParseOptions {
    cache?: boolean;
    transformer?: ITransformer;
    max_length?: number;
}
export declare function Parse(code: string, options?: ParseOptions): Promise<string>;
export declare function ParseSync(code: string, options?: ParseOptions): string;
