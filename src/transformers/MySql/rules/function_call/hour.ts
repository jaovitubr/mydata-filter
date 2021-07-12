import MySqlTransformer from "../..";

export default function HOUR(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `HOUR(${ctx.transform(argument_node)})`;
}