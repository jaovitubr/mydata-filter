import { ITransformer } from "..";
import rules from "./rules";

export interface MySqlTransformerOptions {
    max_inline_functions?: number;
    scope?: string[][];
}

export default class MySqlTransformer implements ITransformer {
    inline_functions = 0;

    constructor(public options: MySqlTransformerOptions) { }

    transform(rule: any) {
        if (Object.keys(rules).includes(rule.type)) {
            return rules[rule.type](rule, this);
        } else {
            throw new Error(`Unhandled AST node type ${rule.type}`);
        }
    }

    mysql_escape_string(str: string) {
        if (!str) return str;

        return str
            .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "") // remove emojis
            .replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) { // escape
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "\"":
                    case "'":
                    case "\\":
                    case "%":
                        return "\\" + char;
                    default:
                        return char;
                }
            });
    }
}