class Receiver {
    constructor(a) {
        this.payload = a;
    }
    action(payload) {
        console.log('Passed to receiver :: ' + payload);
    }
}
class Command {
    constructor(payload, receiver) {
        this.payload = payload;
        this.receiver = receiver || null;
    }
}
class SimpleCommand extends Command {
    exec() {
        console.log(`I can do this simple ${this.payload}`);
    }
}
class ComplexCommand {
    constructor(receiver, payload) {
        this.receiver = receiver;
        this.payload = payload;
    }
    exec() {
        this.receiver.action(this.payload);
    }
}
class Invoker {
    constructor() {
        this.taskName = null;
        this.isStarted = false;
        this.start = null;
        this.finish = null;
    }
    setStart(command) {
        this.start = command;
    }
    setFinish(command) {
        this.finish = command;
    }
    doSomething(payload) {
        console.log('launch (~)');
        this.taskName = payload;
        console.log(this.taskName);
        if (this.start) {
            this.isStarted = true;
            this.start.exec();
        }
        if (this.finish) {
            this.finish.exec();
        }
        this.stopDo();
    }
    stopDo() {
        this.isStarted = false;
        console.log('turn off (|)');
        console.log('');
    }
}
const invoker = new Invoker();
const simpleCommand = new SimpleCommand(':: printing ..');
const baseReceiver = new Receiver('receive action');
const complexCommand = new ComplexCommand(baseReceiver, 'Fetching data...');
invoker.setStart(simpleCommand);
invoker.setFinish(complexCommand);
invoker.doSomething('Task1 - ');
