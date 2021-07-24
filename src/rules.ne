@{%
import myLexer from "./lexer";
import { Features } from "./features";
%}

@lexer myLexer
@preprocessor typescript

main -> Sorting {% id %}

Sorting ->
	  Sorting _ %COMMA _ Sorting {% d => ({ type: Features.SORTING_LIST, data: d[0]?.type === Features.SORTING_LIST ? [...d[0].data, d[4]] : [d[0], d[4]] }) %}
	| Exp _ %ASC {% d => ({ type: Features.ASC, data: d[0] }) %}
	| Exp _ %DESC {% d => ({ type: Features.DESC, data: d[0] }) %}
	| Exp {% id %}

Exp -> ExpOr {% id %}
 
ExpOr ->
	  ExpOr _ %LOR _ ExpAnd {% d => ({ type: Features.OR, left: d[0], right: d[4] }) %}
	| ExpAnd _ %OR _ ExpAnd {% d => ({ type: Features.OR, left: d[0], right: d[4] }) %}
	| ExpAnd {% id %}
 
ExpAnd ->
	  ExpAnd _ %LAND _ ExpComparison {% d => ({ type: Features.AND, left: d[0], right: d[4] }) %}
	| ExpAnd _ %AND _ ExpComparison {% d => ({ type: Features.AND, left: d[0], right: d[4] }) %}
	| ExpComparison {% id %}
 
ExpComparison ->
	  ExpComparison _ %LT _ ExpSum {% d => ({ type: Features.LT, left: d[0], right: d[4] }) %}
	| ExpComparison _ %GT _ ExpSum {% d => ({ type: Features.GT, left: d[0], right: d[4] }) %}
	| ExpComparison _ %LE _ ExpSum {% d => ({ type: Features.LE, left: d[0], right: d[4] }) %}
	| ExpComparison _ %GE _ ExpSum {% d => ({ type: Features.GE, left: d[0], right: d[4] }) %}
	| ExpComparison _ %NEQ _ ExpSum {% d => ({ type: Features.NEQ, left: d[0], right: d[4] }) %}
	| ExpComparison _ %EQ _ ExpSum {% d => ({ type: Features.EQ, left: d[0], right: d[4] }) %}
	| ExpLogicalComparison {% id %}

ExpLogicalComparison ->
	  ExpComparison _ %CONTAINS _ ExpSum {% d => ({ type: Features.CONTAINS, left: d[0], right: d[4] }) %}
	| ExpComparison _ %CONTAINS_WORD _ ExpSum {% d => ({ type: Features.CONTAINS_WORD, left: d[0], right: d[4] }) %}
	| ExpComparison _ %STARTS_WITH _ ExpSum {% d => ({ type: Features.STARTS_WITH, left: d[0], right: d[4] }) %}
	| ExpComparison _ %ENDS_WITH _ ExpSum {% d => ({ type: Features.ENDS_WITH, left: d[0], right: d[4] }) %}
	| ExpSum {% id %}
 
ExpSum ->
	  ExpSum _ %PLUS _ ExpProduct {% d => ({ type: Features.ADDITION, left: d[0], right: d[4] }) %}
	| ExpSum _ %MINUS _ ExpProduct {% d => ({ type: Features.SUBTRACTION, left: d[0], right: d[4] }) %}
	| ExpProduct {% id %}
 
ExpProduct ->
	  ExpProduct _ %MULT _ %NUMBER {% d => ({ type: Features.MULTIPLICATION, left: d[0], right: d[4] }) %}
	| ExpProduct _ %DIV _ %NUMBER {% d => ({ type: Features.DIVISION, left: d[0], right: d[4] }) %}
    | Identifier {% id %}
    | FuntionCall {% id %}
	| Parentheses {% id %}
	| %NUMBER {% id %}
	| %STRING {% id %}
	| %BOOLEAN {% id %}

Parentheses -> 
	  %LPAREN _ Exp _ %RPAREN {% d => ({ type: Features.PARENTHESES, data: d[2] }) %}

Identifier ->
	  Identifier %DOT %IDENTIFIER {% d => ({ type: Features.IDENTIFIER_PATH, data: "data" in d[0] ? [...d[0].data, d[2]] : [d[0], d[2]] }) %}
	| Identifier BracketIdentifier {% d => ({ type: Features.IDENTIFIER_PATH, data: "data" in d[0] ? [...d[0].data, d[1]] : [d[0], d[1]] }) %}
    | BracketIdentifier {% id %}
    | %IDENTIFIER {% id %}

BracketIdentifier ->
	  %LBRACKET _ %STRING _ %RBRACKET {% d => d[2] %}

FuntionCall ->
	  %IDENTIFIER _ %LPAREN _ FunctionArguments _ %RPAREN {% d => ({ type: Features.FUNCTION_CALL, function_name: d[0].value, arguments: d[4] }) %}

FunctionArguments ->
	  FunctionArguments _ %COMMA _ ExpProduct {% d => [...d[0], d[4]] %}
	| ExpProduct {% d => [d[0]] %}

_ -> %WS:*     {% d => null %}