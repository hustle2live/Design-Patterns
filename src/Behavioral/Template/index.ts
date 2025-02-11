enum Walls {
   north = 'north',
   south = 'south',
   west = 'west',
   east = 'east',
   floor = 'floor',
   ceil = 'ceil'
}

class Room {
   roomColors: Record<Walls, string> = {
      [Walls.north]: '',
      [Walls.south]: '',
      [Walls.west]: '',
      [Walls.east]: '',
      [Walls.floor]: '',
      [Walls.ceil]: ''
   };

   public paint(direction: Walls, color = 'white'): void {
      this.roomColors[direction] = color;
   }
}

abstract class DecorateRoom {
   protected room: Room;
   constructor() {
      this.room = new Room();
   }

   abstract decorate(element: Walls);
}

class LightBeigeRoom extends DecorateRoom {
   private name = 'Beige masters Bedroom';

   public decorate() {
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
   private name = 'Large Playing room';
   colorA: string;
   colorB: string;

   constructor(colorA: string, colorB: string) {
      super();
      this.colorA = colorA;
      this.colorB = colorB;
   }

   public decorate() {
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
