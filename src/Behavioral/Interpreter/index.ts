// шаблон проектування Interpreter дозволяє сформувати об'єктно-орієнтоване уявлення граматики для заданої мови

// Приклад патерну Інтерпретатор: Створення простого калькулятора
// Розуміння задачі:

// Створимо калькулятор, який зможе обчислювати прості арифметичні вирази, використовуючи патерн Інтерпретатор. Наприклад, він зможе обчислити вираз "2+3*4".

// Структура:

// Абстрактний вираз (Expression):

// Описує загальний інтерфейс для всіх виразів.
// Конкретні вирази:

// Число: Представляє числове значення.
// Операція: Представляє арифметичну операцію (додавання, віднімання тощо).
// Контекст:

// Може зберігати змінні та інші дані, необхідні для обчислення. В нашому випадку він не потрібен.
// Інтерпретатор:

// Аналізує вираз і будує абстрактне синтаксичне дерево.
// Обходить дерево і виконує обчислення.
// Код:

// JavaScript

// Абстрактний вираз
abstract class Expression {
   abstract interpret(): number;
}

// Число
class NumberExpression extends Expression {
   private value: number;

   constructor(value: number) {
      super();
      this.value = value;
   }

   interpret(): number {
      return this.value;
   }
}

// Операція
class OperationExpression extends Expression {
   private operator: string;
   private left: Expression;
   private right: Expression;

   constructor(operator: string, left: Expression, right: Expression) {
      super();
      this.operator = operator;
      this.left = left;
      this.right = right;
   }

   interpret(): number {
      switch (this.operator) {
         case '+':
            return this.left.interpret() + this.right.interpret();
         case '-':
            return this.left.interpret() - this.right.interpret();
         case '*':
            return this.left.interpret() * this.right.interpret();
         case '/':
            return this.left.interpret() / this.right.interpret();
         default:
            throw new Error('Unsupported operator');
      }
   }
}

// Інтерпретатор
class Interpreter {
   // В спрощеному варіанті не будемо будувати складне AST
   interpret(expression: Expression): number {
      return expression.interpret();
   }
}

// Приклад використання
const expression = new OperationExpression(
   '+',
   new NumberExpression(2),
   new OperationExpression('*', new NumberExpression(3), new NumberExpression(4))
);

const interpreter = new Interpreter();
const result = interpreter.interpret(expression);
console.log(result); // Виведе 14
