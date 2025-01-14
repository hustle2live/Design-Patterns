import { v4 as uuidv4 } from 'uuid';

interface IPrototype {
   clone: () => IPrototype;
   name: string;
   father?: IPrototype;
   id: string;
}

abstract class IProto implements IPrototype {
   id: string = '7f9273a8-b22d-4ea8-93ba-9772bd530001';
   name: string = 'IProto_object-instance';
   father?: IPrototype;
   abstract clone(): IPrototype;
}

class ProductPrototype extends IProto {
   id: string;
   name: string;
   father: IPrototype;

   constructor(name: string = 'ClonePrototype') {
      super();
      this.name = name;
   }

   public override clone(): IPrototype {
      const clone = new ProductPrototype(); // neccessary to copy methods. // And also good version: const clone = Object.create(Object.getPrototypeOf(this));
      Object.assign(clone, this);
      clone.id = this.generateId();
      clone.father = this;
      return clone;
   }

   private generateId(): string {
      return uuidv4();
   }
}

const product = new ProductPrototype();
const clone1 = product.clone();
const clone2 = product.clone();
const clone3 = clone2.clone();
const clone4 = clone2.clone();

console.log('product (new product) : ', product);
console.log('obj 1 (product.clone) : ', clone1);
console.log('obj 2 (product.clone) : ', clone2);
console.log('obj 3 (clone2.clone) : ', clone3);
console.log('obj 4 (clone2.clone) : ', clone4);
