import MySqlTransformer from "..";

export default function ENDS_WITH(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} LIKE CONCAT("%", ${ctx.transform(node.right)})`
}