class Basement {
    constructor() {
        this.name = 'Basement';
        this.ready = true;
    }
}
class Storey {
    constructor() {
        this.name = 'Storey';
        this.ready = true;
    }
}
class Roof {
    constructor() {
        this.name = 'Roof';
        this.ready = true;
    }
}
class Garage {
    constructor() {
        this.name = 'Garage';
        this.ready = true;
    }
}
class AbstractHouse {
    constructor() {
        this.houseParts = [];
    }
    add(somePart) {
        this.houseParts.push(somePart);
    }
    show() {
        console.log('houseParts: ', this.houseParts);
    }
}
class House extends AbstractHouse {
}
export { Basement, Storey, Roof, Garage, House, AbstractHouse };
