const cache_store: ICache = [];
const cache_max_results = 1000;

export interface ICache {
    [key: string]: any
}

export function put(query: string, result: any) {
    if (cache_store[query] != result) {
        if (cache_store.length >= cache_max_results) {
            cache_store.splice(0, 1);
            cache_store[query] = result;
        } else {
            cache_store[query] = result;
        }
    }
}

export function get(query: string) {
    return cache_store[query];
}