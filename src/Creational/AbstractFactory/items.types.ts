export interface AbstractWater {
   color: string;
   sugar: number;
}
export interface AbstractBottle {
   interact(water: AbstractWater): void;
}

export interface AbstractFactory {
   createWater(): AbstractWater;
   createBottle(): AbstractBottle;
}
