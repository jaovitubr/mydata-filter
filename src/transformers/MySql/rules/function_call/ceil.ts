import MySqlTransformer from "../..";

export default function CEIL(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `CEIL(${ctx.transform(argument_node)})`;
}