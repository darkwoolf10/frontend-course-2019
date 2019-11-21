import './style.scss';
import Validator from './Validator';
import ErrorState from './ErrorState';

const validator = Validator.getInstance();
const errorState = ErrorState.getInstance();

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    Object.keys(data).forEach((field) => {
        let error = false;
        let minLength;
        let maxLength;

        switch (field) {
            case 'first_name':
                minLength = validator.minLength(data[field], 2);
                maxLength = validator.maxLength(data[field], 20);
                error = !(minLength === true && maxLength === false);

                errorState.render(error, field);
                break;
            case 'last_name':
                minLength = validator.minLength(data[field], 2);
                maxLength = validator.maxLength(data[field], 20);
                error = !(minLength === true && maxLength === false);

                errorState.render(error, field);
                break;
            case 'email':
                error = validator.email(data[field]);

                errorState.render(error, field);
                break;
            case 'phone':
                error = validator.phone(data[field]);

                errorState.render(error, field);
                break;
            case 'age':
                error = validator.numberRange(data[field], 18, 120);

                errorState.render(error, field);
                break;
            default:
                console.log(`For ${field} field not found rules`);
        }
    });
});
