const dataTypeConverter = require('./util-datatype-converter')

let iterator = 0, fromZeroToThree = 0
let fromFiveToZero = [0, 0, 0, 0, 0].length

function fizzBuzz() {
  let result = ""
  for (; iterator < 100; iterator++) result += b(iterator) + " "
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

function b(foo) {
  fromZeroToThree++
  fromFiveToZero--
  let result = fromZeroToThree == 0b11 || fromFiveToZero == 0 ? "" : foo + 1
  if (fromZeroToThree == 0b11) result += fizz()
  if (fromFiveToZero == 0) result += buzz()
  return result
}

module.exports.fizzBuzz = fizzBuzz