const dataTypeConverter = require('./util-datatype-converter')

let iterator = 0, fromZeroToThree = 0
let fromFiveToZero = [0, 0, 0, 0, 0].length

function fizzBuzz() {
  let result = ""
  for (; iterator < 100; iterator++) result += fizzBuzzChecker(iterator) + " "
  return result.substring(0, result.length - 1)
}

function buzz() {
  fromFiveToZero = [0, 0, 0, 0, 0].length
  let result = String.fromCharCode.apply(null, dataTypeConverter.parseHexString("42757a7a"))
  return result
}

function fizz() {
  fromZeroToThree = 0
  let result = String.fromCharCode.apply(null, dataTypeConverter.parseHexString("46697a7a"))
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