@{%
import myLexer from "./lexer";
%}

@lexer myLexer
@preprocessor typescript

main -> Exp {% id %}

Exp -> ExpOr {% id %}
 
ExpOr ->
	  ExpOr _ %LOR _ ExpAnd {% d => ({ type: "OR", left: d[0], right: d[4] }) %}
	| ExpAnd _ %OR _ ExpAnd {% d => ({ type: "OR", left: d[0], right: d[4] }) %}
	| ExpAnd {% id %}
 
ExpAnd ->
	  ExpAnd _ %LAND _ ExpComparison {% d => ({ type: "AND", left: d[0], right: d[4] }) %}
	| ExpAnd _ %AND _ ExpComparison {% d => ({ type: "AND", left: d[0], right: d[4] }) %}
	| ExpComparison {% id %}
 
ExpComparison ->
	  ExpComparison _ %LT _ ExpSum {% d => ({ type: "LT", left: d[0], right: d[4] }) %}
	| ExpComparison _ %GT _ ExpSum {% d => ({ type: "GT", left: d[0], right: d[4] }) %}
	| ExpComparison _ %LE _ ExpSum {% d => ({ type: "LE", left: d[0], right: d[4] }) %}
	| ExpComparison _ %GE _ ExpSum {% d => ({ type: "GE", left: d[0], right: d[4] }) %}
	| ExpComparison _ %NEQ _ ExpSum {% d => ({ type: "NEQ", left: d[0], right: d[4] }) %}
	| ExpComparison _ %EQ _ ExpSum {% d => ({ type: "EQ", left: d[0], right: d[4] }) %}
	| ExpLogicalComparison {% id %}

ExpLogicalComparison ->
	  ExpComparison _ %CONTAINS _ ExpSum {% d => ({ type: "CONTAINS", left: d[0], right: d[4] }) %}
	| ExpComparison _ %CONTAINS_WORD _ ExpSum {% d => ({ type: "CONTAINS_WORD", left: d[0], right: d[4] }) %}
	| ExpComparison _ %STARTS_WITH _ ExpSum {% d => ({ type: "STARTS_WITH", left: d[0], right: d[4] }) %}
	| ExpComparison _ %ENDS_WITH _ ExpSum {% d => ({ type: "ENDS_WITH", left: d[0], right: d[4] }) %}
	| ExpSum {% id %}
 
ExpSum ->
	  ExpSum _ %PLUS _ ExpProduct {% d => ({ type: "ADDITION", left: d[0], right: d[4] }) %}
	| ExpSum _ %MINUS _ ExpProduct {% d => ({ type: "SUBTRACTION", left: d[0], right: d[4] }) %}
	| ExpProduct {% id %}
 
ExpProduct ->
	  ExpProduct _ %MULT _ %NUMBER {% d => ({ type: "MULTIPLICATION", left: d[0], right: d[4] }) %}
	| ExpProduct _ %DIV _ %NUMBER {% d => ({ type: "DIVISION", left: d[0], right: d[4] }) %}
    | Identifier {% id %}
    | FuntionCall {% id %}
	| Parentheses {% id %}
	| %NUMBER {% id %}
	| %STRING {% id %}
	| %BOOLEAN {% id %}

Parentheses -> 
	  %LPAREN _ Exp _ %RPAREN {% d => ({ type: "PARENTHESES", data: d[2] }) %}

Identifier ->
	  Identifier %DOT %IDENTIFIER {% d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[2]] : [d[0], d[2]] }) %}
	| Identifier BracketIdentifier {% d => ({ type: "IDENTIFIER_PATH", data: "data" in d[0] ? [...d[0].data, d[1]] : [d[0], d[1]] }) %}
    | BracketIdentifier {% id %}
    | %IDENTIFIER {% id %}

BracketIdentifier ->
	  %LBRACKET _ %STRING _ %RBRACKET {% d => d[2] %}

FuntionCall ->
	  %IDENTIFIER _ %LPAREN _ FunctionArguments _ %RPAREN {% d => ({ type: "FUNCTION_CALL", function_name: d[0].value, arguments: d[4] }) %}

FunctionArguments ->
	  FunctionArguments _ %COMMA _ ExpProduct {% d => [...d[0], d[4]] %}
	| ExpProduct {% d => [d[0]] %}

_ -> %WS:*     {% d => null %}