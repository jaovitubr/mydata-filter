"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.put = void 0;
const cache_store = [];
const cache_max_results = 1000;
function normalize(query) {
    return query.replace(/ /g, "");
}
function put(query, result) {
    const key = normalize(query);
    if (cache_store[key] != result) {
        if (cache_store.length >= cache_max_results) {
            cache_store.splice(0, 1);
            cache_store[key] = result;
        }
        else {
            cache_store[key] = result;
        }
    }
}
exports.put = put;
function get(query) {
    const key = normalize(query);
    return cache_store[key];
}
exports.get = get;
