const GameOfLife = require('./../src/gameOfLife')

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
})