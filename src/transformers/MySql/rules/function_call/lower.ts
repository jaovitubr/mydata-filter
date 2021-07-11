import MySqlTransformer from "../..";

export default function LOWER(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];

    if (argument_node.type === "NUMBER") {
        return `LOWER(${String(Number(argument_node.value))})`
    } else if (argument_node.type === "IDENTIFIER_PATH") {
        return `FLOOR(${ctx.transform(argument_node)})`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}