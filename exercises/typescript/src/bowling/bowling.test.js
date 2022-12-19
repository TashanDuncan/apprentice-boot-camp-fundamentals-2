/* eslint-disable no-undef */
const { BowlingGame } = require('./bowling.js')
describe('Bowling tests', () => {
  test('when all rolls are 0 return 0', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.bowl(rolls)).toBe(0)
  })

  test('when all rolls are 1 return 20', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1,]

    //assert
    expect(bowlingGame.bowl(rolls)).toBe(20)
  })

  test('return true if frame is equal to 10', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act

    //assert
    expect(bowlingGame.isSpare([4,6])).toBe(true)
    expect(bowlingGame.isSpare([2,6])).toBe(false)
  })
})
