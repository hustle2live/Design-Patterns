// Патерн Ітератор: Простий спосіб перебирати елементи колекції
class Collection {
    constructor() {
        this.list = [];
    }
    count() {
        return this.list.length;
    }
    get(idx) {
        return this.list[idx] ?? null;
    }
    add(item, idx) {
        if (!idx || this.list[idx]) {
            const freeIndex = this.count();
            this.list[freeIndex] = item;
            return freeIndex;
        }
        this.list[idx] = item;
        return idx;
    }
}
class IteratorWorker {
    constructor(collection) {
        this.current = -1;
        this.bank = collection;
    }
    isNext() {
        if (this.current < this.bank.count() - 1) {
            this.current++;
            return true;
        }
        return false;
    }
    show() {
        return this.bank.get(this.current);
    }
    reset() {
        this.current = -1;
    }
}
const bank = new Collection();
bank.add('100$');
bank.add('200$');
bank.add('50$');
bank.add('400$');
const worker = new IteratorWorker(bank);
const logger = (a) => console.log(a);
logger(worker.isNext());
logger(worker.show());
logger(worker.isNext());
logger(worker.show());
logger(worker.isNext());
logger(worker.show());
logger(worker.isNext());
logger(worker.show());
logger(worker.isNext());
logger(worker.show());
