
class BowlingGame {

  score(rolls) {
    let total = 0
    let rollIndex = 0
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frame = [rolls[rollIndex],rolls[rollIndex +1]]
      const nextFrame = [rolls[rollIndex+2],rolls[rollIndex+3]]

      total += frame.reduce((accumulator, currentValue) => accumulator + currentValue,0)

      if(this.isStrike(frame)){
        total += nextFrame.reduce((accumulator, currentValue) => accumulator + currentValue,0)
      }
      else if(this.isSpare(frame)){
        total += nextFrame[0]
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