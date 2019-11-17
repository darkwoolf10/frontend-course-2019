import './style.scss';
import Validator from './Validator';
import ErrorState from './ErrorState';

const validator = Validator.getInstance();
const errorState = new ErrorState();

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    Object.keys(data).forEach(field => {
        let error = false;

        switch(field) {
            case 'first_name': 
                error = validator.minLength(data[field], 2) === true 
                            && validator.maxLength(data[field], 20) === false
                            ? false : true;   
                errorState.render(error, field);
                break;
            case 'last_name':
                const minLength = validator.minLength(data[field], 2);
                const maxLength = validator.maxLength(data[field], 20);
                error = minLength === true && maxLength === false ? false : true;
                
                errorState.render(error, field);
                break;
            case 'email':
                validator.email(data[field]);
                errorState.render(error, field);
                break;
            case 'phone':
                validator.phone(data[field]);
                errorState.render(error, field);
                break;
            case 'age':
                validator.numberRange(data[field], 18, 120);  
                errorState.render(error, field);
                break;
            default:
                console.log(`For ${field} field not found rules`);          
        }
    })
});

