class AbstractForeman {
    constructor(KindOfBuilder) {
        this.builder = KindOfBuilder;
    }
    startToBuild() {
        this.builder.buildBasement();
        this.builder.buildStorey();
        this.builder.buildRoof();
    }
    checkResult() {
        return this.builder.getResult();
    }
}
class HouseForeman extends AbstractForeman {
    constructor(someBuilder) {
        super(someBuilder);
        this.name = 'House-Foreman';
    }
    checkResult() {
        const house = this.builder.getResult();
        this.notifyBoss(house.houseParts.length < 3);
        return house;
    }
    notifyBoss(houseIsEmpty) {
        console.log('Builder said: ');
        houseIsEmpty ? console.log("- House isn't ready...") : console.log('- Building is ready - Wellcome to review!');
        this.builder.house.show();
        console.log(' ');
    }
}
class GarageForeman extends AbstractForeman {
    constructor(someBuilder) {
        super(someBuilder);
        this.name = 'Garage-Foreman';
        this.builder = someBuilder;
    }
    startToBuild() {
        this.builder.buildStorey();
        this.builder.buildRoof();
        console.log('start to build Garage...');
    }
    checkResult() {
        console.log('Garage built.');
        this.builder.house.show();
        return this.builder.getResult();
    }
}
export { HouseForeman, GarageForeman };
