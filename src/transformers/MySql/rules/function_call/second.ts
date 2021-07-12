import MySqlTransformer from "../..";

export default function SECOND(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `SECOND(${ctx.transform(argument_node)})`;
}