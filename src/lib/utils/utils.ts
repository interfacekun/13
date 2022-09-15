export const getOrCreate = <K, T>(map: Map<K, T>, key: K, fn: (key: K) => T): T => {
    if (!map.has(key)) {
        map.set(key, fn(key));
    }
    return map.get(key);
}

export const recValues = <K extends (string | number | symbol), T>(obj: Record<K, T>): T[] => Object.values(obj);