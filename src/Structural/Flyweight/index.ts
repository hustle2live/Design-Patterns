interface ProgramInterface {
   write: () => void;
   read: () => void;
   modify: () => void;
   delete: () => void;
   draw: () => void;
   log: () => void;
   send: () => void;
}

class Program implements ProgramInterface {
   private readonly name: string;
   constructor(name: string) {
      this.name = name;
   }
   write(): void {
      console.log(`${this.name} Writing`);
   }
   read(): void {
      console.log(`${this.name} Reading`);
   }
   modify(): void {
      console.log(`${this.name} Modifying`);
   }
   delete(): void {
      console.log(`${this.name} Deleting`);
   }
   draw(): void {
      console.log(`${this.name} Drawing`);
   }
   log(): void {
      console.log(`${this.name} Logging`);
   }
   send(): void {
      console.log(`${this.name} Sending`);
   }
}

class FlyweightFactory {
   protected static flyweights: Map<string, Program> = new Map();

   public static getFlyweight(name: string): Program {
      if (!FlyweightFactory.flyweights.has(name)) {
         console.log(`creating new Program : ${name}`);
         FlyweightFactory.flyweights.set(name, new Program(name));
      } else {
         console.log(`Re-using existing program - ${name}`);
      }
      return FlyweightFactory.flyweights.get(name);
   }
}

const drawer1 = FlyweightFactory.getFlyweight('Drawwer');
const drawer2 = FlyweightFactory.getFlyweight('Drawwer');

const logger1 = FlyweightFactory.getFlyweight('Logger1');
const logger2 = FlyweightFactory.getFlyweight('Logger2');

drawer1.draw();
drawer2.draw();

logger1.log();
logger2.log();
