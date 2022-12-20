
class BowlingGame {

  score(rolls) {
    let total = 0
    let rollIndex = 0
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const currentAndNextRoll = [rolls[rollIndex],rolls[rollIndex +1]]
      total += currentAndNextRoll.reduce((accumulator, currentValue) => accumulator + currentValue,0)

      if(this.isStrike(currentAndNextRoll)){
        console.log(rolls[rollIndex + 2])
        total += rolls[rollIndex + 2]
      }
      else if(this.isSpare(currentAndNextRoll)){
        total += rolls[rollIndex+2]
      }

      rollIndex += 2
    }
    return total
  }

  isSpare(frame) {
    if(frame[0] + frame[1] === 10) {
      return true
    } else {
      return false
    }
  }

  isStrike(frame) {
    if(frame[0] === 10) {
      return true
    } else {
      return false
    }
  }

}

module.exports = {
  BowlingGame
}