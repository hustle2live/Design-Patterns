interface AbstractClient {
   Run(): void;
}

// class Client implements AbstractClient {
//    water: AbstractWater;
//    bottle: AbstractBottle;

//    constructor(IFactory: AbstractFactory) {
//       console.log('Creating a new Client Factory...');
//       setTimeout(() => {
//          console.log(' ');
//       }, 2000);
//    }
// }

// const CocaColaPresident = new Client(new CocaColaFactory());
