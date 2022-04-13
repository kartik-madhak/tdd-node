const CellType = require("./cellTypes");
const IndexOutOfBoundsError = require("./IndexOutOfBoundsError");

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
        this.checkBoundary(i, j)
        return this._grid[i][j];
    }

    setCellAt(i, j, cellType) {
        this.checkBoundary(i, j)
        this._grid[i][j] = cellType;
    }

    checkBoundary(i, j) {
        if (i < 0 || i >= this._rows || j < 0 || j >= this._cols)
            throw new IndexOutOfBoundsError();
    }
}


module.exports = GameOfLife;