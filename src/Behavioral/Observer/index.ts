interface IObserver<T> {
   subscribe: (client: IClient<T>) => void;
   unSubscribe: (client: IClient<T>) => IClient<T> | void;
   notify: (m: T) => void;
}

class Observer<T> implements IObserver<T> {
   subscribers: IClient<T>[] = [];

   subscribe(client: IClient<T>): void {
      this.subscribers.push(client);
   }

   unSubscribe(client: IClient<T>): IClient<T> | void {
      const idx = this.subscribers.indexOf(client);
      if (idx !== -1) {
         const exClient = this.subscribers.splice(idx, 1)[0];
         this.sendTo(exClient, 'unsubscribed ✔️' as T);
         return exClient;
      }
   }

   public notify(data: T): void {
      for (const client of this.subscribers) {
         client.send(data);
      }
   }
   public sendTo(client: IClient<T>, data: T): void {
      client.send(data);
   }
}

interface IClient<P> {
   name: string;
   send(message: P): void;
}

class Client implements IClient<string> {
   name: string;
   constructor(name: string) {
      this.name = name;
   }

   send(message: string): void {
      console.log(`[Inbox ${this.name}:] ${message}`);
   }
}

const John = new Client('John');
const Greg = new Client('Greg');
const Jeffry = new Client('Jeffry');

const observer = new Observer();

observer.subscribe(John);
observer.subscribe(Greg);
observer.subscribe(Jeffry);

observer.notify('Hello subscribers👋');
console.log('');

observer.unSubscribe(Greg);
observer.sendTo(Greg, 123214);
console.log('');

observer.notify('🫡, Hey still subscribers ...');
