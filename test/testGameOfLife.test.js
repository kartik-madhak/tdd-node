const GameOfLife = require('./../src/gameOfLife')
const CellType = require("../src/cellTypes");

describe("Testing Game Of Life", () => {

    let gameOfLife;

    beforeEach(() => {
        gameOfLife = new GameOfLife(3, 3);
    })

    test('testing object creation', () => {
        expect(gameOfLife).not.toBeNull()
    });

    test('should check if grid rows and cols are being set', () => {
        expect(gameOfLife.getRows()).toBe(3);
        expect(gameOfLife.getCols()).toBe(3);
    })

    test('should get the default value of cell as dead cell', () => {
        expect(gameOfLife.getCellAt(0, 0)).toBe(CellType.DEAD)
    })

    test('should set a value of a cell', () => {
        gameOfLife.setCellAt(0, 1, CellType.LIVING);
        expect(gameOfLife.getCellAt(0, 1)).toBe(CellType.LIVING)
    })
})