import MySqlTransformer from "..";

export default function OR(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} OR ${ctx.transform(node.right)}`
}