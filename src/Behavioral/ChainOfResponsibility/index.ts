interface ITranslator {
   translate: (letter: string, lang: string) => string | null;
}

class Translator implements ITranslator {
   private readonly nativeLanguage: string;
   private readonly nextTranslator: ITranslator | null;

   constructor(language: string, nextTranslator?: ITranslator) {
      this.nativeLanguage = language;
      this.nextTranslator = nextTranslator || null;
   }

   private makeTranslate(str: string): string {
      console.log(`✔️ Translated by myself to ${this.nativeLanguage}`);
      console.log('');
      return `[${this.nativeLanguage}] : ${text}`;
   }

   translate(letter: string, lang: string): string | null {
      console.log(`try translate ${lang} letter...`);
      if (this.nativeLanguage === lang) {
         return this.makeTranslate(text);
      }

      if (this.nextTranslator) {
         console.log('🔀 Passing to next translator...');
         return this.nextTranslator.translate(letter, lang);
      }

      console.log(`❌ No translator available for "${lang}"`);
      return null;
   }
}

const chiTranslator = new Translator('CHI');
const ukrTranslator = new Translator('UKR', chiTranslator);
const engTranslator = new Translator('ENG', ukrTranslator);

const text = 'lorem ipsum dolor...';

engTranslator.translate(text, 'UKR');
engTranslator.translate(text, 'ENG');
engTranslator.translate(text, 'CHI');
engTranslator.translate(text, 'GER');
