import { ITransformer } from "..";
import MySqlTransformer from "../MySql";

export default class TypeOrmTransformer implements ITransformer {
    constructor(private options = {}) { }

    transform(rule: any): any {
        const mysql_transformer = new MySqlTransformer(this.options);
        return mysql_transformer.transform(rule);
    }
}