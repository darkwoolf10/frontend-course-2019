export default class Singleton {
    constructor() {
        // eslint-disable-next-line no-underscore-dangle
        if (this._instance) {
            throw new ('Instantiation failed: '
                       + 'use Singleton.getInstance() instead of new.')();
        }

        // eslint-disable-next-line no-underscore-dangle
        this._instance = true;
    }

    static getInstance() {
        // eslint-disable-next-line no-underscore-dangle
        if (this._instance) {
            // eslint-disable-next-line no-underscore-dangle
            return this._instance;
        }

        // eslint-disable-next-line no-underscore-dangle,no-return-assign
        return this._instance = new this();
    }
}
