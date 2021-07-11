const cache_store: ICache = [];
const cache_max_results = 1000;

function normalize(query: string) {
    return query.replace(/ /g, "");
}

export interface ICache {
    [key: string]: any
}

export function put(query: string, result: any) {
    const key = normalize(query);

    if (cache_store[key] != result) {
        if (cache_store.length >= cache_max_results) {
            cache_store.splice(0, 1);
            cache_store[key] = result;
        } else {
            cache_store[key] = result;
        }
    }
}

export function get(query: string) {
    const key = normalize(query);

    return cache_store[key];
}