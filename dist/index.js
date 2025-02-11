class Room {
}
class House {
    constructor() {
        this.rooms = [];
    }
    add(el) {
        this.rooms.push(el);
    }
    accept(visitor) {
        console.log('Start house cleaning 🏠 ');
        for (const element of this.rooms) {
            element.accept(visitor);
        }
    }
}
class Garage extends Room {
    constructor() {
        super(...arguments);
        this.doorsOpened = true;
        this.name = 'garage';
    }
    accept(visitor) {
        visitor.totakeOutTheTrash(this);
    }
    openCloseDoors() {
        if (this.doorsOpened) {
            console.log('Do not forget to close doors!🚪');
        }
    }
    bringOutTrash() {
        this.openCloseDoors();
        console.log('The Garbage is taken out out ');
    }
}
class Kitchen extends Room {
    constructor() {
        super(...arguments);
        this.name = 'kitchen';
        this.dishLiquid = false;
    }
    accept(visitor) {
        visitor.toWashTheDishes(this);
    }
    setDishLiquid(mark) {
        this.dishLiquid = mark;
    }
    showError() {
        console.log('We have out of wash liquid 🚱💧. Need to add some.');
    }
    wash() {
        if (!this.dishLiquid) {
            this.showError();
        }
    }
}
class Hallway extends Room {
    constructor() {
        super(...arguments);
        this.name = 'hall';
    }
    accept(visitor) {
        visitor.toCleanTheFloor(this);
    }
    avoidShoes() {
        console.log('Take off shoes 👞👠');
    }
    washFloor() {
        console.log('🧹mobstick or swob is picked up');
    }
}
class ServiceCleaner {
}
class HouseCleaner extends ServiceCleaner {
    toCleanTheFloor(room) {
        console.log(`Started to clean: ${room.name}`);
        room.avoidShoes();
        room.washFloor();
        console.log('');
    }
    toWashTheDishes(room) {
        console.log(`Started to clean: ${room.name}`);
        room.wash();
        console.log('');
    }
    totakeOutTheTrash(room) {
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
