const GameOfLife = require('./../src/gameOfLife')
const CellType = require("../src/cellTypes");
const IndexOutOfBoundsError = require("../src/IndexOutOfBoundsError");

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

    test('should throw error when trying to access outside the grid', () => {
        expect(() => gameOfLife.getCellAt(1, 10)).toThrow(IndexOutOfBoundsError);
    })

    test('should throw error when trying to set outside the grid', () => {
        expect(() => gameOfLife.setCellAt(100, -10)).toThrow(IndexOutOfBoundsError);
    })

    test('should die if less than two neighbors', () => {
        gameOfLife.setCellAt(0, 1, CellType.LIVING);
        gameOfLife.setCellAt(1, 1, CellType.LIVING);

        gameOfLife.updateOnce();

        expect(gameOfLife.getCellAt(1, 1)).toBe(CellType.DEAD);
    })

    test('should live if two neighbors', () => {
        gameOfLife.setCellAt(0, 1, CellType.LIVING);
        gameOfLife.setCellAt(2, 1, CellType.LIVING);

        gameOfLife.updateOnce();

        expect(gameOfLife.getCellAt(1, 1)).toBe(CellType.LIVING);
    })

    test('should live if three neighbors', () => {
        gameOfLife.setCellAt(0, 1, CellType.LIVING);
        gameOfLife.setCellAt(2, 1, CellType.LIVING);
        gameOfLife.setCellAt(2, 2, CellType.LIVING);

        gameOfLife.updateOnce();

        expect(gameOfLife.getCellAt(1, 1)).toBe(CellType.LIVING);
    })
})