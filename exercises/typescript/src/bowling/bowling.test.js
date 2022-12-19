/* eslint-disable no-undef */
const { BowlingGame } = require('./bowling.js')
describe('Bowling tests', () => {
  test('all rolls are 0', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.bowl(rolls)).toBe(0)
  })
})
