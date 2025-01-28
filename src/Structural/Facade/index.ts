interface System {
   operation: () => string;
}

class SubSystemA implements System {
   public operation(): string {
      return 'operation A';
   }
}

class SubSystemB implements System {
   public operation(): string {
      return 'operation B';
   }
}

class SubSystemC implements System {
   public operation(): string {
      return 'operation C';
   }
}

interface FacadeInterface {
   operationAB: () => string;
   operationBC: () => string;
   operationAC?: () => string;
}

class Facade implements FacadeInterface {
   systemA: System;
   systemB: System;
   systemC: System;

   constructor(_systemA: System, _systemB: System, _systemC: System) {
      this.systemA = _systemA;
      this.systemB = _systemB;
      this.systemC = _systemC;
   }

   public operationAB(): string {
      const resultA = this.systemA.operation();
      const resultB = this.systemB.operation();

      return this.log([resultA, resultB].join(' + '));
   }

   private log(str: string): string {
      return 'RESULT: '.concat(str);
   }

   public operationBC(): string {
      return this.systemB.operation().concat(this.systemC.operation());
   }
}

const [a, b, c] = [new SubSystemA(), new SubSystemB(), new SubSystemC()];

const facade = new Facade(a, b, c);

console.log('facade.operationAB : ');
console.log(facade.operationAB());
