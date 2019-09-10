export enum EntryType {Text, Html, Image}

abstract class Entry {
    abstract type(): EntryType
}

export class Store {
    size: number
    entries: Entry[]
    constructor(size: number) {
        this.entries = []
        this.size = size
        if (size < 10) {
            this.size = 10
        }
    }

    push(entry: Entry) {
        this.entries.unshift(entry)
    }
}
