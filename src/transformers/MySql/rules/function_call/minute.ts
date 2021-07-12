import MySqlTransformer from "../..";

export default function MINUTE(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `MINUTE(${ctx.transform(argument_node)})`;
}