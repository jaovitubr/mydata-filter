import MySqlTransformer from "../..";

export default function FLOOR(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `FLOOR(${ctx.transform(argument_node)})`;
}