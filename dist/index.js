class Strategy {
}
class Context {
    constructor(strategy) {
        this.state = [];
        this.strategy = strategy;
    }
    initState(array) {
        this.state = array;
    }
    doLogic() {
        const result = this.strategy.doAlgorithm(this.state);
        return result.join(', ');
    }
    changeStrategy(strategy) {
        this.strategy = strategy;
    }
}
class SortedDefault extends Strategy {
    doAlgorithm(data) {
        return [...data].sort((a, b) => {
            if (typeof a === 'number' || typeof b === 'number') {
                return Number(a) - Number(b);
            }
            if (typeof a === 'string' || typeof b === 'string') {
                return a.localeCompare(b);
            }
            return a - b;
        });
    }
}
class Reversed extends Strategy {
    doAlgorithm(data) {
        return [...data].reverse();
    }
}
const dataString = ['r', 'w', 'e', 'n', 'a', 'b', 'g'];
const dataNumbs = [7, 5, 3, 9, 12, 0, 4, 1];
const context = new Context(new SortedDefault());
context.initState(dataString);
console.log(context.doLogic());
context.changeStrategy(new Reversed());
console.log(context.doLogic());
console.log('--------------');
context.initState(dataNumbs);
console.log(context.doLogic());
context.changeStrategy(new SortedDefault());
console.log(context.doLogic());
