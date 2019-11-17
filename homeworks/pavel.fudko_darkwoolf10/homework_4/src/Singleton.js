export default class Singleton {
    constructor () {
        if (this._instance) {
            throw new ("Instantiation failed: " +
                       "use Singleton.getInstance() instead of new.");
        }

        this._instance = true;
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        return this._instance = new this;
    }
}