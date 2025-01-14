import { v4 as uuidv4 } from 'uuid';
class IProto {
    constructor() {
        this.id = '7f9273a8-b22d-4ea8-93ba-9772bd530001';
        this.name = 'IProto_object-instance';
    }
}
class ProductPrototype extends IProto {
    constructor(name = 'ClonePrototype') {
        super();
        this.name = name;
    }
    clone() {
        const clone = new ProductPrototype(); // and also good Object.create(Object.getPrototypeOf(this));
        Object.assign(clone, this);
        clone.id = this.generateId();
        clone.father = this;
        return clone;
    }
    generateId() {
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
