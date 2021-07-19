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

    if (options.cache !== false) {
        const cached_code = CacheGet(code);
        if (cached_code) return cached_code;
    }

    const parser = new Parser(grammar);
    parser.feed(code);

    let result = parser.results?.[0];
    if (!result) throw new Error("nothing to parse");

    if (typeof options.transformer?.transform === "function") {
        result = options.transformer.transform(result);
    }

    if (options.cache !== false) CachePut(code, result);

    return result;
}