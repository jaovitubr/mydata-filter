import MySqlTransformer from "..";

export default function LE(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} <= ${ctx.transform(node.right)}`
}