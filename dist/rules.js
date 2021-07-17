"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d) { return d[0]; }
const lexer_1 = __importDefault(require("./lexer"));
;
;
;
;
const grammar = {
    Lexer: lexer_1.default,
    ParserRules: [
        { "name": "main", "symbols": ["Exp"], "postprocess": id },
        { "name": "Exp", "symbols": ["ExpOr"], "postprocess": id },
        { "name": "ExpOr", "symbols": ["ExpOr", "_", (lexer_1.default.has("LOR") ? { type: "LOR" } : LOR), "_", "ExpAnd"], "postprocess": d => ({ type: "OR", left: d[0], right: d[4] }) },
        { "name": "ExpOr", "symbols": ["ExpAnd", "_", (lexer_1.default.has("OR") ? { type: "OR" } : OR), "_", "ExpAnd"], "postprocess": d => ({ type: "OR", left: d[0], right: d[4] }) },
        { "name": "ExpOr", "symbols": ["ExpAnd"], "postprocess": id },
        { "name": "ExpAnd", "symbols": ["ExpAnd", "_", (lexer_1.default.has("LAND") ? { type: "LAND" } : LAND), "_", "ExpComparison"], "postprocess": d => ({ type: "AND", left: d[0], right: d[4] }) },
        { "name": "ExpAnd", "symbols": ["ExpAnd", "_", (lexer_1.default.has("AND") ? { type: "AND" } : AND), "_", "ExpComparison"], "postprocess": d => ({ type: "AND", left: d[0], right: d[4] }) },
        { "name": "ExpAnd", "symbols": ["ExpComparison"], "postprocess": id },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("LT") ? { type: "LT" } : LT), "_", "ExpSum"], "postprocess": d => ({ type: "LT", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("GT") ? { type: "GT" } : GT), "_", "ExpSum"], "postprocess": d => ({ type: "GT", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("LE") ? { type: "LE" } : LE), "_", "ExpSum"], "postprocess": d => ({ type: "LE", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("GE") ? { type: "GE" } : GE), "_", "ExpSum"], "postprocess": d => ({ type: "GE", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("NEQ") ? { type: "NEQ" } : NEQ), "_", "ExpSum"], "postprocess": d => ({ type: "NEQ", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("EQ") ? { type: "EQ" } : EQ), "_", "ExpSum"], "postprocess": d => ({ type: "EQ", left: d[0], right: d[4] }) },
        { "name": "ExpComparison", "symbols": ["ExpLogicalComparison"], "postprocess": id },
        { "name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("CONTAINS") ? { type: "CONTAINS" } : CONTAINS), "_", "ExpSum"], "postprocess": d => ({ type: "CONTAINS", left: d[0], right: d[4] }) },
        { "name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("CONTAINS_WORD") ? { type: "CONTAINS_WORD" } : CONTAINS_WORD), "_", "ExpSum"], "postprocess": d => ({ type: "CONTAINS_WORD", left: d[0], right: d[4] }) },
        { "name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("STARTS_WITH") ? { type: "STARTS_WITH" } : STARTS_WITH), "_", "ExpSum"], "postprocess": d => ({ type: "STARTS_WITH", left: d[0], right: d[4] }) },
        { "name": "ExpLogicalComparison", "symbols": ["ExpComparison", "_", (lexer_1.default.has("ENDS_WITH") ? { type: "ENDS_WITH" } : ENDS_WITH), "_", "ExpSum"], "postprocess": d => ({ type: "ENDS_WITH", left: d[0], right: d[4] }) },
        { "name": "ExpLogicalComparison", "symbols": ["ExpSum"], "postprocess": id },
        { "name": "ExpSum", "symbols": ["ExpSum", "_", (lexer_1.default.has("PLUS") ? { type: "PLUS" } : PLUS), "_", "ExpProduct"], "postprocess": d => ({ type: "ADDITION", left: d[0], right: d[4] }) },
        { "name": "ExpSum", "symbols": ["ExpSum", "_", (lexer_1.default.has("MINUS") ? { type: "MINUS" } : MINUS), "_", "ExpProduct"], "postprocess": d => ({ type: "SUBTRACTION", left: d[0], right: d[4] }) },
        { "name": "ExpSum", "symbols": ["ExpProduct"], "postprocess": id },
        { "name": "ExpProduct", "symbols": ["ExpProduct", "_", (lexer_1.default.has("MULT") ? { type: "MULT" } : MULT), "_", (lexer_1.default.has("NUMBER") ? { type: "NUMBER" } : NUMBER)], "postprocess": d => ({ type: "MULTIPLICATION", left: d[0], right: d[4] }) },
        { "name": "ExpProduct", "symbols": ["ExpProduct", "_", (lexer_1.default.has("DIV") ? { type: "DIV" } : DIV), "_", (lexer_1.default.has("NUMBER") ? { type: "NUMBER" } : NUMBER)], "postprocess": d => ({ type: "DIVISION", left: d[0], right: d[4] }) },
        { "name": "ExpProduct", "symbols": ["Identifier"], "postprocess": id },
        { "name": "ExpProduct", "symbols": ["FuntionCall"], "postprocess": id },
        { "name": "ExpProduct", "symbols": ["Parentheses"], "postprocess": id },
        { "name": "ExpProduct", "symbols": [(lexer_1.default.has("NUMBER") ? { type: "NUMBER" } : NUMBER)], "postprocess": id },
        { "name": "ExpProduct", "symbols": [(lexer_1.default.has("STRING") ? { type: "STRING" } : STRING)], "postprocess": id },
        { "name": "ExpProduct", "symbols": [(lexer_1.default.has("BOOLEAN") ? { type: "BOOLEAN" } : BOOLEAN)], "postprocess": id },
        { "name": "Parentheses", "symbols": [(lexer_1.default.has("LPAREN") ? { type: "LPAREN" } : LPAREN), "_", "Exp", "_", (lexer_1.default.has("RPAREN") ? { type: "RPAREN" } : RPAREN)], "postprocess": d => ({ type: "PARENTHESES", data: d[2] }) },
        { "name": "Identifier", "symbols": ["Identifier", (lexer_1.default.has("DOT") ? { type: "DOT" } : DOT), (lexer_1.default.has("IDENTIFIER") ? { type: "IDENTIFIER" } : IDENTIFIER)], "postprocess": d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[2]] : [d[0], d[2]] }) },
        { "name": "Identifier", "symbols": ["Identifier", "BracketIdentifier"], "postprocess": d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[1]] : [d[0], d[1]] }) },
        { "name": "Identifier", "symbols": ["BracketIdentifier"], "postprocess": id },
        { "name": "Identifier", "symbols": [(lexer_1.default.has("IDENTIFIER") ? { type: "IDENTIFIER" } : IDENTIFIER)], "postprocess": id },
        { "name": "BracketIdentifier", "symbols": [(lexer_1.default.has("LBRACKET") ? { type: "LBRACKET" } : LBRACKET), "_", (lexer_1.default.has("STRING") ? { type: "STRING" } : STRING), "_", (lexer_1.default.has("RBRACKET") ? { type: "RBRACKET" } : RBRACKET)], "postprocess": d => d[2] },
        { "name": "FuntionCall", "symbols": [(lexer_1.default.has("IDENTIFIER") ? { type: "IDENTIFIER" } : IDENTIFIER), "_", (lexer_1.default.has("LPAREN") ? { type: "LPAREN" } : LPAREN), "_", "FunctionArguments", "_", (lexer_1.default.has("RPAREN") ? { type: "RPAREN" } : RPAREN)], "postprocess": d => ({ type: "FUNCTION_CALL", function_name: d[0].value, arguments: d[4] }) },
        { "name": "FunctionArguments", "symbols": ["FunctionArguments", "_", (lexer_1.default.has("COMMA") ? { type: "COMMA" } : COMMA), "_", "ExpProduct"], "postprocess": d => [...d[0], d[4]] },
        { "name": "FunctionArguments", "symbols": ["ExpProduct"], "postprocess": d => [d[0]] },
        { "name": "_$ebnf$1", "symbols": [] },
        { "name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer_1.default.has("WS") ? { type: "WS" } : WS)], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null }
    ],
    ParserStart: "main",
};
exports.default = grammar;
