import { AbstractBuilder, AbstractHouse } from './items.types';

class Builder implements AbstractBuilder {
   constructor() {}

   public buildBasement(): void {}
   public buildStorey(): void {}
   public buildRoof(): void {}
   public getResult(): AbstractHouse {
      return;
   }
}
