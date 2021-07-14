import MySqlTransformer from "..";

export default function IDENTIFIER(node: any, ctx: MySqlTransformer) {
    if (ctx.options.scope && !ctx.options.scope.some(scope => scope.length === 1 && scope[0] === node.value))
        throw new Error(`identifier \`${node.value}\` does not exist`);

    return `\`${node.value}\``
}