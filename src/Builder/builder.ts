import { House, AbstractHouse, Basement, Storey, Roof } from './house.js';

interface IBuilder {
   buildBasement(): Basement;
   buildStorey(): Storey;
   buildRoof(): Roof;
   getResult(): AbstractHouse;
}

abstract class AbstractBuilder implements IBuilder {
   buildBasement(): Basement {
      return;
   }
   buildStorey(): Storey {
      return;
   }
   buildRoof(): Roof {
      return;
   }
   getResult(): AbstractHouse {
      return;
   }
}

class HouseBuilder extends AbstractBuilder {
   house: AbstractHouse;
   constructor() {
      super();
      this.house = new House();
   }
   public override buildBasement(): Basement {
      const item = new Basement();
      this.house.add(item);
      return item;
   }
   public override buildStorey(): Storey {
      const item = new Storey();
      this.house.add(item);
      return item;
   }
   public override buildRoof(): Roof {
      const item = new Roof();
      this.house.add(item);
      return item;
   }
   public override getResult(): AbstractHouse {
      return this.house;
   }
}

export { HouseBuilder, AbstractBuilder };
