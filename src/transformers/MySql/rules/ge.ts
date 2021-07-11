import MySqlTransformer from "..";

export default function GE(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} >= ${ctx.transform(node.right)}`
}