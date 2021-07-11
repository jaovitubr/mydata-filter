import MySqlTransformer from "../..";

export default function CONCAT(node: any, ctx: MySqlTransformer) {
    const possible_types = ["NUMBER", "STRING", "IDENTIFIER", "IDENTIFIER_PATH"];

    if (node.arguments.every((arg: any) => possible_types.includes(arg.type))) {
        return `CONCAT(${node.arguments.map((arg: any) => ctx.transform(arg)).join(", ")})`;
    } else {
        throw new Error(`invalid argument ${node.value} of ${node.function_name}`);
    }
}