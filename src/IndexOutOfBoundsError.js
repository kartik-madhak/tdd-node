class IndexOutOfBoundsError extends Error {
    constructor() {
        super('Index is out of bounds');
        this.name = 'IndexOutOfBoundsError';
    }
}

module.exports = IndexOutOfBoundsError;