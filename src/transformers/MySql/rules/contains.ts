import MySqlTransformer from "..";

export default function CONTAINS(node: any, ctx: MySqlTransformer) {
    const possible_types = ["STRING", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (possible_types.includes(node.left.type) && possible_types.includes(node.right.type)) {
        return `${ctx.transform(node.left)} LIKE CONCAT('%', ${ctx.transform(node.right)}, '%')`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}