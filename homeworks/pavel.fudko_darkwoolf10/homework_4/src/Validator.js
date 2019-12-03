import Singleton from './Singleton';

export default class Validator extends Singleton {
    static minLength(text, length) {
        console.log(text);
        return text.length < length;
    }

    static maxLength(text, length) {
        return text.length > length;
    }

    static pattern(text, pattern) {
        return pattern.test(text);
    }

    static email(text) {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

        return Validator.pattern(text, emailPattern);
    }

    static phone(text) {
        const phonePattern = /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/;

        return Validator.pattern(text, phonePattern);
    }

    static numberRange(number, min, max) {
        return +number > min && +number < max;
    }
}
