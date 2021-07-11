export { default as TypeOrmTransformer } from "./TypeOrm";

export interface ITransformer {
    transform(rule: any): any;
}