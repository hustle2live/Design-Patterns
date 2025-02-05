type IProduct = { name: string; amount?: number };

interface IMediator {
   send: (p: IProduct, c: IContrAgent) => Promise<IProduct> | void;
}

interface IContrAgent {
   mediator: IMediator;
   name: string;
}

type Agent = Farmer | Shop | Cannery;

abstract class ContrAgent implements IContrAgent {
   mediator: IMediator;
   name: string;

   constructor(some: IMediator) {
      this.mediator = some;
   }
}

class Farmer extends ContrAgent {
   name = 'farmer';
   constructor(a: IMediator) {
      super(a);
   }
   public async raiseTomato(): Promise<IProduct> {
      console.log(`[${this.name}:] Tomatos raised 🍅🍅🍅`);
      const tomato = { name: 'tomato' };
      this.mediator.send(tomato, this);
      return tomato;
   }
}
class Cannery extends ContrAgent {
   name = 'cannery';
   public async makeKetchup(product: IProduct): Promise<IProduct> {
      console.log(`[${this.name}:] 🧑‍🍳 Ketchup - bellissimo coocked 🥫`);
      const ketchup = { name: 'ketchup' };
      this.mediator.send(ketchup, this);
      return ketchup;
   }
}
class Shop extends ContrAgent {
   name = 'shop';
   public async sellKetchup(product: IProduct): Promise<IProduct> {
      const result = { name: '$', amount: this.getCash() };
      console.log(`[${this.name}:] 🤠 product sold! for 💵 ${result.amount}${result.name} `);
      console.log(``);
      this.mediator.send(result, this);
      return result;
   }
   private getCash(): number {
      const maxPrice = 500;
      const minPrice = 100;
      const gap = maxPrice - minPrice;
      return parseInt((Math.random() * gap + minPrice).toFixed(2), 10);
   }
}

class Mediator implements IMediator {
   private farmer: Farmer | null = null;
   private cannery: Cannery | null = null;
   private shop: Shop | null = null;
   private income: number[] = [];

   public send(product: IProduct, colleague: IContrAgent): Promise<IProduct> | void {
      this.checkAgent(colleague);

      if (colleague instanceof Farmer) {
         if (!this.cannery) {
            this.findAgent(new Cannery(this));
         }
         return this.cannery.makeKetchup(product);
      }

      if (colleague instanceof Cannery) {
         if (!this.shop) {
            this.findAgent(new Shop(this));
         }
         return this.shop.sellKetchup(product);
      }

      if (colleague instanceof Shop) {
         this.income.push(product.amount);
      }
   }

   private findAgent(agent: Agent): void {
      console.log(`[me:] searching new ${agent.name.toUpperCase()} ... `);
      this.checkAgent(agent);
   }

   private checkAgent(collegue: IContrAgent) {
      if (this[collegue.name] === null) {
         this.makeDealWith(collegue);
         console.log(`[me:] start dealing with ${collegue.name}`);
         console.log('');
      }
   }

   private makeDealWith(collegue: IContrAgent) {
      this[collegue.name] = collegue;
   }

   public getSalary(): void {
      const income = this.income.reduce((summ, item, idx) => (summ += item), 0);
      console.log(``);
      console.log(`[me:] My income is: $${income} 💰`);
      console.log(``);
   }
}

const enterpreneur = new Mediator();

const farmer = new Farmer(enterpreneur);
const cannery = new Cannery(enterpreneur);
const shop = new Shop(enterpreneur);

farmer.raiseTomato();
farmer.raiseTomato();
farmer.raiseTomato();

enterpreneur.getSalary();
