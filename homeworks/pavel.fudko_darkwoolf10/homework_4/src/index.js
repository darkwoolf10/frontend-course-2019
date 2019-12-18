import './style.scss';
import ErrorState from './ErrorState';
import ValidationForm from './ValidationForm';

const validationForm = new ValidationForm();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = {
        name: document.querySelector('#name'),
        lastName: document.querySelector('#lastName'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        age: document.querySelector('#age'),
    };

    let error = validationForm.validationName(form.name.value);
    errorState.render(error, form.name);

    error = validationForm.validationName(form.lastName.value);
    errorState.render(error, form.lastName);

    error = validationForm.validateEmail(form.email.value);
    errorState.render(error, form[email]);

    error = validationForm.validatePhone(form.phone.value);
    errorState.render(error, form.phone);


    Object.keys(form).forEach((field ) => {
        let error = false;

        if (form[field]) {
            let value = form[field].value;

            switch (field) {
                case 'name':

                    break;
                case 'lastName':

                    break;
                case 'email':

                    break;
                case 'phone':

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
