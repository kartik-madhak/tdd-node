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

    countLiveNeighbors(i, j) {
        let counter = 0;
        for (let ii = -1; ii <= 1; ii++) {
            for (let jj = -1; jj <= 1; jj++) {

                if (ii === 0 && jj === 0)
                    continue;

                try {
                    counter += this._grid[i + ii][j + jj] === CellType.LIVING ? 1 : 0;
                } catch (e) {
                }
            }
        }
        return counter;
    }

    updateOnce() {
        let nextGrid = this._grid.map(arr => arr.slice()); //copying array
        for (let i = 0; i < this._rows; i++) {
            for (let j = 0; j < this._cols; j++) {
                const liveNeighbors = this.countLiveNeighbors(i, j);
                nextGrid[i][j] = this.predictNextCell(liveNeighbors, this._grid[i][j]);
            }
        }
        this._grid = nextGrid;
    }

    predictNextCell(liveNeighbors, currentCell) {
        if (currentCell === CellType.LIVING) {
            if (liveNeighbors < 2) {
                return CellType.DEAD;
            } else if (liveNeighbors === 2 || liveNeighbors === 3) {
                return CellType.LIVING;
            } else if (liveNeighbors > 3) {
                return CellType.DEAD;
            }
        } else if (currentCell === CellType.DEAD) {
            if (liveNeighbors === 3) {
                return CellType.LIVING;
            }
        }
        return currentCell;
    }
}


module.exports = GameOfLife;