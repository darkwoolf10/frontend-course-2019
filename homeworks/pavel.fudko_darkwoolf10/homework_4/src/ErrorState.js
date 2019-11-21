import Singleton from './Singleton';

export default class ErrorState extends Singleton {
    constructor() {
        super();
        this.form = document.getElementById('contact-form');
    }

    render(error, field) {
        const input = this.form.querySelector(`input[name=${field}]`);

        if (error === true) {
            input.style.border = '3px solid green';
            return true;
        }

        input.style.border = '3px solid red';
        return false;
    }
}
