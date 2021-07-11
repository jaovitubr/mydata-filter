import MySqlTransformer from "../..";

export default function ENDS_WITH(node: any, ctx: MySqlTransformer) {
    const [argument1_node, argument2_node] = node.arguments;
    const possible_types = ["STRING", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (possible_types.includes(argument1_node.type) && possible_types.includes(argument2_node.type)) {
        return `${ctx.transform(argument1_node)} LIKE CONCAT('%', ${ctx.transform(argument2_node)})`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}