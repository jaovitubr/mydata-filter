import MySqlTransformer from "../..";
import { IRuleObject } from "..";

import CEIL from "./ceil";
import FLOOR from "./floor";
import ROUND from "./round";
import LOWER from "./lower";
import UPPER from "./upper";
import CONTAINS from "./contains";
import ENDS_WITH from "./ends_with";
import STARTS_WITH from "./starts_with";

const functions: IRuleObject = {
    CEIL,
    FLOOR,
    ROUND,
    LOWER,
    UPPER,
    CONTAINS,
    ENDS_WITH,
    STARTS_WITH,
}

export default function FUNCTION_CALL(node: any, ctx: MySqlTransformer) {
    if (Object.keys(functions).includes(node.function_name)) {
        return functions[node.function_name](node, ctx);
    } else {
        throw new Error(`invalid function ${node.function_name}`);
    }
}