import MySqlTransformer from "..";

export default function IDENTIFIER_PATH(node: any, ctx: MySqlTransformer) {
    const identifier = `\`${node.data.map((identifier: any) => identifier.value).join("`.`")}\``;

    if (ctx.options.scope && !ctx.options.scope.some(scope => {
        return scope.length === node.data.length && scope.every((_scope, _index) => _scope === node.data[_index]?.value);
    })) throw new Error(`identifier ${identifier} does not exist`);

    return identifier;
}