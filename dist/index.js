class Implementor {
    operationImpl() {
        return 'Pencil';
    }
}
class ConcreteImplementorA extends Implementor {
    operationImpl() {
        return 'ext Marker';
    }
}
class ConcreteImplementorB extends Implementor {
    operationImpl() {
        return 'ext Gradient';
    }
}
class Abstraction {
    constructor(imp) {
        this.implementor = imp;
    }
    draw() {
        return '';
    }
    operation() {
        const res = this.implementor.operationImpl();
        return `baseOperation with ${res}`;
    }
}
class RefinedAbstraction extends Abstraction {
    operation() {
        const res = this.implementor.operationImpl();
        return `Refined implementation with ${res}`;
    }
}
const client = (abstraction) => {
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
