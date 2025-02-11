abstract class Room {
   public abstract accept(visitor: ServiceCleaner): void;
}

class House {
   private rooms: Room[] = [];

   add(el: Room): void {
      this.rooms.push(el);
   }

   accept(visitor: ServiceCleaner): void {
      console.log('Start house cleaning 🏠 ');
      for (const element of this.rooms) {
         element.accept(visitor);
      }
   }
}

class Garage extends Room {
   private doorsOpened = true;
   public name = 'garage';

   public accept(visitor: ServiceCleaner): void {
      visitor.totakeOutTheTrash(this);
   }

   openCloseDoors(): void {
      if (this.doorsOpened) {
         console.log('Do not forget to close doors!🚪');
      }
   }

   bringOutTrash(): void {
      this.openCloseDoors();
      console.log('The Garbage is taken out out ');
   }
}

class Kitchen extends Room {
   public name = 'kitchen';
   public accept(visitor: ServiceCleaner): void {
      visitor.toWashTheDishes(this);
   }

   dishLiquid: boolean = false;

   setDishLiquid(mark: boolean): void {
      this.dishLiquid = mark;
   }

   private showError(): void {
      console.log('We have out of wash liquid 🚱💧. Need to add some.');
   }

   wash(): void {
      if (!this.dishLiquid) {
         this.showError();
      }
   }
}

class Hallway extends Room {
   public name = 'hall';
   public accept(visitor: ServiceCleaner): void {
      visitor.toCleanTheFloor(this);
   }

   public avoidShoes(): void {
      console.log('Take off shoes 👞👠');
   }

   public washFloor(): void {
      console.log('🧹mobstick or swob is picked up');
   }
}

abstract class ServiceCleaner {
   public abstract toCleanTheFloor(room: Hallway): void;
   public abstract toWashTheDishes(room: Kitchen): void;
   public abstract totakeOutTheTrash(room: Garage): void;
}

class HouseCleaner extends ServiceCleaner {
   public toCleanTheFloor(room: Hallway): void {
      console.log(`Started to clean: ${room.name}`);
      room.avoidShoes();
      room.washFloor();
      console.log('');
   }

   public toWashTheDishes(room: Kitchen): void {
      console.log(`Started to clean: ${room.name}`);
      room.wash();
      console.log('');
   }

   public totakeOutTheTrash(room: Garage): void {
      console.log(`Started to clean: ${room.name}`);
      room.openCloseDoors();
      console.log('');
   }
}

const house = new House();

house.add(new Garage());
house.add(new Kitchen());
house.add(new Hallway());

const cleaner = new HouseCleaner();

house.accept(cleaner);
