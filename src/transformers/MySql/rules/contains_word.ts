import MySqlTransformer from "..";

export default function CONTAINS_WORD(node: any, ctx: MySqlTransformer) {
    const possible_types = ["STRING", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (possible_types.includes(node.left.type) && possible_types.includes(node.right.type)) {
        return `${ctx.transform(node.left)} REGEXP CONCAT('\\b', ${ctx.transform(node.right)}, '\\b')`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}