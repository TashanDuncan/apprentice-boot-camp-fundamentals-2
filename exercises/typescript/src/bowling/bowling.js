
class BowlingGame {

  bowl(rolls) {
    const initialValue = 0
    return rolls.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
  }
}

module.exports = {
  BowlingGame
}