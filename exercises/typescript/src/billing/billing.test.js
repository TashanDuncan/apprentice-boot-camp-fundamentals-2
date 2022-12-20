/* eslint-disable no-undef */

const { Customer } = require('./billing.js')

describe('Customer Billing', () => {

  it('should return 60 when private seller has 3 adverts and no products', () => {
    //arrange
    const customer = new Customer(false,3)
    //act

    //assert
    expect(customer.bill()).toBe(60)
  })

  it('should return 150 when dealer has 3 adverts and no products', () => {
    //arrange
    const customer = new Customer(true,3)
    //act

    //assert
    expect(customer.bill()).toBe(150)
  })

  it('should return 30 when private seller has 1 adverts and 1 product', () => {
    //arrange
    const customer = new Customer(false,1,1)

    //act

    //assert
    expect(customer.bill()).toBe(30)
  })

  it('should return 1600 when private seller has 1 adverts and 1 product', () => {
    //arrange
    const customer = new Customer(false,1,1)

    //act

    //assert
    expect(customer.bill()).toBe(30)
  })
})