import MySqlTransformer from "../..";

export default function CONTAINS(node: any, ctx: MySqlTransformer) {
    const [argument1_node, argument2_node] = node.arguments;
    
    return `${ctx.transform(argument1_node)} LIKE CONCAT('%', ${ctx.transform(argument2_node)}, '%')`;
}