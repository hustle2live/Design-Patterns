var Walls;
(function (Walls) {
    Walls["north"] = "north";
    Walls["south"] = "south";
    Walls["west"] = "west";
    Walls["east"] = "east";
    Walls["floor"] = "floor";
    Walls["ceil"] = "ceil";
})(Walls || (Walls = {}));
class Room {
    constructor() {
        this.roomColors = {
            [Walls.north]: '',
            [Walls.south]: '',
            [Walls.west]: '',
            [Walls.east]: '',
            [Walls.floor]: '',
            [Walls.ceil]: ''
        };
    }
    paint(direction, color = 'white') {
        this.roomColors[direction] = color;
    }
}
class DecorateRoom {
    constructor() {
        this.room = new Room();
    }
}
class LightBeigeRoom extends DecorateRoom {
    constructor() {
        super(...arguments);
        this.name = 'Beige masters Bedroom';
    }
    decorate() {
        const beige = 'beige';
        this.room.paint(Walls.east, beige);
        this.room.paint(Walls.west, beige);
        this.room.paint(Walls.north, beige);
        this.room.paint(Walls.south, beige);
        this.room.paint(Walls.ceil, beige);
        this.room.paint(Walls.floor, 'light-brown');
        console.log(this.name + ' - painting 🖌🎨:');
        console.log(this.room.roomColors);
        console.log('');
    }
}
class TwoColoredRoom extends DecorateRoom {
    constructor(colorA, colorB) {
        super();
        this.name = 'Large Playing room';
        this.colorA = colorA;
        this.colorB = colorB;
    }
    decorate() {
        this.room.paint(Walls.east, this.colorA);
        this.room.paint(Walls.west, this.colorA);
        this.room.paint(Walls.north, this.colorB);
        this.room.paint(Walls.south, this.colorB);
        this.room.paint(Walls.ceil, 'white');
        this.room.paint(Walls.floor, 'abstract dark-blue');
        console.log(this.name + ' - painting 🖌🎨:');
        console.log(this.room.roomColors);
        console.log('');
    }
}
const room1 = new LightBeigeRoom();
room1.decorate();
const room2 = new TwoColoredRoom('light-sky-blue', 'violet');
room2.decorate();
