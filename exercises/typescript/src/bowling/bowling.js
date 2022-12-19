
class BowlingGame {

  bowl(rolls) {
    const initialValue = 0
    return rolls.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
  }

  isSpare(frame) {
    if(frame[0] + frame[1] === 10) {
      return true
    } else {
      return false
    }

  }
}

module.exports = {
  BowlingGame
}