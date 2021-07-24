import { Parser, Grammar } from "nearley";
import rules from "./rules";
import { get as CacheGet, put as CachePut } from "./cache";

const grammar = Grammar.fromCompiled(rules);

export interface ITransformer {
    transform(rule: any): any;
}
export interface ParseOptions {
    cache?: boolean;
    transformer?: ITransformer;
    max_length?: number;
}

export * from "./features";

export function Parse(code: string, options: ParseOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const result = ParseSync(code, options);

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

export function ParseSync(code: string, options: ParseOptions = {}): string {
    if (!code?.length) return "";

    if (options.max_length && code.length > options.max_length)
        throw new Error("too larger");

    let ast_code;

    if (options.cache !== false) ast_code = CacheGet(code);

    if (!ast_code) {
        const parser = new Parser(grammar);
        parser.feed(code);

        ast_code = parser.results?.[0];
    }

    if (options.cache !== false) CachePut(code, ast_code);

    if (!ast_code) throw new Error("nothing to parse");

    if (typeof options.transformer?.transform === "function") {
        return options.transformer.transform(ast_code);
    } else {
        return ast_code;
    }
}