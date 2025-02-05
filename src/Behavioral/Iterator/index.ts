// Патерн Ітератор: Простий спосіб перебирати елементи колекції

interface ICollection {
   count: () => number;
   get: (idx: number) => string | null;
   add: (item: string, idx?: number) => number | null;
}

class Collection implements ICollection {
   list: string[];
   constructor() {
      this.list = [];
   }

   public count(): number {
      return this.list.length;
   }

   public get(idx: number): string | null {
      return this.list[idx] ?? null;
   }

   public add(item: string, idx?: number): number | null {
      if (!idx || this.list[idx]) {
         const freeIndex = this.count();
         this.list[freeIndex] = item;
         return freeIndex;
      }
      this.list[idx] = item;
      return idx;
   }
}

interface IIterator {
   isNext: () => boolean;
   show: () => string | null;
   reset: () => void;
}

class IteratorWorker implements IIterator {
   private bank: Collection;
   private current = -1;

   constructor(collection: Collection) {
      this.bank = collection;
   }

   public isNext(): boolean {
      if (this.current < this.bank.count() - 1) {
         this.current++;
         return true;
      }
      return false;
   }

   public show(): string | null {
      return this.bank.get(this.current);
   }

   public reset(): void {
      this.current = -1;
   }
}

const bank = new Collection();

bank.add('100$');
bank.add('200$');
bank.add('50$');
bank.add('400$');

const worker = new IteratorWorker(bank);

const logger = (a: any) => console.log(a);

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
