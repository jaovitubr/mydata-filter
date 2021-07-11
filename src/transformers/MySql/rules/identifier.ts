import MySqlTransformer from "..";

export default function IDENTIFIER(node: any, ctx: MySqlTransformer) {
    return `\`${ctx.parse_node_string(node.value)}\``
}