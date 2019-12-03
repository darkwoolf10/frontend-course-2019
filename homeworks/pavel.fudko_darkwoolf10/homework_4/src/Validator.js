import Singleton from './Singleton';
import {regexEmail, regexPhone} from './regex';

export default class Validator extends Singleton {
    static minLength(text, length) {
        return text.length < length;
    }

    static maxLength(text, length) {
        return text.length > length;
    }

    static pattern(text, pattern) {
        return pattern.test(text);
    }

    static email(text) {
        return Validator.pattern(text, regexEmail);
    }

    static phone(text) {
        return Validator.pattern(text, regexPhone);
    }

    static numberRange(number, min, max) {
        return +number > min && +number < max;
    }
}
