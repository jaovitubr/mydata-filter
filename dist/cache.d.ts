export interface ICache {
    [key: string]: any;
}
export declare function put(query: string, result: any): void;
export declare function get(query: string): any;
