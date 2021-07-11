import MySqlTransformer from "..";

export default function GT(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} > ${ctx.transform(node.right)}`
}