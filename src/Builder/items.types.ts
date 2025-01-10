// export interface AbstractWater {
//    color: string;
//    sugar: number;
// }
// export interface AbstractBottle {
//    interact(water: AbstractWater): void;
// }

// export interface AbstractFactory {
//    createWater(): AbstractWater;
//    createBottle(): AbstractBottle;
// }

interface AbstractHouse {}

interface IBuilder {
   buildBasement(): void;
   buildStorey(): void;
   buildRoof(): void;
   getResult(): AbstractHouse;
}

abstract class AbstractBuilder implements IBuilder {
   house: AbstractHouse = null;

   buildBasement(): void {}
   buildStorey(): void {}
   buildRoof(): void {}

   getResult(): AbstractHouse {
      return this.house;
   }
}

interface IForeman {
   builder: AbstractBuilder;
   startToBuild(): void;
   checkResult(): void;
}

abstract class AbstractForeman implements IForeman {
   builder: AbstractBuilder;
   constructor(KindOfBuilder: AbstractBuilder) {
      this.builder = KindOfBuilder;
   }
   startToBuild(): void {}
   checkResult(): void {}
}

class HouseForeman implements AbstractForeman {
   builder: AbstractBuilder;

   public startToBuild(): void {
      this.builder.buildBasement();
      this.builder.buildStorey();
      this.builder.buildRoof();
   }
   public checkResult(): void {
      this.builder.getResult();
   }
}

class GarageForeman implements AbstractForeman {
   builder: AbstractBuilder;

   public startToBuild(): void {
      this.builder.buildStorey();
      this.builder.buildRoof();
      console.log('Garage is built.');
   }
   public checkResult(): void {
      this.builder.getResult();
   }
}

export { AbstractHouse, AbstractBuilder, IBuilder };
