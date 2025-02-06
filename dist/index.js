class Professor {
    constructor(state) {
        this.state = state;
    }
    createMemento() {
        return new Memento(this.state);
    }
    restore(memo) {
        this.state = memo.getState();
    }
    getState() {
        console.log(this.state);
        return this.state;
    }
}
class Memento {
    constructor(state) {
        this.state = null;
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
class CareHandler {
    constructor(instance) {
        this.mementos = [];
        this.professor = instance;
    }
    backup() {
        this.mementos.push(this.professor.createMemento());
    }
    undo() {
        if (this.mementos.length === 0) {
            return;
        }
        const memo = this.mementos.pop();
        this.professor.restore(memo);
    }
    watch() {
        console.log('');
        console.log(this.mementos);
    }
}
const professor = new Professor('Init Professor');
const handler = new CareHandler(professor);
handler.backup();
professor.getState();
professor.state = 'Home clothes';
handler.backup();
professor.getState();
professor.state = 'Work clothes';
// handler.backup();
professor.getState();
handler.watch();
