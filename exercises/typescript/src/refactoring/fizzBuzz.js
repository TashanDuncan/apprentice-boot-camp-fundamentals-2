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
  return "Buzz"
}

function fizz() {
  fromZeroToThree = 0
  return "Fizz"
}

function fizzBuzzChecker(index) {

  fromZeroToThree++
  fromFiveToZero--
  const isMultipleOf3 = fromZeroToThree == 3
  const isMultipleOf5 = fromFiveToZero == 0
  let number = index + 1

  let result = isMultipleOf3 || isMultipleOf5 ? "" : number
  if (isMultipleOf3) result += fizz()
  if (isMultipleOf5) result += buzz()
  return result
}

module.exports.fizzBuzz = fizzBuzz