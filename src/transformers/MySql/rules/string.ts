import MySqlTransformer from "..";

export default function STRING(node: any, ctx: MySqlTransformer) {
    return `'${ctx.mysql_escape_string(node.value)}'`;
}