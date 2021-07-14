import { Parser, Grammar } from "nearley";
import { ITransformer } from "./transformers";
import rules from "./rules";
import { get as CacheGet, put as CachePut } from "./cache";

const grammar = Grammar.fromCompiled(rules);

export * from "./transformers";

export interface CompileOptions {
    cache?: boolean;
    transformer?: ITransformer;
    max_length?: number;
}

export function Parse(code: string, options: CompileOptions): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            if (!code?.length) return null;

            if (options.max_length && code.length > options.max_length)
                return reject(new Error("too larger"));

            if (options.cache !== false) {
                const cached_code = CacheGet(code);
                if (cached_code) return resolve(cached_code);
            }

            const parser = new Parser(grammar);
            parser.feed(code);

            let result = parser.results?.[0];

            if (!result) reject(new Error("nothing to parse"));
            else {
                if (options.transformer) {
                    result = options.transformer.transform(result);
                    resolve(result);
                } else resolve(result);
            }

            if (options.cache !== false) CachePut(code, result);
        } catch (error) {
            reject(error);
        }
    });
}