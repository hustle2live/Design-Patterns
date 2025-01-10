class CocaColaWater {
    constructor(color = 'black', sugar = 0.45) {
        this.color = color;
        this.sugar = sugar;
    }
}
class CocaColaBottle {
    constructor() {
        this.liquid = null;
        this.isFull = false;
    }
    interact(someWater) {
        this.liquid = someWater;
        this.isFull = true;
    }
}
class PepsiColaWater {
    constructor(color = 'darkblue', sugar = 0.375) {
        this.color = color;
        this.sugar = sugar;
    }
}
class PepsiColaBottle {
    constructor() {
        this.isFull = false;
        this.liquid = null;
    }
    interact(water) {
        this.liquid = water;
        this.isFull = true;
    }
}
class CocaColaFactory {
    createWater() {
        return new CocaColaWater();
    }
    createBottle() {
        return new CocaColaBottle();
    }
}
class PepsiColaFactory {
    createWater() {
        return new PepsiColaWater();
    }
    createBottle() {
        return new PepsiColaBottle();
    }
}
export { CocaColaWater, CocaColaBottle, PepsiColaWater, PepsiColaBottle, CocaColaFactory, PepsiColaFactory };
