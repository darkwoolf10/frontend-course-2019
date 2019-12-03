import './style.scss';
import Validator from './Validator';
import ErrorState from './ErrorState';
import ValidationForm from './ValidationForm';

const errorState = ErrorState.getInstance();

const validationForm = new ValidationForm();

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = {
        name: document.querySelector('#name'),
        lastName: document.querySelector('#lastName'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        age: document.querySelector('#age'),
    };

    Object.keys(form).forEach((field ) => {
        let error = false;

        if (form[field]) {
            let value = form[field].value;

            switch (field) {
                case 'name':
                    error = validationForm.validationName(value);
                    errorState.render(error, field);
                    break;
                case 'lastName':
                    error = validationForm.validationName(value);
                    errorState.render(error, field);
                    break;
                case 'email':
                    error = validationForm.validateEmail(value);
                    errorState.render(error, field);
                    break;
                case 'phone':
                    error = validationForm.validatePhone(value);
                    errorState.render(error, field);
                    break;
                case 'age':
                    error = validationForm.validateAge(value);
                    errorState.render(error, field);
                    break;
                default:
                    console.log(`For ${field} field not found rules`);
            }
        }
    });
});
