import moo from "moo";

export default moo.compile({
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