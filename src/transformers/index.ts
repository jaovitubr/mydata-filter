export { default as MySqlTransformer } from "./MySql";

export interface ITransformer {
    transform(rule: any): any;
}