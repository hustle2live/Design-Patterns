import { HouseBuilder } from './builder.js';
import { GarageForeman, HouseForeman } from './foreman.js';

const ConcreteBuilder1 = new HouseBuilder();
const Director = new HouseForeman(ConcreteBuilder1);

Director.checkResult();

Director.startToBuild();

setTimeout(() => {
   Director.checkResult();
}, 3000);

setTimeout(() => {
   const Director2 = new GarageForeman(ConcreteBuilder1);
   Director2.startToBuild();
   Director2.checkResult();
}, 5000);
