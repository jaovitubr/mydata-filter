"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moo_1 = __importDefault(require("moo"));
exports.default = moo_1.default.compile({
    // Constants
    BOOLEAN: /(?:true|false)/,
    NUMBER: /[-]?(?:[0-9]*[.])?[0-9]+/,
    // Punctuation
    WS: /[ \t]+/,
    DOT: ".",
    COMMA: ",",
    LPAREN: "(",
    RPAREN: ")",
    LBRACKET: "[",
    RBRACKET: "]",
    // Logical
    LAND: "&&",
    LOR: "||",
    AND: "and",
    OR: "or",
    // Comparison
    EQ: "==",
    NEQ: "!=",
    LE: "<=",
    GE: ">=",
    LT: "<",
    GT: ">",
    // Logical Comparison
    CONTAINS: "*=",
    CONTAINS_WORD: "~=",
    STARTS_WITH: "^=",
    ENDS_WITH: "=$",
    // Operators
    PLUS: "+",
    MINUS: "-",
    MULT: "*",
    DIV: "/",
    // Constants
    IDENTIFIER: /[a-zA-Z_][a-zA-Z0-9_]*/,
    STRING: {
        match: /"(?:\\"|[^"])*"|'(?:\\"|[^"])*'/,
        value: rule => rule.replace(/^("|')|("|')$/g, ""),
    }
});
