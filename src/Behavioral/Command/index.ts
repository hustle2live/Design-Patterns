interface IReceiver {
   action(payload: any): void;
}

class Receiver implements IReceiver {
   private payload: string;
   constructor(a: string) {
      this.payload = a;
   }

   action(payload: any): void {
      console.log('Received to confirm :: ' + payload);
   }
}

abstract class Command {
   receiver: Receiver | null;
   payload: string;

   constructor(payload: string, receiver?: Receiver) {
      this.payload = payload;
      this.receiver = receiver || null;
   }

   abstract exec(): void;
}

class SimpleCommand extends Command {
   exec(): void {
      console.log(`I can do this simple ${this.payload}`);
   }
}

class ComplexCommand implements Command {
   payload: string;
   receiver: Receiver;

   constructor(receiver: Receiver, payload: string) {
      this.receiver = receiver;
      this.payload = payload;
   }

   exec(): void {
      this.receiver.action(this.payload);
   }
}

class Invoker {
   private isStarted: boolean;
   private taskName: string | null = null;
   private start: Command | null;
   private finish: Command | null;

   constructor() {
      this.isStarted = false;
      this.start = null;
      this.finish = null;
   }

   public setStart(command: Command): void {
      this.start = command;
   }

   public setFinish(command: Command): void {
      this.finish = command;
   }

   doSomething(payload: string): void {
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

   private stopDo() {
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
