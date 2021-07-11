import MySqlTransformer from "..";

export default function EQ(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} == ${ctx.transform(node.right)}`
}