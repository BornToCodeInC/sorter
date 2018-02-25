class Sorter {
    constructor() {
        this.store = [];
        this.compareFunc = (a,b) => {return a-b;};
    }

    add(element) {
        this.store.push(element);
    }

    at(index) {
        return this.store[index];
    }
    
    get length() {
        return this.store.length;
    }

    toArray() {
        return this.store;
    }

    sort(indices) {
        let temp = [];
        let len = indices.length;
        for(let i = 0; i< len; i++){
            temp.push(this.store[indices[i]]);
        }
        temp.sort(this.compareFunc);
        indices.sort((a,b)=>{return a-b;});
        for(let i = 0; i< len; i++){
            this.store[indices[i]] = temp[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunc = compareFunction;
    }
}

module.exports = Sorter;
