class VisualComponent {
   public draw(): void {
      console.log('Drawing base component');
   }
}

class TextView extends VisualComponent {
   private name: string;
   constructor(_name: string) {
      super();
      this.name = _name;
   }
   public getName(): string {
      return this.name;
   }
   public draw(): void {
      console.log(`Drawing TextView: ${this.name}`);
   }
}

abstract class Decorator extends VisualComponent {
   protected component: VisualComponent;
   constructor(component: VisualComponent) {
      super();
      this.component = component;
   }

   public draw(): void {
      this.component.draw();
   }

   public operation(): void {
      console.log('this some operation');
   }
}

class ScrollDecorator extends Decorator {
   constructor(component: VisualComponent) {
      super(component);
   }

   public override draw(): void {
      super.draw();
      this.scroll();
   }

   private scroll(): void {
      console.log('Adding scroll functionality');
   }
}

class BorderDecorator extends Decorator {
   constructor(_component: VisualComponent) {
      super(_component);
   }

   public override draw(): void {
      super.draw();
      this.addBorder();
   }

   private addBorder(): void {
      console.log('Adding border decoration');
   }
}
