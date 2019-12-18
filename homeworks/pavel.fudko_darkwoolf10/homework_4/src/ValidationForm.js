import Validator from "./Validator";

export default class ErrorState {
    constructor() {
        this.errorState = ErrorState.getInstance();
    }

    validationName(value) {
        let minLength = Validator.minLength(value, 2),
            maxLength = Validator.maxLength(value, 20);
        const error = !(minLength === true && maxLength === false);

        this.errorState.render(error, form[name]);

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
