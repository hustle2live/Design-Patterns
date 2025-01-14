// ................................................................... //
// метод Singleton з можливістю зміни кількості екземплярів класу
class Singleton {
    constructor() {
        console.log('creation successfull...');
    }
    static init() {
        if (Singleton.instanceCount >= Singleton.instanceLimit) {
            console.log('creation denied...');
            return Singleton.rootInstance;
        }
        const newInstance = new Singleton();
        const counter = Singleton.instanceCount + 1;
        Singleton.setCount(counter);
        Singleton.notify(counter);
        newInstance.name = 'instance № ' + counter;
        if (!Singleton.rootInstance) {
            newInstance.name = 'Root ' + newInstance.name;
            Singleton.rootInstance = newInstance;
        }
        return newInstance;
    }
    static setCount(num) {
        Singleton.instanceCount = num;
    }
    static setLimit(num) {
        Singleton.instanceLimit = num;
        console.log(' ');
        console.log('limit changed to - ' + Singleton.instanceLimit);
        console.log(' ');
    }
    static notify(counter) {
        console.log(Singleton.instanceCount < Singleton.instanceLimit);
        console.log('Singleton instance created');
        console.log('instances created: ' + Singleton.instanceCount);
        console.log('counter - ' + counter);
        console.log('limit - ' + Singleton.instanceLimit);
        console.log('limit is riched - ', Singleton.instanceCount >= Singleton.instanceLimit);
        console.log(' ');
        console.log(' ');
    }
}
Singleton.rootInstance = null;
Singleton.instanceCount = 0;
Singleton.instanceLimit = 1;
const itemFirst = Singleton.init();
const itemSecond = Singleton.init(); // буде відмовлено
Singleton.setLimit(3);
const itemThird = Singleton.init();
const itemFourth = Singleton.init();
const itemFifth = Singleton.init();
const itemSixth = Singleton.init();
console.log(itemFirst);
console.log(itemSecond);
console.log(itemThird);
console.log(itemFourth);
console.log(itemFifth);
console.log(itemSixth);
