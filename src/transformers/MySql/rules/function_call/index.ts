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
import CONCAT from "./concat";
import TRIM from "./trim";
import MONTH from "./month";
import DAY from "./day";
import HOUR from "./hour";
import MINUTE from "./minute";
import SECOND from "./second";

const functions: IRuleObject = {
    CEIL,
    FLOOR,
    ROUND,
    LOWER,
    UPPER,
    CONTAINS,
    ENDS_WITH,
    STARTS_WITH,
    CONCAT,
    TRIM,
    MONTH,
    DAY,
    HOUR,
    MINUTE,
    SECOND,
}

export default function FUNCTION_CALL(node: any, ctx: MySqlTransformer) {
    if (Object.keys(functions).includes(node.function_name)) {
        ctx.inline_functions++;

        if (ctx.options.max_inline_functions && ctx.inline_functions > ctx.options.max_inline_functions)
            throw new Error("function call limit exceeded");

        return functions[node.function_name](node, ctx);
    } else {
        throw new Error(`invalid function ${node.function_name}`);
    }
}