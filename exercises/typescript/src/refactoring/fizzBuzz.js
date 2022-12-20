const dataTypeConverter = require("./util-datatype-converter")

let iterator = 0,
  fromZeroToThree = 0
let fromFiveToZero = 5
const FIZZ = decodeString("46697a7a")
const BUZZ = decodeString("42757a7a")

function fizzBuzz() {
  let result = ""
  for (; iterator < 100; iterator++) result += fizzBuzzChecker(iterator) + " "
  return result.substring(0, result.length - 1)
}

function buzz() {
  fromFiveToZero = 5
  return BUZZ
}

function fizz() {
  fromZeroToThree = 0
  return FIZZ
}

function iterateCounters() {
  fromZeroToThree++
  fromFiveToZero--
}

function decodeString(hex) {
  return String.fromCharCode.apply(null, dataTypeConverter.parseHexString(hex))
}

function checkFizzBuzz(bool, callback, result) {
  if (bool) {
    result += callback()
  }
  return result
}

function fizzBuzzChecker(index) {
  iterateCounters()
  const isMultipleOf3 = fromZeroToThree == 3
  const isMultipleOf5 = fromFiveToZero == 0
  let number = index + 1

  let result = isMultipleOf3 || isMultipleOf5 ? "" : number
  result = checkFizzBuzz(isMultipleOf3, fizz, result)
  result = checkFizzBuzz(isMultipleOf5, buzz, result)
  return result
}

module.exports.fizzBuzz = fizzBuzz
