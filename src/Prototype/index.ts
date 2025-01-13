import { v4 as uuidv4 } from 'uuid';

interface IPrototype {
   clone: () => IPrototype;
   name: string;
   father: IPrototype;
   id: string;
}

abstract class IProto {
   id: string;
   name: string;
   father: IPrototype = null;
   clone(): IPrototype {
      return;
   }
}

class ProductPrototype extends IProto implements IPrototype {
   id: string;
   name: string;
   father: IPrototype = null;

   constructor() {
      super();
      this.id = !this.id ? this.generateId() : null;
      this.name = 'customPrototype';
      this.clone = this.clone;
      this.generateId = this.generateId;
   }

   public override clone(): IProto {
      const newId = this.generateId();
      if (!newId) {
         return null;
      }
      const thisObject = this;
      return { ...this, id: newId, father: thisObject };
   }

   public generateId(): string {
      return uuidv4();
   }
}

const product = new ProductPrototype();
const clone1 = product.clone();
const clone2 = product.clone();

console.log('product: ', product?.father?.id);
console.log('clone1: ', clone1?.father?.id);
console.log('clone2: ', clone2?.father?.id);

const clone3 = clone2.clone();
const clone4 = clone2.clone();
const clone5 = clone2.clone();

console.log('clone3: ', clone3?.father?.id);
console.log('clone4: ', clone4?.father?.id);
console.log('clone5: ', clone5?.father?.id);
