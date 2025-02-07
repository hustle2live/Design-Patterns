class Observer {
    constructor() {
        this.subscribers = [];
    }
    subscribe(client) {
        this.subscribers.push(client);
    }
    unSubscribe(client) {
        const idx = this.subscribers.indexOf(client);
        if (idx !== -1) {
            const exClient = this.subscribers.splice(idx, 1)[0];
            this.sendTo(exClient, 'unsubscribed ✔️');
            return exClient;
        }
    }
    notify(data) {
        for (const client of this.subscribers) {
            client.send(data);
        }
    }
    sendTo(client, data) {
        client.send(data);
    }
}
class Client {
    constructor(name) {
        this.name = name;
    }
    send(message) {
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
