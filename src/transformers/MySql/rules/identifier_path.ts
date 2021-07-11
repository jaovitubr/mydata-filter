import MySqlTransformer from "..";

export default function IDENTIFIER_PATH(node: any, ctx: MySqlTransformer) {
    return `\`${node.data.map((identifier: any) => ctx.parse_node_string(identifier.value)).join("`.`")}\``;
}