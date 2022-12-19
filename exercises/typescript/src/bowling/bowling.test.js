/* eslint-disable no-undef */
const { BowlingGame } = require('./bowling.js')
describe('Bowling tests', () => {
  test('when all rolls are 0 return 0', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(0)
  })

  test('when all rolls are 1 return 20', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(20)
  })

  test('add score from next frame if first frame is spare', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [5,5, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(12)
  })

  test('can handle consecutive spares', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [5,5, 5,5, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(27)
  })

  test('can handle consecutive strikes', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [10,0, 10,0, 1,1, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(35)
  })

  test('return true if frame is equal to 10', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act

    //assert
    expect(bowlingGame.isSpare([4,6])).toBe(true)
    expect(bowlingGame.isSpare([2,6])).toBe(false)
  })

  test('return true if first roll in frame is equal to 10', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act

    //assert
    expect(bowlingGame.isStrike([4,6])).toBe(false)
    expect(bowlingGame.isStrike([2,6])).toBe(false)
    expect(bowlingGame.isStrike([10,0])).toBe(true)
    expect(bowlingGame.isStrike([10,5])).toBe(true)
  })

  test('adds sum of next frame after strike', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [10,0, 1,1, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0,]

    //assert
    expect(bowlingGame.score(rolls)).toBe(14)
  })

  test('all strikes', () => {
    //arrange
    const bowlingGame = new BowlingGame()

    //act
    const rolls = [10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0, 10,0]

    //assert
    expect(bowlingGame.score(rolls)).toBe(300)
  })
})
