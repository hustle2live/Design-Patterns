class Product {
}
class BowlingBall extends Product {
    constructor() {
        super();
        this.name = 'bowling ball';
        this.shape = 'round-shape';
    }
}
class RagbyBall extends Product {
    constructor() {
        super();
        this.name = 'ragby ball';
        this.shape = 'triangle-shape';
    }
}
var SportGoods;
(function (SportGoods) {
    SportGoods["ragby_ball"] = "ragby_ball";
    SportGoods["bowling_ball"] = "bowling_ball";
    SportGoods["socker_ball"] = "socker_ball";
    SportGoods["golf_ball"] = "golf_ball";
})(SportGoods || (SportGoods = {}));
class AbstractSportFactory {
    createProduct(type) {
        return null;
    }
}
class SportItemsFactory extends AbstractSportFactory {
    constructor() {
        super();
        this.fabricName = 'new fabric 1';
    }
    createProduct(type) {
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
