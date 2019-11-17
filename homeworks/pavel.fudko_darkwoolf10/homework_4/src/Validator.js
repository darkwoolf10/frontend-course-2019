import Singleton from "./Singleton";

export default class Validator extends Singleton{
    constructor () {
        super();
    }

    minLength (text, length) {
        return text.length < length;
    }

    maxLength (text, length) {
        return text.length > length;
    }

    pattern (text, pattern) {
        text.match(pattern);
    }

    email (text) {
        text.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    }

    phone (text) {
        return false;
    }

    numberRange (number, min, max) {
        return +number > min && +number < max;
    }
}