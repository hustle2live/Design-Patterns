abstract class Product {
   name: string;
   shape: string;
}

class BowlingBall extends Product {
   name: string;
   shape: string;
   constructor() {
      super();
      this.name = 'bowling ball';
      this.shape = 'round-shape';
   }
}

class RagbyBall extends Product {
   name: string;
   shape: string;
   constructor() {
      super();
      this.name = 'ragby ball';
      this.shape = 'triangle-shape';
   }
}

interface ISportFactory {
   createProduct: (type: SportGoods) => Product | null;
}

enum SportGoods {
   ragby_ball = 'ragby_ball',
   bowling_ball = 'bowling_ball',
   socker_ball = 'socker_ball',
   golf_ball = 'golf_ball'
}

abstract class AbstractSportFactory implements ISportFactory {
   createProduct(type: SportGoods): Product | null {
      return null;
   }
}

class SportItemsFactory extends AbstractSportFactory {
   fabricName: string;

   constructor() {
      super();
      this.fabricName = 'new fabric 1';
   }

   public override createProduct(type: SportGoods): Product | null {
      switch (type) {
         case SportGoods.bowling_ball:
            return new BowlingBall();
         case SportGoods.ragby_ball:
            return new RagbyBall();
         default:
            return null;
      }
   }
}

const mySportFabric = new SportItemsFactory();

console.log('fabricName : ' + mySportFabric.fabricName);

const golfBall = mySportFabric.createProduct(SportGoods.golf_ball);
const ragbyBall = mySportFabric.createProduct(SportGoods.ragby_ball);

console.log('golfBall: ' + golfBall?.name + ' ' + golfBall?.shape);
console.log('ragbyBall: ' + ragbyBall?.name + ' ' + ragbyBall?.shape);
