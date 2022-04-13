const CellType = require("./cellTypes");

class GameOfLife {
    constructor(rows, cols) {
        this._rows = rows;
        this._cols = cols;
        this._grid = [];

        for (let i = 0; i < rows; i++) {
            this._grid[i] = [];

            for (let j = 0; j < cols; j++) {
                this._grid[i][j] = CellType.DEAD;
            }
        }
    }

    getRows() {
        return this._rows;
    }

    getCols() {
        return this._cols;
    }

    getCellAt(i, j) {
        return this._grid[i][j];
    }
}


module.exports = GameOfLife;