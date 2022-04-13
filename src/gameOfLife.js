class GameOfLife {
    constructor(rows, cols) {
        this._rows = rows;
        this._cols = cols;
    }

    getRows() {
        return this._rows;
    }

    getCols() {
        return this._cols;
    }
}

module.exports = GameOfLife;