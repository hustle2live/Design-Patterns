interface IHouseBuilding {
   add(el: IHousePart): void;
   show(): void;
}
// houseParts: IHousePart[];

interface IHousePart {
   name: string;
   ready: boolean;
}
class Basement implements IHousePart {
   ready: boolean;
   name: string;
   constructor() {
      this.name = 'Basement';
      this.ready = true;
   }
}
class Storey implements IHousePart {
   ready: boolean;
   name: string;
   constructor() {
      this.name = 'Storey';
      this.ready = true;
   }
}
class Roof implements IHousePart {
   ready: boolean;
   name: string;
   constructor() {
      this.name = 'Roof';
      this.ready = true;
   }
}
class Garage implements IHousePart {
   ready: boolean;
   name: string;
   constructor() {
      this.name = 'Garage';
      this.ready = true;
   }
}

abstract class AbstractHouse implements IHouseBuilding {
   houseParts: IHousePart[];
   constructor() {
      this.houseParts = [];
   }
   add(somePart: IHousePart): void {
      this.houseParts.push(somePart);
   }
   show() {
      console.log('houseParts: ', this.houseParts);
   }
}

class House extends AbstractHouse {}

export { IHousePart, Basement, Storey, Roof, Garage, House, AbstractHouse };
