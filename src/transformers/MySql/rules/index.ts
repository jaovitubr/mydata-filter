import FUNCTION_CALL from "./function_call";
import IDENTIFIER from "./identifier";
import IDENTIFIER_PATH from "./identifier_path";
import PARENTHESES from "./parentheses";
import OR from "./or";
import AND from "./and";
import LT from "./lt";
import GT from "./gt";
import LE from "./le";
import GE from "./ge";
import NEQ from "./neq";
import EQ from "./eq";
import CONTAINS from "./contains";
import CONTAINS_WORD from "./contains_word";
import STARTS_WITH from "./starts_with";
import ENDS_WITH from "./ends_with";
import ADDITION from "./addiction";
import SUBTRACTION from "./subtraction";
import MULTIPLICATION from "./multiplication";
import DIVISION from "./division";
import STRING from "./string";
import NUMBER from "./number";
import BOOLEAN from "./boolean";
import MySqlTransformer from "..";

export interface IRule {
    (node: any, ctx: MySqlTransformer): string;
}

export interface IRuleObject {
    [key: string]: IRule
}

const Rules: IRuleObject = {
    FUNCTION_CALL,
    IDENTIFIER,
    IDENTIFIER_PATH,
    PARENTHESES,
    OR,
    AND,
    LT,
    GT,
    LE,
    GE,
    NEQ,
    EQ,
    CONTAINS,
    CONTAINS_WORD,
    STARTS_WITH,
    ENDS_WITH,
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    STRING,
    NUMBER,
    BOOLEAN,
}

export default Rules;