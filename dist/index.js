class Machine {
    constructor(_name) {
        this.instanceName = _name;
    }
    operation() {
        console.log('base instance ' + this.instanceName);
    }
}
class ProxyMachine {
    constructor(_name) {
        this.ogInstance = null;
        this.name = _name;
    }
    operation() {
        if (this.ogInstance === null) {
            this.ogInstance = new Machine('instance');
        }
        console.log(this.name + ' :: ');
        this.ogInstance.operation();
    }
}
const machine = new Machine('Baltimor equipment machine');
const proxy = new ProxyMachine('proxy ins');
machine.operation();
proxy.operation();
