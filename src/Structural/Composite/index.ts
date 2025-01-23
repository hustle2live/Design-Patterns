abstract class Component {
   protected parent: Component | null;
   abstract name: string;

   public setParent(component: Component | null): void {
      this.parent = component;
   }

   public getParent(): Component | null {
      return this.parent;
   }

   public add(component: Component): void {}

   public remove(component: Component): void {}

   public isComposite(): boolean {
      return false;
   }

   public abstract operation(): string;
}

class Leaf extends Component {
   readonly name: string = 'Leaf';
   public operation(): string {
      return 'Simple Leaf';
   }
}

class Composite extends Component {
   protected children: Component[] = [];
   readonly name: string = 'Composite';

   public add(component: Component): void {
      this.children.push(component);
   }

   public remove(component: Component): void {
      const itemIdx = this.children.indexOf(component);
      this.children.splice(itemIdx, 1);

      component.setParent(null);
   }

   public isComposite(): boolean {
      return true;
   }

   public operation(): string {
      const results: string[] = [];
      for (const child of this.children) {
         results.push(child.name);
      }
      return `Branch ${results.join(' + ')}`;
   }
}

const clientCode1 = (component: Component): void => {
   console.log(`Result: ${component.operation()}`);
   console.log('');
};

const simple = new Leaf();

clientCode1(simple);

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

clientCode1(branch1);

console.log("Client: Now I've got a composite tree:");

clientCode1(tree);

function clientCode2(component1: Component, component2: Component) {
   if (component1.isComposite()) {
      component1.add(component2);
   }
   console.log(`RESULT: ${component1.operation()}`);
   console.log('');
}

console.log("Client: I don't need to check the components classes even when managing the tree:");
clientCode2(tree, simple);
