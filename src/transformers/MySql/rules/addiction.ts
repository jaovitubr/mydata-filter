import MySqlTransformer from "..";

export default function ADDICTION(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} + ${ctx.transform(node.right)}`
}