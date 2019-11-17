export default class Validator {
    constructor () {
        this.form = document.getElementById('contact-form');
    }

    render(error, field) {
        const input = this.form.querySelector(`input[name=${field}]`);
        console.log(field);
        error  === true ? this._successStatus(input) : this._failureStatus(input);
    }

    _successStatus(input) {
        input.style.border = '3px solid green';
    }

    _failureStatus(input) {
        input.style.border = '3px solid red';
    }
}