import MySqlTransformer from "../..";

export default function SECOND(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];
    const possible_types = ["STRING", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (possible_types.includes(argument_node.type)) {
        return `SECOND(${ctx.transform(argument_node)})`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}