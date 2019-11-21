import Singleton from './Singleton';

export default class ErrorState extends Singleton {
    constructor() {
        super();
        this.form = document.getElementById('contact-form');
    }

    render(error, field) {
        const input = this.form.querySelector(`input[name=${field}]`);

        // eslint-disable-next-line no-unused-expressions
        error === true ? this.successStatus(input) : this.failureStatus(input);
    }

    // eslint-disable-next-line class-methods-use-this
    successStatus(input) {
        // eslint-disable-next-line no-param-reassign
        input.style.border = '3px solid green';
    }

    // eslint-disable-next-line class-methods-use-this
    failureStatus(input) {
        // eslint-disable-next-line no-param-reassign
        input.style.border = '3px solid red';
    }
}
