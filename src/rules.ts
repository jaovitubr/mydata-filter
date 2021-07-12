// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var LOR: any;
declare var OR: any;
declare var LAND: any;
declare var AND: any;
declare var LT: any;
declare var GT: any;
declare var LE: any;
declare var GE: any;
declare var NEQ: any;
declare var EQ: any;
declare var CONTAINS: any;
declare var CONTAINS_WORD: any;
declare var STARTS_WITH: any;
declare var ENDS_WITH: any;
declare var PLUS: any;
declare var MINUS: any;
declare var MULT: any;
declare var NUMBER: any;
declare var DIV: any;
declare var STRING: any;
declare var BOOLEAN: any;
declare var LPAREN: any;
declare var RPAREN: any;
declare var DOT: any;
declare var IDENTIFIER: any;
declare var LBRACKET: any;
declare var RBRACKET: any;
declare var COMMA: any;
declare var WS: any;

import myLexer from "./lexer";

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: myLexer,
  ParserRules: [
    {"name": "main", "symbols": ["Exp"], "postprocess": id},
    {"name": "Exp", "symbols": ["ExpOr"], "postprocess": id},
    {"name": "ExpOr", "symbols": ["ExpOr", "_", (myLexer.has("LOR") ? {type: "LOR"} : LOR), "_", "ExpAnd"], "postprocess": d => ({ type: "OR", left: d[0], right: d[4] })},
    {"name": "ExpOr", "symbols": ["ExpAnd", "_", (myLexer.has("OR") ? {type: "OR"} : OR), "_", "ExpAnd"], "postprocess": d => ({ type: "OR", left: d[0], right: d[4] })},
    {"name": "ExpOr", "symbols": ["ExpAnd"], "postprocess": id},
    {"name": "ExpAnd", "symbols": ["ExpAnd", "_", (myLexer.has("LAND") ? {type: "LAND"} : LAND), "_", "ExpComparison"], "postprocess": d => ({ type: "AND", left: d[0], right: d[4] })},
    {"name": "ExpAnd", "symbols": ["ExpAnd", "_", (myLexer.has("AND") ? {type: "AND"} : AND), "_", "ExpComparison"], "postprocess": d => ({ type: "AND", left: d[0], right: d[4] })},
    {"name": "ExpAnd", "symbols": ["ExpComparison"], "postprocess": id},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("LT") ? {type: "LT"} : LT), "_", "ExpSum"], "postprocess": d => ({ type: "LT", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("GT") ? {type: "GT"} : GT), "_", "ExpSum"], "postprocess": d => ({ type: "GT", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("LE") ? {type: "LE"} : LE), "_", "ExpSum"], "postprocess": d => ({ type: "LE", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("GE") ? {type: "GE"} : GE), "_", "ExpSum"], "postprocess": d => ({ type: "GE", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("NEQ") ? {type: "NEQ"} : NEQ), "_", "ExpSum"], "postprocess": d => ({ type: "NEQ", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", (myLexer.has("EQ") ? {type: "EQ"} : EQ), "_", "ExpSum"], "postprocess": d => ({ type: "EQ", left: d[0], right: d[4] })},
    {"name": "ExpComparison", "symbols": ["ExpLogicalComparison"], "postprocess": id},
    {"name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (myLexer.has("CONTAINS") ? {type: "CONTAINS"} : CONTAINS), "_", "ExpSum"], "postprocess": d => ({ type: "CONTAINS", left: d[0], right: d[4] })},
    {"name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (myLexer.has("CONTAINS_WORD") ? {type: "CONTAINS_WORD"} : CONTAINS_WORD), "_", "ExpSum"], "postprocess": d => ({ type: "CONTAINS_WORD", left: d[0], right: d[4] })},
    {"name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (myLexer.has("STARTS_WITH") ? {type: "STARTS_WITH"} : STARTS_WITH), "_", "ExpSum"], "postprocess": d => ({ type: "STARTS_WITH", left: d[0], right: d[4] })},
    {"name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (myLexer.has("ENDS_WITH") ? {type: "ENDS_WITH"} : ENDS_WITH), "_", "ExpSum"], "postprocess": d => ({ type: "ENDS_WITH", left: d[0], right: d[4] })},
    {"name": "ExpLogicalComparison", "symbols": ["ExpSum"], "postprocess": id},
    {"name": "ExpSum", "symbols": ["ExpSum", "_", (myLexer.has("PLUS") ? {type: "PLUS"} : PLUS), "_", "ExpProduct"], "postprocess": d => ({ type: "ADDITION", left: d[0], right: d[4] })},
    {"name": "ExpSum", "symbols": ["ExpSum", "_", (myLexer.has("MINUS") ? {type: "MINUS"} : MINUS), "_", "ExpProduct"], "postprocess": d => ({ type: "SUBTRACTION", left: d[0], right: d[4] })},
    {"name": "ExpSum", "symbols": ["ExpProduct"], "postprocess": id},
    {"name": "ExpProduct", "symbols": ["ExpProduct", "_", (myLexer.has("MULT") ? {type: "MULT"} : MULT), "_", (myLexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER)], "postprocess": d => ({ type: "MULTIPLICATION", left: d[0], right: d[4] })},
    {"name": "ExpProduct", "symbols": ["ExpProduct", "_", (myLexer.has("DIV") ? {type: "DIV"} : DIV), "_", (myLexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER)], "postprocess": d => ({ type: "DIVISION", left: d[0], right: d[4] })},
    {"name": "ExpProduct", "symbols": ["Identifier"], "postprocess": id},
    {"name": "ExpProduct", "symbols": ["FuntionCall"], "postprocess": id},
    {"name": "ExpProduct", "symbols": ["Parentheses"], "postprocess": id},
    {"name": "ExpProduct", "symbols": [(myLexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER)], "postprocess": id},
    {"name": "ExpProduct", "symbols": [(myLexer.has("STRING") ? {type: "STRING"} : STRING)], "postprocess": id},
    {"name": "ExpProduct", "symbols": [(myLexer.has("BOOLEAN") ? {type: "BOOLEAN"} : BOOLEAN)], "postprocess": id},
    {"name": "Parentheses", "symbols": [(myLexer.has("LPAREN") ? {type: "LPAREN"} : LPAREN), "_", "Exp", "_", (myLexer.has("RPAREN") ? {type: "RPAREN"} : RPAREN)], "postprocess": d => ({ type: "PARENTHESES", data: d[2] })},
    {"name": "Identifier", "symbols": ["Identifier", (myLexer.has("DOT") ? {type: "DOT"} : DOT), (myLexer.has("IDENTIFIER") ? {type: "IDENTIFIER"} : IDENTIFIER)], "postprocess": d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[2]] : [d[0], d[2]] })},
    {"name": "Identifier", "symbols": ["Identifier", "BracketIdentifier"], "postprocess": d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[1]] : [d[0], d[1]] })},
    {"name": "Identifier", "symbols": ["BracketIdentifier"], "postprocess": id},
    {"name": "Identifier", "symbols": [(myLexer.has("IDENTIFIER") ? {type: "IDENTIFIER"} : IDENTIFIER)], "postprocess": id},
    {"name": "BracketIdentifier", "symbols": [(myLexer.has("LBRACKET") ? {type: "LBRACKET"} : LBRACKET), "_", (myLexer.has("STRING") ? {type: "STRING"} : STRING), "_", (myLexer.has("RBRACKET") ? {type: "RBRACKET"} : RBRACKET)], "postprocess": d => d[2]},
    {"name": "FuntionCall", "symbols": [(myLexer.has("IDENTIFIER") ? {type: "IDENTIFIER"} : IDENTIFIER), "_", (myLexer.has("LPAREN") ? {type: "LPAREN"} : LPAREN), "_", "FunctionArguments", "_", (myLexer.has("RPAREN") ? {type: "RPAREN"} : RPAREN)], "postprocess": d => ({ type: "FUNCTION_CALL", function_name: d[0].value, arguments: d[4] })},
    {"name": "FunctionArguments", "symbols": ["FunctionArguments", "_", (myLexer.has("COMMA") ? {type: "COMMA"} : COMMA), "_", "ExpProduct"], "postprocess": d => [...d[0], d[4]]},
    {"name": "FunctionArguments", "symbols": ["ExpProduct"], "postprocess": d => [d[0]]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null}
  ],
  ParserStart: "main",
};

export default grammar;
