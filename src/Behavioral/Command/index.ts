interface IReceiver {
   action(payload: any): void;
}

class Receiver implements IReceiver {
   private payload: string;
   constructor(a: string) {
      this.payload = a;
   }

   action(payload: any): void {
      console.log('Passed to receiver :: ' + payload);
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

   private stopDo() {
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

// ------------------------ ------------------------------ ------------------------
// -------------------- unDo/reDo Implementation with Command Pattern -------------

interface ICommand {
   execute(): void;
   undo(): void; // Додаємо метод для відміни дії
}

class InvokerAdvanced {
   private undoStack: ICommand[] = [];
   private redoStack: ICommand[] = [];

   executeCommand(command: ICommand) {
      command.execute();
      this.undoStack.push(command);
      this.redoStack = []; // Очищаємо стек повторення при виконанні нової команди
   }

   undo() {
      if (this.undoStack.length === 0) return;
      const command = this.undoStack.pop();
      command.undo();
      this.redoStack.push(command);
   }

   redo() {
      if (this.redoStack.length === 0) return;
      const command = this.redoStack.pop();
      command.execute();
      this.undoStack.push(command);
   }
}
