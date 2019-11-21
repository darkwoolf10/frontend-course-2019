import Singleton from './Singleton';

export default class Validator extends Singleton {
    // eslint-disable-next-line class-methods-use-this
    minLength(text, length) {
        return text.length < length;
    }

    // eslint-disable-next-line class-methods-use-this
    maxLength(text, length) {
        return text.length > length;
    }

    // eslint-disable-next-line class-methods-use-this
    pattern(text, pattern) {
        return pattern.test(text);
    }

    email(text) {
        // eslint-disable-next-line no-useless-escape
        const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        return this.pattern(text, emailPattern);
    }

    phone(text) {
        // eslint-disable-next-line no-useless-escape
        const phonePattern = /^[+][3,8]{2}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        return this.pattern(text, phonePattern);
    }

    // eslint-disable-next-line class-methods-use-this
    numberRange(number, min, max) {
        return +number > min && +number < max;
    }
}
