import MySqlTransformer from "..";

export default function IDENTIFIER(node: any, ctx: MySqlTransformer) {
    return `\`${node.value}\``
}