import MySqlTransformer from "../..";

export default function ROUND(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `ROUND(${ctx.transform(argument_node)})`;
}