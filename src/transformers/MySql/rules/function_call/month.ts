import MySqlTransformer from "../..";

export default function MONTH(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `MONTH(${ctx.transform(argument_node)})`;
}