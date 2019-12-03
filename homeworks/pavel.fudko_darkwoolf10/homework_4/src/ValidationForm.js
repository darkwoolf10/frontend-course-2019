import Validator from "./Validator";

export default class ErrorState {
    validationName(value) {
        let minLength = Validator.minLength(value, 2),
            maxLength = Validator.maxLength(value, 20);
        return !(minLength === true && maxLength === false);
    }

    validateEmail(value) {
        return Validator.email(value);
    }

    validatePhone(value) {
        return Validator.phone(value);
    }

    validateAge(value) {
        return Validator.numberRange(value, 18, 120);
    }
}
