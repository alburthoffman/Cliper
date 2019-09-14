function Store(cap) {
    let items = [];
    let capacity = 0;

    if (cap == undefined || cap < 1) {
        capacity = 1;
    } else {
        capacity = cap;
    }

    this.push = function(item) {
        if (isFull()) {
            items.shift()
        }
        items.push(item)
    }

    isFull = function() {
        return items.length == capacity;
    }

    this.foreach = function(cb) {
        items.forEach(cb)
    }

    this.toString = function() {
        return String(items);
    }

    this.toJson = function() {
        
    }
}

exports.Store = Store