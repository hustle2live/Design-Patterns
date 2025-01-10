import { House, Basement, Storey, Roof } from './house.js';
class AbstractBuilder {
    buildBasement() {
        return;
    }
    buildStorey() {
        return;
    }
    buildRoof() {
        return;
    }
    getResult() {
        return;
    }
}
class HouseBuilder extends AbstractBuilder {
    constructor() {
        super();
        this.house = new House();
    }
    buildBasement() {
        const item = new Basement();
        this.house.add(item);
        return item;
    }
    buildStorey() {
        const item = new Storey();
        this.house.add(item);
        return item;
    }
    buildRoof() {
        const item = new Roof();
        this.house.add(item);
        return item;
    }
    getResult() {
        return this.house;
    }
}
export { HouseBuilder, AbstractBuilder };
