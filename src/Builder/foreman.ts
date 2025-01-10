import { AbstractBuilder, HouseBuilder } from './builder.js';
import { AbstractHouse } from './house.js';

interface IForeman {
   startToBuild(): void;
   checkResult(): AbstractHouse;
}

abstract class AbstractForeman implements IForeman {
   builder: AbstractBuilder;
   constructor(KindOfBuilder: AbstractBuilder) {
      this.builder = KindOfBuilder;
   }
   startToBuild(): void {
      this.builder.buildBasement();
      this.builder.buildStorey();
      this.builder.buildRoof();
   }
   checkResult(): AbstractHouse {
      return this.builder.getResult();
   }
}

class HouseForeman extends AbstractForeman {
   name: string;
   builder: HouseBuilder;

   constructor(someBuilder: HouseBuilder) {
      super(someBuilder);
      this.name = 'House-Foreman';
   }
   public override checkResult(): AbstractHouse {
      const house: AbstractHouse = this.builder.getResult();
      this.notifyBoss(house.houseParts.length < 3);
      return house;
   }
   public notifyBoss(houseIsEmpty?: boolean): void {
      console.log('Builder said: ');
      houseIsEmpty ? console.log("- House isn't ready...") : console.log('- Building is ready - Wellcome to review!');
      this.builder.house.show();
      console.log(' ');
   }
}

class GarageForeman extends AbstractForeman {
   builder: HouseBuilder;
   name: string;

   constructor(someBuilder: HouseBuilder) {
      super(someBuilder);
      this.name = 'Garage-Foreman';
      this.builder = someBuilder;
   }
   public override startToBuild(): void {
      this.builder.buildStorey();
      this.builder.buildRoof();
      console.log('start to build Garage...');
   }
   public override checkResult(): AbstractHouse {
      console.log('Garage built.');
      this.builder.house.show();
      return this.builder.getResult();
   }
}

export { type AbstractForeman, HouseForeman, GarageForeman };
