const GameOfLife = require('./../src/gameOfLife')

describe("Testing Game Of Life", () => {

    let gameOfLife;

    beforeEach(() => {
        gameOfLife = new GameOfLife();
    })

    test('testing object creation', () => {
        expect(gameOfLife).not.toBeNull()
    });
})