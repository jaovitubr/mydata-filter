import MySqlTransformer from "../..";

export default function CEIL(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    const possible_types = ["NUMBER", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (possible_types.includes(argument_node.type)) {
        return `CEIL(${ctx.transform(argument_node)})`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}