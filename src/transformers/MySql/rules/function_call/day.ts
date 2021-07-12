import MySqlTransformer from "../..";

export default function DAY(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    
    return `DAY(${ctx.transform(argument_node)})`;
}