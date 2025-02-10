abstract class Strategy<T> {
   abstract doAlgorithm(obj: T[]): T[];
}

class Context<T> {
   private strategy: Strategy<T>;
   state: T[] = [];
   constructor(strategy: Strategy<T>) {
      this.strategy = strategy;
   }

   initState(array: T[]) {
      this.state = array;
   }

   public doLogic(): string {
      const result = this.strategy.doAlgorithm(this.state);
      return result.join(', ');
   }

   public changeStrategy(strategy: Strategy<T>): void {
      this.strategy = strategy;
   }
}

type ElemType = string | number;

class SortedDefault extends Strategy<ElemType> {
   doAlgorithm(data: ElemType[]): ElemType[] {
      return [...data].sort((a: ElemType, b: ElemType) => {
         if (typeof a === 'number' || typeof b === 'number') {
            return Number(a) - Number(b);
         }
         if (typeof a === 'string' || typeof b === 'string') {
            return a.localeCompare(b);
         }
         return a - b;
      });
   }
}

class Reversed extends Strategy<ElemType> {
   doAlgorithm(data: ElemType[]): ElemType[] {
      return [...data].reverse();
   }
}

const dataString = ['r', 'w', 'e', 'n', 'a', 'b', 'g'];
const dataNumbs = [7, 5, 3, 9, 12, 0, 4, 1];

const context: Context<ElemType> = new Context(new SortedDefault());

context.initState(dataString);
console.log(context.doLogic());
context.changeStrategy(new Reversed());
console.log(context.doLogic());

console.log('--------------');

context.initState(dataNumbs);
console.log(context.doLogic());
context.changeStrategy(new SortedDefault());
console.log(context.doLogic());
