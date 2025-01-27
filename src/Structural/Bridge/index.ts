class Implementor {
   operationImpl(): string {
      return 'Pencil';
   }
}

class ConcreteImplementorA extends Implementor {
   public override operationImpl(): string {
      return 'ext Marker';
   }
}

class ConcreteImplementorB extends Implementor {
   public override operationImpl(): string {
      return 'ext Gradient';
   }
}

class Abstraction {
   protected implementor: Implementor;
   constructor(imp: Implementor) {
      this.implementor = imp;
   }
   draw(): string {
      return '';
   }
   operation(): string {
      const res = this.implementor.operationImpl();
      return `baseOperation with ${res}`;
   }
}

class RefinedAbstraction extends Abstraction {
   public override operation(): string {
      const res = this.implementor.operationImpl();
      return `Refined implementation with ${res}`;
   }
}

const client = (abstraction: Abstraction) => {
   console.log(abstraction.operation());
};

const implementation = new Implementor();
const abstraction = new Abstraction(implementation);

client(abstraction);

const markerImplementor = new ConcreteImplementorA();
const gradientImplementor = new ConcreteImplementorB();

const abstractionSecond = new RefinedAbstraction(markerImplementor);
const abstractionThird = new RefinedAbstraction(gradientImplementor);

client(abstractionSecond);
client(abstractionThird);