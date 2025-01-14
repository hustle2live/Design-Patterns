// ................................................................... //
// метод Singleton з можливістю зміни кількості екземплярів класу

interface ISingleton {
   name: string;
}

class Singleton implements ISingleton {
   static rootInstance: Singleton | null = null;
   static instanceCount: number = 0;
   static instanceLimit = 1;
   name: string;

   private constructor() {
      console.log('creation successfull...');
   }

   public static init(): Singleton | void {
      if (Singleton.instanceCount >= Singleton.instanceLimit) {
         console.log('creation denied...');
         return Singleton.rootInstance;
      }

      const newInstance = new Singleton();
      const counter = Singleton.instanceCount + 1;
      Singleton.setCount(counter);
      Singleton.notify(counter);
      newInstance.name = 'instance № ' + counter;

      if (!Singleton.rootInstance) {
         newInstance.name = 'Root ' + newInstance.name;
         Singleton.rootInstance = newInstance;
      }

      return newInstance;
   }

   public static setCount(num: number): void {
      Singleton.instanceCount = num;
   }

   public static setLimit(num: number): void {
      Singleton.instanceLimit = num;
      console.log(' ');
      console.log('limit changed to - ' + Singleton.instanceLimit);
      console.log(' ');
   }

   public static notify(counter: number): void {
      console.log(Singleton.instanceCount < Singleton.instanceLimit);
      console.log('Singleton instance created');
      console.log('instances created: ' + Singleton.instanceCount);
      console.log('counter - ' + counter);
      console.log('limit - ' + Singleton.instanceLimit);
      console.log('limit is riched - ', Singleton.instanceCount >= Singleton.instanceLimit);
      console.log(' ');
      console.log(' ');
   }
}

const itemFirst = Singleton.init();
const itemSecond = Singleton.init(); // буде відмовлено
Singleton.setLimit(3);
const itemThird = Singleton.init();
const itemFourth = Singleton.init();
const itemFifth = Singleton.init();
const itemSixth = Singleton.init();

console.log(itemFirst);
console.log(itemSecond);
console.log(itemThird);
console.log(itemFourth);
console.log(itemFifth);
console.log(itemSixth);



// спрощений приклад того, як можна реалізувати класичний Singleton:

class ProductSingleton {
  private static instance: ProductSingleton | null = null;
  private constructor() {
    // Приватний конструктор запобігає створенню нових екземплярів
  }

  public static getInstance(): ProductSingleton {
    if (!ProductSingleton.instance) {
      ProductSingleton.instance = new ProductSingleton();
    }
    return ProductSingleton.instance;
  }

  public someMethod(): void {
    console.log("Singleton instance method called");
  }
}