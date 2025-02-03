class Receiver {
    constructor(a) {
        this.payload = a;
    }
    action(payload) {
        console.log('Received to confirm :: ' + payload);
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
        if (!this.start || !this.finish) {
            return console.log('Set function start and finish at first');
        }
        console.log('launch (~)');
        if (!this.isStarted) {
            this.taskName = payload;
            console.log(this.taskName);
            this.isStarted = true;
            this.start.exec();
            this.finish.exec();
            this.stopDo();
            return console.log('');
        }
        console.log(`machine is working already on ${this.taskName}`);
    }
    stopDo() {
        console.log('turn off (|)');
        this.isStarted = false;
    }
}
const invoker = new Invoker();
invoker.setStart(new SimpleCommand(':: Simple Command!..'));
invoker.setFinish(new SimpleCommand(':: Finish!..'));
invoker.doSomething('Task1 - ');
invoker.doSomething('Task2 - ');
const baseReceiver = new Receiver('receive action');
const complexCommand = new ComplexCommand(baseReceiver, '__Complexxxed Command!...__');
invoker.setStart(complexCommand);
invoker.setFinish(complexCommand);
invoker.doSomething('Task3 - ');
