"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntryType;
(function (EntryType) {
    EntryType[EntryType["Text"] = 0] = "Text";
    EntryType[EntryType["Html"] = 1] = "Html";
    EntryType[EntryType["Image"] = 2] = "Image";
})(EntryType = exports.EntryType || (exports.EntryType = {}));
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());
var Store = /** @class */ (function () {
    function Store(size) {
        this.entries = [];
        this.size = size;
        if (size < 10) {
            this.size = 10;
        }
    }
    Store.prototype.push = function (entry) {
        this.entries.unshift(entry);
    };
    return Store;
}());
exports.Store = Store;
