import Singleton from './Singleton';

export default class ErrorState extends Singleton {
    constructor() {
        super();
    }

    render(error, field) {
        const input = document.querySelector(`#${field}`);

        if (error) {
            this.setSuccessClass(input, error);
            return true;
        }

        this.setDangerClass(input, error);
    }

    setSuccessClass(input, error){
        input.classList.add('success', error);
        input.classList.remove('danger', error);
    }

    setDangerClass(input, error) {
        input.classList.remove('success', !error);
        input.classList.toggle('danger', !error);
    }
}
