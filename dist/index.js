class Component {
    setParent(component) {
        this.parent = component;
    }
    getParent() {
        return this.parent;
    }
    add(component) { }
    remove(component) { }
    isComposite() {
        return false;
    }
}
class Leaf extends Component {
    constructor() {
        super(...arguments);
        this.name = 'Leaf';
    }
    operation() {
        return 'Simple Leaf';
    }
}
class Composite extends Component {
    constructor() {
        super(...arguments);
        this.children = [];
        this.name = 'Composite';
    }
    add(component) {
        this.children.push(component);
    }
    remove(component) {
        const itemIdx = this.children.indexOf(component);
        this.children.splice(itemIdx, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        const results = [];
        for (const child of this.children) {
            results.push(child.name);
        }
        return `Branch ${results.join(' + ')}`;
    }
}
const clientCode1 = (component) => {
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
function clientCode2(component1, component2) {
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
    console.log('');
}
console.log("Client: I don't need to check the components classes even when managing the tree:");
clientCode2(tree, simple);
