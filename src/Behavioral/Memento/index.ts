class Professor {
   public state: string;
   constructor(state: string) {
      this.state = state;
   }

   createMemento(): Memento {
      return new Memento(this.state);
   }

   restore(memo: Memento) {
      this.state = memo.getState();
   }

   public getState(): string {
      console.log(this.state);
      return this.state;
   }
}

class Memento {
   private readonly state: string | null = null;

   constructor(state: string) {
      this.state = state;
   }

   public getState(): string {
      return this.state;
   }
}

class CareHandler {
   private mementos: Memento[] = [];
   private professor: Professor;

   constructor(instance: Professor) {
      this.professor = instance;
   }

   public backup(): void {
      this.mementos.push(this.professor.createMemento());
   }
   public undo(): void {
      if (this.mementos.length === 0) {
         return;
      }
      const memo = this.mementos.pop();
      this.professor.restore(memo);
   }
   public watch(): void {
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
