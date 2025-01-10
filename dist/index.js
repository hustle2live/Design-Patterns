import { CocaColaFactory } from './products.js';
class Client {
    constructor(IFactory) {
        console.log('Creating a new Client Factory...');
        setTimeout(() => {
            console.log(' ');
        }, 2000);
        setTimeout(() => {
            this.water = IFactory.createWater();
            console.log('- created CocaCola Water');
        }, 3500);
        setTimeout(() => {
            this.bottle = IFactory.createBottle();
            console.log('- created CocaCola Bottle');
            console.log(' ');
        }, 5000);
        console.log(' ');
        setTimeout(() => {
            console.log(this.bottle);
        }, 7000);
        setTimeout(() => {
            console.log(this.water);
        }, 8500);
    }
    Run() {
        console.log(' ');
        console.log(' __________________________ ');
        console.log(' ');
        setTimeout(() => {
            console.log('Started bottle.interact with water: ');
            console.log(' ');
        }, 1000);
        this.bottle.interact(this.water);
        setTimeout(() => {
            console.log(' __________________________ ');
            console.log(' ');
        }, 2500);
        setTimeout(() => {
            console.log('result: ', this.bottle);
            console.log(' ');
        }, 4500);
        setTimeout(() => {
            console.log(' ');
            console.log(' end. ');
        }, 6500);
    }
}
const CocaColaPresident = new Client(new CocaColaFactory());
setTimeout(() => {
    CocaColaPresident.Run();
}, 10000);
