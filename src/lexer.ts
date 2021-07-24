import moo from "moo";

export default moo.compile({
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
    AND: /[Aa][Nn][Dd]/,
    OR: /[Oo][Rr]/,

    // Order
    ASC: /[Aa][Ss][Cc]/,
    DESC: /[Dd][Ee][Ss][Cc]/,

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
    BOOLEAN: /(?:[Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])/,
    NUMBER: /[-]?(?:[0-9]*[.])?[0-9]+/,
    STRING: {
        match: /"(?:\\"|[^"])*"|'(?:\\"|[^"])*'/,
        value: rule => rule.replace(/^("|')|("|')$/g, ""),
    },

    SyntaxError: moo.error
});