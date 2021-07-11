import MySqlTransformer from "..";

export default function AND(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} AND ${ctx.transform(node.right)}`
}