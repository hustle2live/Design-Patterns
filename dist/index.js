class Translator {
    constructor(language, nextTranslator) {
        this.nativeLanguage = language;
        this.nextTranslator = nextTranslator || null;
    }
    makeTranslate(str) {
        console.log(`✔️ Translated by myself to ${this.nativeLanguage}`);
        console.log('');
        return `[${this.nativeLanguage}] : ${text}`;
    }
    translate(letter, lang) {
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
