import MySqlTransformer from "../..";

export default function CONCAT(node: any, ctx: MySqlTransformer) {
    return `CONCAT(${node.arguments.map((arg: any) => ctx.transform(arg)).join(", ")})`;
}