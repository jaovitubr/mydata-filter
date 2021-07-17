"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseSync = exports.Parse = void 0;
const nearley_1 = require("nearley");
const rules_1 = __importDefault(require("./rules"));
const cache_1 = require("./cache");
const grammar = nearley_1.Grammar.fromCompiled(rules_1.default);
function Parse(code, options = {}) {
    return new Promise((resolve, reject) => {
        try {
            const result = ParseSync(code, options);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.Parse = Parse;
function ParseSync(code, options = {}) {
    var _a;
    if (!(code === null || code === void 0 ? void 0 : code.length))
        return "";
    if (options.max_length && code.length > options.max_length)
        throw new Error("too larger");
    if (options.cache !== false) {
        const cached_code = cache_1.get(code);
        if (cached_code)
            return cached_code;
    }
    const parser = new nearley_1.Parser(grammar);
    parser.feed(code);
    let result = (_a = parser.results) === null || _a === void 0 ? void 0 : _a[0];
    if (!result)
        throw new Error("nothing to parse");
    if (options.transformer)
        result = options.transformer.transform(result);
    if (options.cache !== false)
        cache_1.put(code, result);
    return result;
}
exports.ParseSync = ParseSync;
