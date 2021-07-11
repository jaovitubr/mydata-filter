import MySqlTransformer from "../..";

export default function ROUND(node: any, ctx: MySqlTransformer) {
    const argument_node = node.arguments[0];

    if (["NUMBER", "IDENTIFIER_PATH"].includes(argument_node.type)) {
        return `ROUND(${ctx.transform(argument_node)})`
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}