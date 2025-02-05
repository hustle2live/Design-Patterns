class ContrAgent {
    constructor(some) {
        this.mediator = some;
    }
}
class Farmer extends ContrAgent {
    constructor(a) {
        super(a);
        this.name = 'farmer';
    }
    async raiseTomato() {
        console.log(`[${this.name}:] Tomatos raised 🍅🍅🍅`);
        const tomato = { name: 'tomato' };
        this.mediator.send(tomato, this);
        return tomato;
    }
}
class Cannery extends ContrAgent {
    constructor() {
        super(...arguments);
        this.name = 'cannery';
    }
    async makeKetchup(product) {
        console.log(`[${this.name}:] 🧑‍🍳 Ketchup - bellissimo coocked 🥫`);
        const ketchup = { name: 'ketchup' };
        this.mediator.send(ketchup, this);
        return ketchup;
    }
}
class Shop extends ContrAgent {
    constructor() {
        super(...arguments);
        this.name = 'shop';
    }
    async sellKetchup(product) {
        const result = { name: '$', amount: this.getCash() };
        console.log(`[${this.name}:] 🤠 product sold! for 💵 ${result.amount}${result.name} `);
        console.log(``);
        this.mediator.send(result, this);
        return result;
    }
    getCash() {
        const maxPrice = 500;
        const minPrice = 100;
        const gap = maxPrice - minPrice;
        return parseInt((Math.random() * gap + minPrice).toFixed(2), 10);
    }
}
class Mediator {
    constructor() {
        this.farmer = null;
        this.cannery = null;
        this.shop = null;
        this.income = [];
    }
    send(product, colleague) {
        this.checkAgent(colleague);
        if (colleague instanceof Farmer) {
            if (!this.cannery) {
                this.findAgent(new Cannery(this));
            }
            return this.cannery.makeKetchup(product);
        }
        if (colleague instanceof Cannery) {
            if (!this.shop) {
                this.findAgent(new Shop(this));
            }
            return this.shop.sellKetchup(product);
        }
        if (colleague instanceof Shop) {
            this.income.push(product.amount);
        }
    }
    findAgent(agent) {
        console.log(`[me:] searching new ${agent.name.toUpperCase()} ... `);
        this.checkAgent(agent);
    }
    checkAgent(collegue) {
        if (this[collegue.name] === null) {
            this.makeDealWith(collegue);
            console.log(`[me:] start dealing with ${collegue.name}`);
            console.log('');
        }
    }
    makeDealWith(collegue) {
        this[collegue.name] = collegue;
    }
    getSalary() {
        const income = this.income.reduce((summ, item, idx) => (summ += item), 0);
        console.log(``);
        console.log(`[me:] My income ${income}`);
        console.log(``);
    }
}
const enterpreneur = new Mediator();
const farmer = new Farmer(enterpreneur);
const cannery = new Cannery(enterpreneur);
const shop = new Shop(enterpreneur);
farmer.raiseTomato();
farmer.raiseTomato();
farmer.raiseTomato();
enterpreneur.getSalary();
