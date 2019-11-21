export default class Singleton {
    constructor() {
        if (this.instance) {
            throw new ('Instantiation failed: '
                       + 'use Singleton.getInstance() instead of new.')();
        }

        this.instance = true;
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new this();
        return this.instance;
    }
}
