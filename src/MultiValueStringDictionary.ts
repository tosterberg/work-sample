import IKeyCollection from './IKeyCollection';

export default class MultiValueStringDictionary implements IKeyCollection<string> {

    private items: { [index: string]: Array<string>} = {};
    private count: number = 0;

    /** Return strings for formating to match work sample */
    public ALREADYEXISTS: string = ') ERROR, value already exists';
    public VALUEDOESNOTEXIST: string = ') ERROR, value does not exist';
    public KEYDOESNOTEXIST: string = ') ERROR, key does not exist.';
    public NUMBEREDLIST: string = ') ';
    public ADDED: string = ') Added';
    public REMOVED: string = ') Removed';
    public CLEARED: string = ') Cleared';
    public TRUE: string = ') True';
    public FALSE: string = ') False';
    public EMPTY: string = '(empty set)';

    /** Add a key value pair and return logging message */
    addKeyValue(key: string, value: string): string {
        if (this.containsValue(key, value)){
            /** Duplicate Key/Value Exists */
            return this.ALREADYEXISTS;
        } else if(this.items[key] !== undefined && !this.containsValue(key, value)){
            /** Key exists with values and we have a new value to add */
            this.items[key].push(value);
        } else {
            /** Create Key with a new array containing value */
            this.items[key] = new Array(value);
        }
        this.count++;

        return this.ADDED;
    }

    /** Reset dictionary to empty and return logging message */
    clearDictionary(): string{
        this.items = {};
        this.count = 0;
        return this.CLEARED;
    }

    containsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    containsValue(key: string, value: string): boolean {
        if(this.containsKey(key)){
            if(this.items[key].indexOf(value) !== undefined &&
                this.items[key].indexOf(value) !== -1){
                return true;
            }
        }
        return false;
    }

    /** Check existance of key and return log message */
    doesKeyExist(key: string): String{
        if(this.containsKey(key)){
            return this.TRUE;
        } else {
            return this.FALSE;
        }
    }

    /** Check existance of key/value pair and return log message */
    doesValueExist(key: string, value: string): String{
        if(this.containsValue(key, value)){
            return this.TRUE;
        } else {
            return this.FALSE;
        }
    }

    getValuesAtKey(key: string): string {
        return this.items[key].toString();
    }

    getAllKeysAndValues(): any {
        return this.items;
    }

    /** Log all keys to console */
    printAllKeys(): void {
        let keyCounter = 1;

        if(this.count === 0){
            console.log(this.EMPTY);
        } else {
            for (let property in this.items) {
                if (this.items.hasOwnProperty(property)) {
                    console.log(keyCounter+this.NUMBEREDLIST+property);
                    keyCounter++;
                }
            }
        }
    }

    /** Log all values under one key to console */
    printMemberValues(key: string): void {
        let keyCounter = 1;

        if(this.containsKey(key)){
            for(let i = 0; i < this.items[key].length; i++) {
                console.log(keyCounter+this.NUMBEREDLIST+this.items[key][i]);
                keyCounter++;
            }
        } else {
            console.log(this.KEYDOESNOTEXIST);
        }
    }

    /** Log all values(no keys) to console */
    printAllMembersValues(): void {
        let keyCounter = 1;

        if(this.count === 0){
            console.log(this.EMPTY);
        } else {
            for (let property in this.items) {
                for(let i = 0; i < this.items[property].length; i++) {
                    console.log(keyCounter+this.NUMBEREDLIST+this.items[property][i]);
                    keyCounter++;
                }
            }
        }
    }

    /** Log all keys and values as strings to console */
    printAllKeysAndValues(): void {
        let keyCounter = 1;

        if(this.count === 0){
            console.log(this.EMPTY);
        } else {
            for (let property in this.items) {
                for(let i = 0; i < this.items[property].length; i++) {
                    console.log(keyCounter+this.NUMBEREDLIST+property+': '+this.items[property][i]);
                    keyCounter++;
                }
            }
        }
    }

    removeKeyIfEmpty(key: string): void{
        if(this.items[key].length < 1){
            this.removeKeyWithValues(key);
        }
    }

    removeValueAtKey(key: string, value: string): string{
        if(this.containsValue(key, value)){
            /** Arrow function with filter returns a new array without value in it */
            this.items[key] = this.items[key].filter((test: string) => {
                return test !== value;
            });
            this.count--;
            this.removeKeyIfEmpty(key);
            return this.REMOVED;
        } else {
            return this.VALUEDOESNOTEXIST;
        }

    }

    removeKeyWithValues(key: string): string {
        if(this.containsKey(key)){
            // Updating count by removing all values associated with key being deleted.
            this.count -= this.items[key].length;
            delete this.items[key];
            return this.REMOVED;
        } else {
            return this.KEYDOESNOTEXIST;
        }
    }

    size(): number {
        return this.count;
    }
}
