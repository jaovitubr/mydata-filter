import MySqlTransformer from "..";

export default function MULTIPLICATION(node: any, ctx: MySqlTransformer) {
    return `${ctx.transform(node.left)} * ${ctx.transform(node.right)}`
}