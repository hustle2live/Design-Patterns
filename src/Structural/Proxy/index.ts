interface TInstance {
   name: string;
}

interface MachineType {
   operation: () => void;
}

class Machine implements MachineType {
   private readonly instanceName: string;

   constructor(_name: string) {
      this.instanceName = _name;
   }

   operation(): void {
      console.log('base instance ' + this.instanceName);
   }
}

class ProxyMachine implements MachineType {
   ogInstance: MachineType | null = null;
   private name: string;

   constructor(_name: string) {
      this.name = _name;
   }

   public operation(): void {
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
