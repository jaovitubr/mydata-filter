import MySqlTransformer from "..";

export default function PARENTHESES(node: any, ctx: MySqlTransformer) {
    return `(${ctx.transform(node.data)})`
}