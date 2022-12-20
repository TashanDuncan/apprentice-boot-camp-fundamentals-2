const dataTypeConverter = require('./util-datatype-converter')

let iterator = 0, fromZeroToThree = 0
let fromFiveToZero = 5

function fizzBuzz() {
  let result = ""
  for (; iterator < 100; iterator++) result += fizzBuzzChecker(iterator) + " "
  return result.substring(0, result.length - 1)
}

function buzz() {
  fromFiveToZero = 5
  let result = "Buzz"
  return result
}

function fizz() {
  fromZeroToThree = 0
  let result = "Fizz"
  return result
}

function fizzBuzzChecker(goingUp) {
  fromZeroToThree++
  fromFiveToZero--
  let result = fromZeroToThree == 3 || fromFiveToZero == 0 ? "" : goingUp + 1
  if (fromZeroToThree == 3) result += fizz()
  if (fromFiveToZero == 0) result += buzz()
  return result
}

module.exports.fizzBuzz = fizzBuzz