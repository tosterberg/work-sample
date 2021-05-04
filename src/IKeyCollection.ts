/** Example of interfaces used as a base for the Multi Dictionary implementation */
export default interface IKeyCollection<T> {
    addKeyValue(key: string, value: T): string;
    containsKey(key: string): boolean;
    containsValue(key: string, value: T): boolean;
    size(): number;
    getValuesAtKey(key: string): T;
    removeKeyWithValues(key: string): T;
}
