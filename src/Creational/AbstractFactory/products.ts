import { AbstractWater, AbstractBottle, AbstractFactory } from './items.types.js';

class CocaColaWater implements AbstractWater {
   color: string;
   sugar: number;
   constructor(color = 'black', sugar = 0.45) {
      this.color = color;
      this.sugar = sugar;
   }
}

class CocaColaBottle implements AbstractBottle {
   liquid: AbstractWater;
   isFull: boolean;
   constructor() {
      this.liquid = null;
      this.isFull = false;
   }
   interact(someWater: AbstractWater): void {
      this.liquid = someWater;
      this.isFull = true;
   }
}

class PepsiColaWater implements AbstractWater {
   color: string;
   sugar: number;
   constructor(color = 'darkblue', sugar = 0.375) {
      this.color = color;
      this.sugar = sugar;
   }
}

class PepsiColaBottle implements AbstractBottle {
   liquid: AbstractWater;
   isFull: boolean;

   constructor() {
      this.isFull = false;
      this.liquid = null;
   }

   public interact(water: AbstractWater) {
      this.liquid = water;
      this.isFull = true;
   }
}

class CocaColaFactory implements AbstractFactory {
   public createWater(): AbstractWater {
      return new CocaColaWater();
   }
   public createBottle(): AbstractBottle {
      return new CocaColaBottle();
   }
}

class PepsiColaFactory implements AbstractFactory {
   public createWater(): AbstractWater {
      return new PepsiColaWater();
   }
   public createBottle(): AbstractBottle {
      return new PepsiColaBottle();
   }
}

export {
   CocaColaWater,
   CocaColaBottle,
   PepsiColaWater,
   PepsiColaBottle,
   CocaColaFactory,
   PepsiColaFactory
};
